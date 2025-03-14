import { useEffect, useRef, useState } from "react"

const Spinner = () => {
  return (
    <span className="flex items-center justify-center">
      <div className="w-6 h-6 border-3 border-blue-500 border-solid border-t-white border-r-white border-b-white rounded-full animate-spin"></div>
    </span>
  );
};

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [seen, setSeen] = useState(false);
  const [page, setPage] = useState('info');
  const [timer, setTimer] = useState(60);
  const timeRef = useRef(null);
  const [valid, setIsValid] = useState(true);

  useEffect(() => {
    if ( page === 'otp'){
      timeRef.current = setInterval(() => {
        setTimer( t => t - 1);
      }, 1000);
    }
  }, [page]);

  useEffect(() => {
    if ( timer <= 0 ){
      clearInterval(timeRef.current);
    }
  }, [timer])
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="px-8 py-8 rounded-lg shadow-xl w-[300px] md:w-[400px]">
        <h1 className="text-center">Sign Up</h1>
        <div className=" flex flex-col gap-4 mt-8">
          {
            page === 'info' ? 
            <>
              <div className="w-full">
                <label className="text-sm font-semibold ml-2">Fullname:</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='e.g., John Smith' value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </div>

              <div className="w-full">
                <label className="text-sm font-semibold ml-2">Email:</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='e.g., example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="w-full">
                <label className="text-sm font-semibold ml-2">Password:</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='e.g., ksd@8929dk' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

             
                
                {
                  valid === false ? <div className="text-red-500">Your Username or Email or Password is invalid</div> : <></>
                }
              <button 
              onClick={() => {
                let passwordReg = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,16}$/;
                let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let nameReg =/^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/;

                if ( emailReg.test(email) && passwordReg.test(password) && nameReg.test(fullname)){
                  setPage('otp');
                } else {
                  setIsValid(false);
                  setTimeout(() => {
                    setIsValid(true);
                  }, 3 * 1000);
                }

                
              }}
              className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
                Sign up
              </button>
            </>
            : <>
              <div className="w-full">
                <label className="text-sm font-semibold ml-2">OTP:</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='otp code' value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <div className="text-red-400">expire in: {timer}s</div>

              <button 
              className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
                Confirm
              </button>
            </>
          }
          
        </div>
      </div>
    </div>
  )
}

export default SignUp