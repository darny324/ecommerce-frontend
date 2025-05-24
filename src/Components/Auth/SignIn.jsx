import axios from "axios";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../main";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

const Spinner = () => {
  return (
    <span className="flex items-center justify-center">
      <div className="w-6 h-6 border-3 border-blue-500 border-solid border-t-white border-r-white border-b-white rounded-full animate-spin"></div>
    </span>
  );
};



const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const errorMessage = useRef('Your Email or Password is invalid');
  let passwordReg = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,16}$/;
  let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if ( emailReg.test(email) && passwordReg.test(password)){
      setIsLoading(true);
      try {
        const res = await axios.patch(`http://localhost:5000/api/v1/ecommerce/users/auth/sign-in`, {
          email, password
        });
        console.log(res.data);
        if ( res.data.status === true) {
          const {token} = res.data;
          await localforage.setItem("token", token);
          navigate('/');
        } else {
          const {error} = res.data;
          
          setIsFail(true);
          setTimeout(() => {
            setIsFail(false);
          }, 2 * 1000);
          errorMessage.current = error;
        }

        setIsLoading(false);

      } catch (err) {
        console.log(err, "Error in Sign In page");
        setIsLoading(false);
        setIsFail(true);
        setTimeout(() => {
          setIsFail(false);
        }, 2 * 1000);
        errorMessage.current = "Unable to login";
      }
    } else {
      
      setIsFail(true);
      setTimeout(() => {
        setIsFail(false);
      }, 2 * 1000);
      errorMessage.current = "Your Email or Password is invalid";
    }
    
  }
  
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="px-8 py-8 rounded-lg shadow-xl w-[300px] md:w-[400px]">
        <h1 className='text-center'>Sign In</h1>
        <div className=" flex flex-col gap-4 mt-4">
          <div className="w-full">
            <label className="text-sm font-semibold ml-2">Email:</label>
            <input className="bg-gray-200 w-full px-4 py-2 focus:outline-green-300 rounded-md" placeholder='e.g., example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          
          <div className="w-full">
            <label className="text-sm font-semibold ml-2">Password:</label>
            <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='e.g., iek293@3829' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <button 
          disabled={isLoading}
          onClick={() => {handleSignIn()}}
          className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
            {isLoading ? <Spinner /> : 'Next'}
          </button>
        </div>

        {
          isFail && 
          <div className="text-red-600">{errorMessage.current}</div>
        }
      </div>
      
      <div className="mt-6">
        don't have an account? <a href="/sign-up" className="text-blue-500 hover:text-blue-400">Sign Up</a>
      </div>
    </div>
  )
}

export default SignIn