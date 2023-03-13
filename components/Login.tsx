'use client'

import {signIn} from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className='bg-[#11a37f] items-center justify-center h-screen flex flex-col text-center'>
        <Image
            src='https://links.papareact.com/2i6'
            width={300}
            height={300}
            alt='ChatGPT-Logo'
        />
        <button
            className='text-white font-bold text-2xl animate-pulse'
            onClick={()=>signIn("google")}
        >
            Sign In to Chatgpt</button>
    </div>
  )
}

export default Login