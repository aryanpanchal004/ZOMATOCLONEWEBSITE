import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br  px-8 py-12">

      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="flex-1">
          <img
            src="https://www.precisionorthomd.com/wp-content/uploads/2023/10/percision-blog-header-junk-food-102323.jpg"
            alt="Food Display"
            className="rounded-3xl shadow-lg object-cover w-full"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-brown-800 mb-2">
            <span className="text-[#5e2a12]">Welcome</span>
          </h2>
          <h3 className="text-3xl font-medium text-blue-700 mb-4">
            To Ultimate
          </h3>
          <h4 className="text-xl font-semibold text-red-600 mb-2">
            Food Delivery App — Parul-Zomato
          </h4>
          <p className="text-md text-gray-800 italic mb-6">
            “Good Food with Good Mindset” 
          </p>
          <Link
            to="/product"
            className="bg-blue-600 hover:bg-blue-300 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            Explore Now 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
