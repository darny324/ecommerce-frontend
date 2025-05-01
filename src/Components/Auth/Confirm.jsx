import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Spinner = () => {
    return (
        <span className="flex items-center justify-center">
        <div className="w-6 h-6 border-3 border-blue-500 border-solid border-t-white border-r-white border-b-white rounded-full animate-spin"></div>
        </span>
    );
};

const Confirm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(120);
    const [otp, setOtp] = useState('');
    const timerRef = useRef();

    const query = useSearchParams();
    const {email, password, name} = Object.fromEntries(query[0]);
    console.log(email, password, name);
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(t => t - 1);
        }, 1000);

        return () => {
            clearInterval(timerRef.current);
        }
    }, []);

    useEffect(() => {
        if ( timer <= 0 ){
            clearInterval(timerRef.current);
        }
    }, [timer])

    const confirmOtp = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1.5 * 1000);
    }
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div className="px-8 py-8 rounded-lg shadow-xl w-[300px] md:w-[400px]">
                <h1 className="text-center">Sign Up</h1>
                <div className=" flex flex-col gap-4 mt-8">
                    
                        <div className="w-full">
                        <label className="text-sm font-semibold ml-2">OTP:</label>
                        <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='otp code' value={otp} onChange={(e) => setOtp(e.target.value)} />
                        </div>
                        <div className="text-red-400">expire in: {timer}s</div>

                        <button 
                        disabled={isLoading}
                        onClick={() => {
                        confirmOtp();
                        }}
                        className="bg-yellow-400 py-2 rounded-md disabled:bg-yellow-300  hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
                        {
                            isLoading ? 
                            <Spinner /> : <>Confirm</>
                        }
                        </button>
                        <Link
                        to='/sign-up'
                        className=' bg-gray-300 rounded-md py-2 text-center hover:bg-gray-400 transition-all duration-300 ease-in-out'
                        >
                            Back
                        </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Confirm