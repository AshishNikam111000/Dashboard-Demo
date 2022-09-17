import React from 'react'

const Card = (props) => {
    return (
        <div className='w-1/4 p-5 rounded-lg gap-3 flex flex-col'
            style={props.cardStyles}
        >
            <div className='w-full'>
                <img src={props.Icon} alt="Icon" style={props.iconStyles} />
            </div>
            <div className='w-full'>{props.title}</div>
            <div className='w-full text-right font-bold text-black text-[30px]'>{props.value}</div>
        </div >
    )
}

export default Card