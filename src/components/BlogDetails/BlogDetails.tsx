import assets from "@/lib/json/assets";
import Image from "next/image";
import React from "react";

export default function BlogDetails() {
  return (
    <div className="cmn_gap !pt-[60px] ">
      <div className="container">
        <figure className="w-full h-[500px] rounded-[20px] overflow-hidden mb-10">
          <Image
            src={assets.founderPack}
            width={1920}
            height={600}
            alt="img"
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div className="blogDetailsHead">

        <h2>🌟 Ninja Odyssey Pre-Order Packages Now Available! 🌟</h2>
        <p>
          Get ready to elevate your gaming experience with these exclusive
          pre-order packs! 🎮✨
        </p>
        </div>
        <div className="blogContents">
          <h3>🎁 Founder Pack: $25</h3>
          <p>Includes:</p>
          <ul>
            <li>Cloth</li>
            <li>Weapon</li>
            <li>Back Item</li>
            <li>Profile Background</li>
            <li>Pet</li>
            <li>Jutsu</li>
          </ul>

          <h3>🎁 Premium Founder Pack: $50</h3>
          <p>Includes everything from the Founder Pack, PLUS:</p>
          <ul>
            <li>2500 Diamonds</li>
            <li>Option to choose ID between 10-500</li>
            <li>
              Early access to test major updates like the Pet System (exclusive
              Founder Summoner’s Pack for IDs 10-500)
            </li>
            <li>Preview features such as Arena, PvP, and more!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
