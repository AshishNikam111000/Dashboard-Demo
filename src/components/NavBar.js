import React from 'react'
import * as Icons from '../assets/Icons'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-full h-fit p-1 pr-10 pt-3'>
            <div>
                <img className='cursor-pointer' src={Icons.navbarSideBtnIcon} alt="navbarSideBtn" />
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex relative'>
                    <input className='SearchInput' type="text" name="Search" id="searchID" placeholder='Search...' />
                    <div className='absolute p-2 h-full right-0 flex items-center justify-center'>
                        <img className='cursor-pointer' src={Icons.serachIcon} alt="Search" />
                    </div>
                </div>
                <div>
                    <img className='cursor-pointer' src={Icons.bellIcon} alt="Bell" />
                </div>
            </div>
        </div>
    )
}

export default NavBar