import React from 'react'
import Switch from "react-switch";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


function Card({ monthly, setMonthly, lightMode ,setPrice, price  }) {
    
    return (
        <> <div className='p-4  flex justify-center items-center flex-col relative ' >
            <div className={lightMode ? "m-8 p-2 text-black" : "m-8 p-2 text-white"}>
                <h1 className='text-2xl text-center font-semibold'>  Simple, traffic based pricing</h1>
                <p className='text-xs text-center'> Sign-up for our 30 day trial. No credit card required</p>
                <div>
                    <img src="pattern-circles.svg" alt='circles-pattern'
                        className={lightMode ? "absolute top-0  right-40 -z-10" : "absolute top-0  right-40 -z-10 text-white invert"} />
                </div>
            </div>
            <div className={lightMode ? "m-4 p-10 rounded-lg bg-white shadow-lg" : "m-4 p-10 rounded-lg bg-gray-200 shadow-lg"}>
               
                <div className='flex flex-col sm:flex-row  justify-between items-center '>
                    <div className={lightMode ? 'text-xs font-semibold text-gray-400' : "text-xs font-semibold text-black"}>
                        100K PAGEVIEWS
                    </div>
                    <div className='flex items-center my-5 md:my-0'>
                        <span className='text-2xl font-bold'>${price}.00</span>
                        <span className={lightMode ? 'text-xs text-gray-400 font-semibold px-2' : 'text-xs text-black font-semibold px-2'}>/ month</span>
                    </div>
                </div>
                <div className='my-4'>
                    <Slider min={0} max={100.00}  onChange={setPrice} value={price}/>
                </div>
                <div className={lightMode ? 'flex text-xs font-semibold text-gray-400 items-center mx-8 my-4' : 'flex text-xs font-semibold text-black items-center mx-8 my-4'}>
                    <div className=' m-1'>
                        Monthly Biling
                    </div>
                    <div className=' m-2 mt-3' >
                        <label>
                            <Switch onChange={setMonthly} height={20}
                                width={40} checked={monthly} offColor='#d1d8ee' onColor='#79e8e0'
                                handleDiameter={15}
                                uncheckedIcon="" checkedIcon="" />
                        </label>
                    </div>
                    <div className=' m-1'>
                        Yearly Biling
                    </div>
                    <div className='px-2 py-1 border border-1 bg-red-100 text-red-400 border-red-500 rounded-lg m-1  '>
                        20% discount
                    </div>
                </div>
                <hr></hr>
                <div className='flex flex-col sm:flex-row justify-between items-center my-4'>
                    <div className={lightMode ? 'm-3 text-xs text-gray-400 font-semibold' : 'm-3 text-xs text-black font-semibold'} >
                        <ul>
                            <li className='flex items-center'>
                                <img src="icon-check.svg" alt='checked' className='pr-2' />
                                <div>Unlimited websites</div>
                            </li>
                            <li className='flex items-center'>
                                <img src="icon-check.svg" alt='checked' className='pr-2' />
                                <div>100% data ownership</div>
                            </li>
                            <li className='flex items-center'>
                                <img src="icon-check.svg" alt='checked' className='pr-2' />
                                <div>Email reports</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button style={{ backgroundColor: "#293257" }} className=' text-xs text-white p-3 px-10 rounded-3xl m-2 '>
                            Start my trial
                        </button>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Card