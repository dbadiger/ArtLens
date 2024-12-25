import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {

  const navigate = useNavigate();

  const { user, backendurl, setShowLogin, loadCreditsData, token, } = useContext(AppContext)


  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        // console.log(response);

        try {
          const { data } = await axios.post(backendurl + "/api/user/verify-razorpay", { response }, { headers: { token } })
          if (data.success) {
            loadCreditsData();
            navigate("/")
            toast.success("Credit Added");
          }

        } catch (error) {
          toast.error(error.message)
        }

      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
      }
      const { data } = await axios.post(backendurl + "/api/user/pay-razor", { planId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      < h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the Plan</h1>


      <div className="flex flex-wrap justify-center gap-6 text-left">
        {
          plans.map((item, index) => (
            <div className="bg-white grop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500" key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'><span className='text-3xl font-medium'>₹ {item.price}</span>/{item.credits} credits</p>
              <button
                onClick={() => paymentRazorpay(item.id)}
                className='bg-gray-800 mt-8 text-white w-full py-2.5 min-w-52 text-sm rounded-md'>
                {user ? 'Buy Now' : 'Get Started'}</button>
            </div>
          ))
        }


      </div>


    </motion.div>
  )
}

export default BuyCredit
