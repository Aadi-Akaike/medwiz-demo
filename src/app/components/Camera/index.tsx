"use client";
import React, { useState } from "react";

const Camera = () => {
  const [source, setSource] = useState("");

  const handleCapture = (target: any) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <div>
      <div className="rounded-lg ring-1 ring-[#CFD8E3]">
        <input
          accept="image/*"
          id="camera"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
          className="hidden"
        />

        <label
          htmlFor="camera"
          className="inline-block bg-black text-white py-2 px-4 rounded-lg text-sm cursor-pointer font-semibold leading-[140%] w-full text-center"
        >
          Take Photo
        </label>
      </div>

      {source && (
        <img src={source} alt={"snap"} className="mt-2 rounded-lg"></img>
      )}
    </div>
  );
};

export default Camera;
