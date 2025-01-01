import logo from './ArtLens.png'
import logo_icon from './artlens_favicon.png'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import user_icon from "./user.png"
import tiger from "./tiger.webp"
import women from "./women.webp"
import lion from "./lion.webp"
import bmw from "./bmw.webp"

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    user_icon,
    lion,
    tiger,
    women,
    bmw
  
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a detailed text description of the image you want to create. Be as creative as you like! Example: "A futuristic cityscape at sunset with glowing neon lights."',
      icon: step_icon_1,
    },
    {
      title: 'Generate and Customize',
      description: 'Watch ArtLens create your image in seconds. Make adjustments if needed, and fine-tune your artwork.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Save your high-quality image and showcase your creativity to the world.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Jeevan B',
        role:'Graphic Designer',
        stars:5,
        text:`ArtLens has completely transformed the way I approach design projects. It's fast, reliable, and incredibly inspiring!`
    },
    {
        image:profile_img_2,
        name:'Shreyas S',
        role:'Content Creator',
        stars:4,
        text:`ArtLens has revolutionized the way my team approaches creative projects. The AI is powerful, and the results are professional-grade.`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:`From landscapes to abstract pieces, the results always exceed my expectations. ArtLens fuels my imagination!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]