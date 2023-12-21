


import Link from 'next/link';
import { RegisterForm } from './RegisterForm';
export default function SignUp() {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
   <div className=' sm:shadow-xl py-4 px-8    sm:bg-white rounded-xl'>
   <h1 className="font-semibold text-2xl py-8">Create Your Account</h1>
      <RegisterForm/>
      <p className='text-center pb-5'>Already have an account! <Link className='text-indigo-500 hover:underline' href='/login'>Sign in</Link></p>
       
   </div>
   </div>

  );
};








  