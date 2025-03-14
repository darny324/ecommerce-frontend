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
      <h1>Sign In</h1>
      <div className=" flex flex-col md:w-[18rem] gap-2 mt-8">
        <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="bg-gray-200 px-4 py-2 focus:outline-green-300 rounded-md" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-yellow-300 py-2 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out text-white cursor-pointer">
          {isLoading ? <Spinner /> : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default SignIn