import React from 'react'
import * as Icons from '../assets/Icons'
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigator = useNavigate();

    return (
        <div className='dashboardSideBar flex flex-col items-center w-1/5 h-screen justify-around'>
            <div className='dashboardSideBarHeader'>CRUD OPERATIONS</div>
            <div className='flex flex-col items-center gap-2'>
                <div className='dashboardSideBarProfile'></div>
                <div className='text-[17px] font-bold'>Karthi Madesh</div>
                <div className='text-[14px] font-medium text-[#FEAF00]'>Admin</div>
            </div>
            <div className='dashboardSideBarBtnContianer w-1/2 flex flex-col gap-3'>
                <div className='flex dashboardSideBarBtn' onClick={() => navigator("/dashboard")}>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.homeIcon} alt="Home" />
                    </div>
                    <div className='w-full'>Home</div>
                </div>
                <div className='flex dashboardSideBarBtn'>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.courseIcon} alt="Course" />
                    </div>
                    <div className='w-full'>Course</div>
                </div>
                <div className='flex dashboardSideBarBtn' onClick={() => navigator("/student")}>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.studentsIcon} alt="Students" />
                    </div>
                    <div className='w-full'>Students</div>
                </div>
                <div className='flex dashboardSideBarBtn'>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.paymentIcon} alt="Payment" />
                    </div>
                    <div className='w-full'>Payment</div>
                </div>
                <div className='flex dashboardSideBarBtn'>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.reportIcon} alt="Report" />
                    </div>
                    <div className='w-full'>Report</div>
                </div>
                <div className='flex dashboardSideBarBtn'>
                    <div className='w-full flex justify-center'>
                        <img src={Icons.settingsIcon} alt="Settings" />
                    </div>
                    <div className='w-full'>Settings</div>
                </div>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigator("/")}>
                <div>Logout</div>
                <div>
                    <img src={Icons.logoutIcon} alt="Logout" />
                </div>
            </div>
        </div>
    )
}

export default SideBar