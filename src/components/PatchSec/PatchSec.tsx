import React from "react";
import { blogList } from "../BlogUpdatesSec/BlogUpdatesSec";
import BlogCard from "../BlogUpdatesSec/BlogCard";

export default function PatchSec() {
  return (
    <div className="cmn_gap ">
      <div className="container">
        <div className="text-center mb-8">
          <h2>New Features Every Patch</h2>
          <p>Stay Ahead with the Latest Updates and Enhancements</p>
        </div>
        <div className="flex  flex-wrap -mx-[10px]">
          {blogList.map((item, index) => (
            <div key={index} className="w-1/2 px-[10px]">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
