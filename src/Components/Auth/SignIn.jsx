import { useState } from "react";

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
  const isLoading = true;
  
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
          
          <button className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
            {isLoading ? <Spinner /> : 'Next'}
          </button>
        </div>
        </div>
    </div>
  )
}

export default SignIn