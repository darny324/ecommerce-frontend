import axios from "axios";
import { useEffect, useRef, useState } from "react"



const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFail, setIsFail] = useState(false);
  const [address, setAddress] = useState({
    country: '', 
    state: '', 
    city: '', 
  });



  const handleSignUp = async () => {
    let passwordReg = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,16}$/;
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameReg =/^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/;

    if ( emailReg.test(email) && passwordReg.test(password) && nameReg.test(fullname) && address.country.length !== 0 && address.state.length !== 0 && address.city.length !== 0){
      try {
        const response = await axios.patch("http://localhost:5000/api/v1/ecommerce/users/sent-otp", {
          email: email, 
        });
        if ( response.data.message === 'success')
          window.location = `otp?email=${email}&password=${password}&name=${fullname}&country=${address.country}&state=${address.state}&city=${address.city}`;
      } catch (err) {
        console.log(err, "Error in Sending otp");
      }
      
    } else {
      setIsFail(true);
      setTimeout(() => {
        setIsFail(false);
      }, 2 * 1000);
    }
  }
  



  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="px-8 py-8 rounded-lg shadow-xl w-[300px] md:w-[400px] mb-6">
        <h1 className="text-center">Sign Up</h1>
        <div className=" flex flex-col gap-2 text-sm mt-8">
        
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

              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-semibold ml-2">Address</label>
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='Country' value={address.country} onChange={(e) => setAddress((add) => ({...add, country:e.target.value}))} />
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='State' value={address.state} onChange={(e) => setAddress((add) => ({...add, state:e.target.value}))} />
                <input className="bg-gray-200 px-4 w-full py-2 focus:outline-green-300 rounded-md" placeholder='City' value={address.city} onChange={(e) => setAddress((add) => ({...add, city:e.target.value}))} />
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