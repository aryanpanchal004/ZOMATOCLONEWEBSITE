import React from 'react';

const Cart = ({ Imageurl, dishName, hotelName, buttontext }) => {
  return (
    <div className="w-[300px] border border-gray-300 rounded-2xl p-4 flex flex-col items-center text-center shadow-md space-y-3">
      <div className="w-full h-40 overflow-hidden flex items-center justify-center">
  <img
    src={Imageurl}
    alt={dishName}
    className="w-full h-full object-cover rounded-md"
  />
</div>
      <p className="text-lg font-semibold">{dishName}</p>
      <p className="text-sm text-gray-500">{hotelName}</p>
      <button className="bg-amber-400 rounded-lg px-4 py-2 text-white font-medium hover:bg-amber-500 transition">
        {buttontext}
      </button>
      <Link to="/EmojiWithText" className='bg-red-400 text-slate-950 border rounded-2xl p-2 mt-4 block'>
  Go To Emoji With Text
</Link>

    </div>
  );
};

export default Cart;
