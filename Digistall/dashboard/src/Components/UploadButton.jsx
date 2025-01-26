import React from "react";
import { LuUpload } from "react-icons/lu";

const UploadButton = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-24 h-12 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-400">
      <label className="cursor-pointer w-full h-full flex items-center justify-center">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center space-y-1">
          <LuUpload className="text-gray-500" />
          <span className="text-gray-500 text-sm">Add Image</span>
        </div>
      </label>
    </div>
  );
};

export default UploadButton;
