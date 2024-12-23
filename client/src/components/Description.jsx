import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>turn your imagination into visuals</p>

            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img src={assets.sample_img_1} className='w-80 xl:w-98 rounded-lg' alt="" />
                <div className="">
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Features</h2>
                    <ul className='text-gray-600'>
                        <li>AI-Powered Artwork: Advanced technology to turn text into high-quality visuals.</li>
                        <li>Diverse Styles: Explore options like abstract art, realistic photography, and beyond.</li>
                        <li>User-Friendly Interface: Simple, intuitive design for creators of all skill levels.</li>
                        <li>Instant Results: Generate stunning images in seconds.</li>
                        <li>Unlimited Inspiration: Whether for fun, work, or creativity, the possibilities are endless.</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
