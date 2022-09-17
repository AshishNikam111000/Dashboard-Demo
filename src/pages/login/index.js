import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigator = useNavigate();
    
    return (
        <div className='login w-screen h-screen flex justify-center items-center'>
            <div className='loginBox bg-white flex flex-col justify-center items-center p-5 gap-8 pt-8 pb-12'>
                <div className='loginHeader w-full'>CRUD OPERATIONS</div>
                <div className='text-center w-full'>
                    <div className='text-[22px] font-semibold'>SIGN IN</div>
                    <div className='text-sm text-[#6C6C6C] font-normal'>Enter your credentials to access your account</div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm text-[#6C6C6C] font-medium'>Email</div>
                        <input className='w-full' type="email" name="Email" id="emailID" placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm text-[#6C6C6C] font-medium'>Password</div>
                        <input className='w-full' type="password" name="Password" id="passwordID" placeholder='Enter your password' />
                    </div>
                    <button className='loginBtn' onClick={() => navigator("/dashboard")}>SIGN IN</button>
                </div>
            </div>
        </div>
    )
}

export default Login