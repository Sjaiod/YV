"use client";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

const SuccessPage = () => {
const searchParams = useSearchParams()
  const  name  = searchParams.get("name")
  const trx_id=searchParams.get("trx_id")
console.log(trx_id, name)
  // Replace hyphens with spaces in the name
  const formattedName = name ? (name as string).replace(/-/g, ' ') : '';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-2">Registration Successful!</h1>
      <p className="text-gray-700 text-lg mb-4">Thank you, <span className="font-semibold">{formattedName}</span>!</p>
      <p className="text-gray-600 mb-6">Your transaction ID is <span className="font-mono text-green-600">{trx_id}</span>.</p>
      <p className="text-gray-600 mb-6">Take a screenshot .</p>
      
      <Link href="/" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        <HiHome className="h-6 w-6" aria-hidden="true" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default SuccessPage;