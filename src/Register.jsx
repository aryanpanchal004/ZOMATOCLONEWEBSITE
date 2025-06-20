import React from 'react'

 const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Form</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="Username"
              placeholder="e.g.Rahul12"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="........."
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
              placeholder="e.g.Rahul kirana store"
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
              placeholder="9874563210"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="abc@email.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>
          </form>
      </div>
    </div>
  )
}

export default Register