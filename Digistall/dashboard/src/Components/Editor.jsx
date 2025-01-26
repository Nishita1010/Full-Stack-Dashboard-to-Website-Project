import React, { useState } from "react";
import UploadButton from "./UploadButton";
import TextEditor from "./TextEditor";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Editor = () => {
  const [headerImage, setHeaderImage] = useState("");
  const [aboutText, setAboutText] = useState(
    "Ravi Kumar, a Sarangi maestro from Rajasthan, has been captivating audiences with his soulful music for over 11 years. Rooted in Rajasthani folk traditions..."
  );
  const [galleryImages, setGalleryImages] = useState([]);
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Team Member 1", image: "" },
    { id: 2, name: "Team Member 2", image: "" },
    { id: 3, name: "Team Member 3", image: "" },
  ]);

  const handleImageChange = (setter) => (image) => setter(image);

  const handleGalleryImageUpload = (image) => {
    setGalleryImages((prev) => [...prev, image]);
  };

  const handleRemoveGalleryImage = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const handleTeamMemberChange = (id, key, value) => {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, [key]: value } : member
      )
    );
  };

  const handleSave = async () => {
    const dataToSave = {
      headerImage,
      aboutText,
      galleryImages,
      teamMembers,
    };

    try {
      const response = await fetch("http://localhost:5000/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: "https://example.com/image.jpg" }),
      });

      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-end p-4 ">
          <button
            className="bg-slate-500 rounded-full w-32 h-12 font-semibold text-white hover:text-gray-800"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="p-4 bg-white shadow-md max-w-3xl mx-auto flex-grow">
            <div className="relative">
              <img
                src={headerImage || "default-header.jpg"}
                alt="Header"
                className="w-full h-64 object-cover rounded-lg"
                onClick={() =>
                  alert(
                    "Upload a new header image by using the image upload feature."
                  )
                }
              />
              <UploadButton onUpload={handleImageChange(setHeaderImage)} />
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-semibold w-full text-center ">
                <span className="bg-white absolute -ml-10 w-24 -mt-3">
                  Gallery
                </span>
              </h2>
              <div className="border-spacing-4 border-2 border-black ">
                <div className="grid grid-cols-3 gap-4  p-4">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="relative w-24 h-36">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-0 right-0 bg-red-600 text-white w-6 h-6 rounded-full p-1"
                        onClick={() => handleRemoveGalleryImage(index)}
                      >
                        <span className="items-center justify-center">x</span>{" "}
                      </button>
                    </div>
                  ))}
                  <UploadButton onUpload={handleGalleryImageUpload} />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 justify-between px-28 my-8">
              <button className="bg-slate-500 rounded-full w-28 h-12 font-semibold text-white hover:text-gray-800">
                Book Now{" "}
              </button>
              <button className="bg-slate-500 rounded-full w-32 h-12 font-semibold text-white hover:text-gray-800">
                View Charge{" "}
              </button>
            </div>

            <div className="mt-4 ">
              <h2 className="text-xl font-semibold w-full  ">
                <span className="bg-white text-center absolute ml-5 w-24 -mt-3">
                  About
                </span>
              </h2>{" "}
              <div className="border-spacing-4 border-2 border-black ">
                <div className="mt-4 p-3">
                  <TextEditor
                    text={aboutText}
                    onTextChange={setAboutText}
                    className="outline-none "
                  />
                </div>{" "}
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-medium text-center py-4">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="text-center ">
                    <img
                      src={member.image || "default-team.jpg"}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-xl mx-auto"
                      onClick={() =>
                        alert(
                          "Upload a new image for this team member using the image upload feature."
                        )
                      }
                    />
                    <UploadButton
                      onUpload={(image) =>
                        handleTeamMemberChange(member.id, "image", image)
                      }
                      className="justify-center"
                    />
                    <TextEditor
                      text={member.name}
                      onTextChange={(text) =>
                        handleTeamMemberChange(member.id, "name", text)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <footer className="w-full bg-gradient-to-b from-[#CEECF2] to-[#93CDD8] py-2 ">
        <div className="max-w-2xl mx-auto px-6 justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-bold text-gray-800">About Us</h3>
              <p className="text-gray-600 text-sm">
                Connecting people with extraordinary artists for unforgettable
                events. Affordable. Verified. Hassle-Free.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">Contact</h3>
              <p className="text-gray-600 text-sm">
                Email: support@example.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook />{" "}
                </a>

                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram />{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-4 py-2 text-center text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-gray-700">
              {" "}
              Terms of Use
            </a>
          </div>
        </div>
      </footer> */}
        </div>
      </div>
    </>
  );
};

export default Editor;
