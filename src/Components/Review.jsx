import React from "react";


import testimg from "../assets/Images/testimg.png";   
import profile from "../assets/Images/profileimg.png";   

const Review = () => {
  return (
    <div
      className="w-[400px] min-h-[460px] flex items-start justify-center bg-no-repeat bg-center bg-contain px-6"
      style={{ backgroundImage: `url(${testimg})` }}
    >
      <div className="text-center max-w-md pt-10">
        <img
          src={profile}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />

        <p className="text-sm leading-relaxed mb-4">
          “The fit is perfect and the fabric feels premium. Simple,
          comfortable, and easy to style”
        </p>

        <p className="font-semibold text-sm">~ Ryan Miller</p>
      </div>
    </div>
  );
};

export default Review;
