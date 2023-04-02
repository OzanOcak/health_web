import React from "react";

function Blog() {
  return (
    <div className="flex flex-col w-4/5 sm:w-3/5 mx-auto text-blue-500 text-xs font-bold ">
      <hr className="text-black mx-auto w-2/3" />
      <div className="my-[5rem]">
        <h4>From Our Blog</h4>
        <div className="flex gap-1">
          <BlogExerpt />
          <BlogExerpt />
          <BlogExerpt />
        </div>
      </div>
      <hr className="text-black mx-auto w-2/3" />
    </div>
  );
}

export default Blog;

export function BlogExerpt() {
  return (
    <div className="flex flex-col gap-2 w-1/3  ">
      <p className="text-xs text-gray-300 mt-3">Mar 3, 2023</p>
      <h1 className="text-lg text-blue-500">time is fgh</h1>
      <p className="text-gray-500 text-md">
        text kdsjgvkdlg djkfjkldfdfjngdf kjhkjhn hkljn hbhj{" "}
      </p>
      <p className="text-md">Read More </p>
    </div>
  );
}
