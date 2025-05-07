"use client"
import React, { useEffect } from 'react'
import useIsMobile from '../hooks/useMobile';
import useAuthStore from '../store/useAuthStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Page = () => {
    const isMobile = useIsMobile();
    const {isLoggedIn, user} = useAuthStore();

    const router = useRouter();
    useEffect(()=>{
        if (isLoggedIn === false) { 
            router.push('/');
        }
    }, [isLoggedIn, router])


    if (isMobile) {
      return (
        <div className="h-screen flex items-center px-10 justify-center bg-black text-white text-xl">
          Please switch to a desktop device for the best experience.
        </div>
      );
    }
  return (
    <div className='h-screen flex  px-10 justify-center text-xl'>
        <div className='flex flex-col items-center mt-10 gap-7 mb-4'>
        {user?.avatarUrl ? (
            <Image 
                className='rounded-full' 
                src={user.avatarUrl} 
                width={100} 
                height={100} 
                alt={user.name ? `${user.name}'s avatar` : 'User avatar'} 
            />
        ) : (

            <div className="w-[100px] h-[100px] rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Avatar</span>
            </div>
        )}
        <p>Welcome Back {user?.name}</p>
        </div>


    </div>
  )
}

export default Page