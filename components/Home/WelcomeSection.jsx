import Navbar from '@/common/Navbar';
import React from 'react'

const WelcomeSection = () => {
    return (
        <div className="bg-black">
            <div className="w-full max-h-screen object-cover">
                <img src="/images/home/background.png" alt="background" />
            </div>
        <div className="absolute inset-0 bg-black/60 max-h-screenx">
            <Navbar />
            <div className="center flex-col sm:gap-2 md:mt-9 sm:mt-6">
                <h1 className={`text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold mt-5 md:mt-24 lg:mt-28 xl:mt-36 tracking-wider text-center`}>
                    Welcome to <span className="text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold ml-2 text-primary tracking-wide">Qoptars</span>
                </h1>
                <p className={`text-base mt-3 sm:text-xs md:text-lg lg:text-xl font-semibold tracking-widest uppercase text-center opacity-80`}>
                Redefining Aerial Intelligence and Autonomous Drones with AI.
                </p>
                <button className="btn px-5 rounded-md mt-14 tracking-wide">
                Learn More About Our Technology
                </button>
            </div>
        </div>
        </div>
    )
}

export default WelcomeSection;