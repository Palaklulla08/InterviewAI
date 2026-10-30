import React from 'react'
import {BsRobot}from 'react-icons/bs'
import { IoSparkles } from 'react-icons/io5'

function Auth() {
  return (
    <div className=" w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
        <div className= "w-full max-w-md bg-white rounded-3xl shadow-2xl bg-white border border-gray-200 p-8">
            <div className="flex gap-3 mb-6 items-center justify-center">
                <div className="p-2 bg-black text-white rounded-lg">
                    <BsRobot size={18}/>
                </div>
                <h2 className="text-lg font-semibold">InterviewAI </h2>
            </div>
            <h1 className="text-2xl  md:text-3xl font-semibold text-center leading-snug mb-4">
                Continue with{" "}
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
                    <IoSparkles size={16}/>
                    AI Smart Interview
                </span>
            </h1>
            <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
                Sign in to start your AI-powered mock interviews, trackyour progress, and unlock detailed performance insights.
            </p>

        </div>


    </div>
  )
}

export default Auth