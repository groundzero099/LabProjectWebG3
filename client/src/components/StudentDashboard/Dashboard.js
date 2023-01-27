import React from 'react';
// import Grades from './Grades';

export default function Dashboard() {
  return (
    <main className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Student Dashboard</h1>
        </div>
      </div>
      <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6 ">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">
              {/* {isSuccess && students?.length > 0 && students.reducer()} */}
              {/* {isSuccess && students?.length > 0 ? students?.length - 1 : 0} */}
            </span>
            <span className="block text-2xl font-bold">32</span>
            <span className="block text-gray-500">See All Students</span>
          </div>
        </div>
      </section>
    </main>
  );
}
