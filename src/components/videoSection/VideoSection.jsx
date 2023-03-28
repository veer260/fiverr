import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const VideoSection = () => {
  return (
    <div className="w-full bg-green-100 py-12">
      <div className="flex gap-x-12 max-w-6xl mx-auto">
        <div className="flex gap-y-8 flex-col ">
          <h1 className="text-4xl font-semibold">
            A whole world of freelance talent at your fingertips
          </h1>
          <div>
            <div className="flex space-x-4 items-center">
              <span className="text-gray-500 text-2xl">
                <BsCheckCircle />
              </span>
              <h2 className="text-xl font-semibold">
                The best for every budget
              </h2>
            </div>
            <p className="text-lg leading-[25px] tracking-[1px] text-gray-600">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div>
            <div className="flex space-x-4 items-center">
              <span className="text-gray-500 text-2xl">
                <BsCheckCircle />
              </span>
              <h2 className="text-xl font-semibold">
                Quality work done quickly
              </h2>
            </div>
            <p className="text-lg leading-[25px] tracking-[1px] text-gray-600">
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>
          <div>
            <div className="flex space-x-4 items-center">
              <span className="text-gray-500 text-2xl">
                <BsCheckCircle />
              </span>
              <h2 className="text-xl font-semibold">
                Protected payments, every time
              </h2>
            </div>
            <p className="text-lg leading-[25px] tracking-[1px] text-gray-600">
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </div>
          <div>
            <div className="flex space-x-4 items-center">
              <span className="text-gray-500 text-2xl">
                <BsCheckCircle />
              </span>
              <h2 className="text-xl font-semibold">24/7 support</h2>
            </div>
            <p className="text-lg leading-[25px] tracking-[1px] text-gray-600">
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="w-[600px] flex justify-center">
          <video
            src="'../../public/video/vmvv3czyk2ifedefkau7.mp4"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
