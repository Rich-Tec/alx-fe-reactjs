import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  
  const userData = useContext(UserContext);

  const name = userData?.name || 'Not Available';
  const email = userData?.email || 'Not Available';
  const age = userData?.age || 'Not Available'; 
  const bio = userData?.bio || 'Not Available';

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto my-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">User Profile</h2>
      <p className="text-gray-700">
        <span className="font-semibold">Name:</span> {name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Age:</span> {age}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Bio:</span> {bio}
      </p>
    </div>
  );
};

export default UserProfile;
