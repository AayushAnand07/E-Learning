

import prisma from '@/lib/prisma';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import { LoginForm } from './LoginForm';

export default async function SignIn() {
   const user= await prisma.user.findFirst({
      where:{
        email:'test@test.com'
      }
    })
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
   <div className='shadow-xl py-4 px-8   rounded-xl bg-white'>
   <h1 className="font-semibold text-2xl py-8">Login </h1>
      <LoginForm/>
      <p className='text-center pb-5'>Create an account! <Link className='text-indigo-500 hover:underline' href='/register'>Sign Up</Link></p>
       
   </div>
   </div>

  );
};


  
//outside app directory
// export const getServerSideProps:GetServerSideProps= async(context)=>{
//    const user= await prisma.user.findFirst({
//       where:{
//          email:'test@test.com'
//       }
//    })


//    return{
//       props:{user}
//    }
// }








  