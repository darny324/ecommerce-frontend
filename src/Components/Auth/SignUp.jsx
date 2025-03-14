import { useState } from "react"

const Spinner = () => {
  return (
    <span className="flex items-center justify-center">
      <div className="w-6 h-6 border-3 border-blue-500 border-solid border-t-white border-r-white border-b-white rounded-full animate-spin"></div>
    </span>
  );
};

const SignUp = () => {
  const [fname, setFname] = useState('');
  const isLoading = false;
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('name');
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Sign Up</h1>
      <div className=" flex flex-col md:w-[18rem] gap-2 mt-8">
    
        {
          page === 'name' ? 
          <>
          <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
          <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
          <button onClick={() => setPage('email')} className="bg-yellow-300 flex justify-center py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
            {isLoading ? <Spinner /> : 'Next'}
          </button>
          
          </>
          : page === 'email' ? 
          <>
          <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => setPage('otp')} className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">Next</button>
          <button onClick={() => setPage('name')} className="bg-stone-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-black cursor-pointer">Back</button>
          </>
          : page === 'otp' ? 
          <>
          <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='OTP code' value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={() => setPage('password')} className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">Next</button>
          <button onClick={() => setPage('email')} className="bg-stone-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-black cursor-pointer">Back</button>
          </>
          : page === 'password' ? 
          <>
          <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">Sign In</button>
          <button onClick={() => setPage('otp')} className="bg-stone-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-black cursor-pointer">Back</button>
          </>
          : <></>
        }
      </div>
    </div>
  )
}

export default SignUp