'use client'

import { slideIn } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function ContactForm() {
    return (
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl bg-opacity-70'
        >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

            <form
                className='mt-12 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <input
                        type='text'
                        name='name'
                        placeholder="What's your good name?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your email</span>
                    <input
                        type='email'
                        name='email'
                        placeholder="What's your web address?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <textarea
                        rows={7}
                        name='message'
                        placeholder='What you want to say?'
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    Send
                </button>
            </form>
        </motion.div>
    )
}