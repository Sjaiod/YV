"use client";

import { API } from '@/API';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const Profile = () => {
  const [data, setData] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State for selected file
  const router = useRouter();

  useEffect(() => {
    // Access localStorage only on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken); // Set token in state
    }
  }, []);
  console.log(data && data.member_name)
  const getData = async () => {
    try {
      if (token) {
        const axiosConfig = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(`${API}/api/member/memberinfo/`, axiosConfig);
        const res = response.data;

        if (res) {
          setData(res);

          // Update state
        }
      }
    } catch (error) {
      console.error("Error fetching member info:", error);
    }
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]); // Run getData only after token is set


 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]); // Set the selected file
    }
  };

  const handleUpload = async () => {
    if (selectedFile && token) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const axiosConfig = {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        };

        const response = await axios.post(`${API}/api/member/imageupload/`, formData, axiosConfig);

        if (response.status === 200) {
          const res=response.data
          const info= {
              "availability": data && data.availability,
              "dob": data && data.dob,
              "email":data&& data.email,
              "facebook":data&& data.facebook,
              "gmail":data&& data.gmail,
              "id":data&& data.id,
              "instagram":data&& data.instagram,
              "member_name":data&& data.member_name,
              "nid":data&& data.nid,
              "phone":data&& data.phone,
              "profile_pic":res && res.id,
              "role":data&& data.facebook
            }
            const Config = {
              headers: {
                Authorization: `Token ${token}`
            }}
          const post=await axios.put(`${API}/api/member/profile/update/`,info,Config)

          if (post.status===200){
            router.refresh();
          }


          //getData(); // Refresh data to reflect changes
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };
  return (
    <main className="flex flex-col h-screen ">
      <div className="flex flex-1">
        <div className="flex-1 p-4 bg-white min-h-screen mt-[150px] ml-0 lg:ml-[250px]">
          {data ? (

            <div className="flex flex-col  items-center justify-center gap-5">
              <div className="flex items-center justify-center w-full h-[5vh]">
                <img
                  src={`https://drive.google.com/thumbnail?id=${data.profile_pic}&sz=w1000?authuser=0`}
                  alt={data.member_name}
                  className="w-50 h-50 rounded-full object-cover mr-4 cursor-pointer"
                  onClick={() => setShowModal(true)} // Open modal on click
                />
              </div >
              <div className='mt-[100px] flex flex-col items-center justify-center gap-3'>
                <h2 className=' text-gray-600 font-bold text-2xl  text-balance uppercase'>{data.member_name}</h2>
                <div className="mt-1 ">
      <span className="text-gray-500 text-md">Member Role: {data.role}</span>
    </div>
    <div className="mt-1 text-center flex items-center justify-center ">
      <span className="text-gray-500 text-center text-md">Email: {data.email}</span>
    </div>
    <div className="mt-1 text-center flex items-center justify-center ">
      <a href={data.facebook} className="text-gray-500 hover:text-blue-500 transition-all text-centertext-md">Facebook: {data.facebook}</a>
    </div>
    <div className="mt-1 text-center transition-all  flex items-center justify-center ">
      <a href={data.instagram} className="text-gray-500 hover:text-pink-500 text-centertext-md">Instagram: {data.instagram}</a>
    </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p> // Show a loader or message while data is being fetched
          )}

        </div>
      </div>
    </main>
  );
};

export default Profile;