import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import * as Icons from '../../assets/Icons'
import Card from '../../components/Card'

const Dashboard = () => {
    return (
        <div className='flex'>
            <SideBar />
            <div className='flex flex-col w-full'>
                <NavBar />
                <div className='flex gap-5 p-5'>
                    <Card
                        Icon={Icons.studentsIcon}
                        title="Students"
                        value="243"
                        cardStyles={
                            {
                                backgroundColor: '#F0F9FF',
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#6C6C6C',
                            }
                        }
                        iconStyles={
                            {
                                color:'#74C1ED',
                                width: '50px',
                                height: '50px'
                            }
                        }
                    />
                    <Card
                        Icon={Icons.courseIcon}
                        title="Course"
                        value="13"
                        cardStyles={
                            {
                                backgroundColor: '#FEF6FB',
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#6C6C6C',
                            }
                        }
                        iconStyles={
                            {
                                color:'#EE95C5',
                                width: '50px',
                                height: '50px'
                            }
                        }
                    />
                    <Card
                        Icon={Icons.paymentIcon}
                        title="Payments"
                        value="INR 556,000"
                        cardStyles={
                            {
                                backgroundColor: '#FEFBEC',
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#6C6C6C',
                            }
                        }
                        iconStyles={
                            {
                                fill:'#F6C762',
                                width: '50px',
                                height: '50px'
                            }
                        }
                    />
                    <Card
                        Icon={Icons.userIcon}
                        title="User"
                        value="3"
                        cardStyles={
                            {
                                background: 'linear-gradient(110.42deg, #FEAF00 18.27%, #F8D442 91.84%)',
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#FFFFFF',
                            }
                        }
                        iconStyles={
                            {
                                color:'#FFFFFF',
                                width: '50px',
                                height: '50px'
                            }
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard