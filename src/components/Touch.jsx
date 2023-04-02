import React from "react";

function Touch() {
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 py-[5rem] px-4">
      <p className="font-bold text-2xl">Sign Up to Stay in Touch</p>
      <p>Sign up for s distinctio autem corporis ducimus, esse magnam qui</p>
      <form action="" className="flex justify-center gap-2">
        <input type="text" className="px-1" placeholder="Email Adess" />
        <button className="bg-blue-400 hover:bg-blue-400/70 uppercase text-white px-5 py-3">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Touch;
