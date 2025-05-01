import { useEffect, useRef, useState } from "react"



const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFail, setIsFail] = useState(false);



  const handleSignUp = () => {
    let passwordReg = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,16}$/;
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameReg =/^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/;

    if ( emailReg.test(email) && passwordReg.test(password) && nameReg.test(fullname)){
      window.location = `otp?email=${email}&password=${password}&name=${fullname}`;
    } else {
      setIsFail(true);
      setTimeout(() => {
        setIsFail(false);
      }, 3 * 1000);
    }
  }
  



  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="px-8 py-8 rounded-lg shadow-xl w-[300px] md:w-[400px] mb-6">
        <h1 className="text-center">Sign Up</h1>
        <div className=" flex flex-col gap-4 mt-8">
        
              <div className="w-full">
                <label className="text-sm font-semibold ml-2">Fullname:</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='e.g., John Smith' value={fullname} onChange={(e) => {
                  setFullname(e.target.value);
                  console.log(e.target.value);
                }} />
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
                  isFail ? <div className="text-red-500">Your Username or Email or Password is invalid</div> : <></>
                }
              <button 
              onClick={() => {
                handleSignUp();
              }}
              className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
                Sign up
              </button>
          
        </div>
      </div>
      <div>
        Already have an account? <a href="/sign-in" className="text-blue-500 hover:text-blue-400">Sign In</a>
      </div>
    </div>
  )
}

export default SignUp