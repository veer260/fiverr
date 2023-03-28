import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-gray-50 p-8 ">
      <div className="text-gray-400 flex max-w-[680px] mx-auto space-x-8 items-center">
        <span>Trusted By: </span>
        <div>
          <img
            className=" bg-inherit"
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
            alt=""
          />
        </div>
        <div>
          <img
            className=" bg-inherit"
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
