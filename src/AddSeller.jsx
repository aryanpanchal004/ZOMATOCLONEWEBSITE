import React from 'react'

export const AddSeller = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📦 Add New Seller</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seller Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Address
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Add Seller
          </button>
          </form>
      </div>
    </div>
  )
}


export default AddSeller;
