import React from "react";
import ReactPlayer from "react-player";
import { LiaTimesSolid } from "react-icons/lia";

const VideoModal = ({ open, setOpen }) => {
  const video_url = "https://youtu.be/SIqa5DVp1fk?si=n7GwiZB0UhaZZMeZ"
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 bg-[#000]/[0.5] w-screen h-screen z-[10000]`}
    >
      <div className="custom-container flex items-center justify-center h-full">
        <div>
          <div className="w-full flex justify-end">
            <LiaTimesSolid className="text-white text-2xl cursor-pointer mb-3" onClick={() => setOpen(!open)}/>
          </div>
          <ReactPlayer
            url={video_url}
            playing={open}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
