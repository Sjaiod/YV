"use cilent"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '@/API';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaUserTag } from 'react-icons/fa';

// Function to get a specific cookie by name (only runs in the browser)
const getCookie = (name: string) => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  return null;
};

const MemberCard = ({ member }: { member: any }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div className="text-xl font-semibold text-gray-800">
        {member.member_name}
      </div>
      <div className={`px-2 py-1 rounded-full text-white ${member.role === 'gm' ? 'bg-blue-500' : 'bg-green-500'}`}>
        <FaUserTag className="inline mr-2" /> {member.role.toUpperCase()}
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-gray-500" />
        <a href={`mailto:${member.gmail}`} className="text-gray-700 hover:text-blue-500">{member.gmail}</a>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhone className="text-gray-500" />
        <span className="text-gray-700">{member.phone}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaFacebook className="text-blue-600" />
        <a href={member.facebook} target="_blank" className="text-gray-700 hover:text-blue-500" rel="noopener noreferrer">Facebook</a>
      </div>
      <div className="flex items-center space-x-2">
        <FaInstagram className="text-pink-500" />
        <a href={member.instagram} target="_blank" className="text-gray-700 hover:text-pink-500" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    <div className="mt-6 text-right">
      <span className="text-gray-400 text-sm">Member ID: {member.id}</span>
    </div>
  </div>
);

const MemberSearch = () => {
  const [members, setMembers] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get the token from cookies
  const token = getCookie('token');

  // Axios config with Authorization header
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const fetchAllMembers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/member/allmember/`, axiosConfig);
      setMembers(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch members');
    } finally {
      setLoading(false);
    }
  };

  const searchMembers = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/api/member/search?member_name=${query}`, axiosConfig);
      console.log(response.data);
      
      setMembers(response.data);
      setError('');
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMembers();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      searchMembers(e.target.value);
    } else {
      fetchAllMembers();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {/* Sidebar space */}
        <div className="flex-1 p-4 bg-gray-100 min-h-screen mt-[20px] ml-0 lg:ml-[250px]">
          {/* Search Bar */}
          <div className="mb-4 py-5">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search members"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Members Display */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {members && members.map((member: any) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberSearch;
