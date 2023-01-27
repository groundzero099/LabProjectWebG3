import React from 'react';
// import { useSelector } from 'react-redux';

export default function Profile() {
  // const { userInfo } = useSelector((state) => state.auth);
  // console.log(auth)
  return (
    <div>
      <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-10">
        <div class="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" alt="profile"/>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              See More
            </button>
            <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
