import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    headerImage: "",
    aboutText: "",
    galleryImages: [],
    teamMembers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from the API...");

        const response = await fetch("http://localhost:5000/api/gallery");
        console.log("API response status:", response.status);

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        // Parse the response data
        const result = await response.json();
        console.log("Data fetched from API:", result); 

        // Map the result to get the image URLs
        const galleryImages = result.map((item) => item.image_url);

        // Set the data state using a functional update
        setData((prevData) => ({
          ...prevData,
          galleryImages: galleryImages,
        }));
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    };

    fetchData();
  }, []); 
  return (
    <>
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold">Welcome to the World of Sarangi</h2>
        <p className="mt-4 text-gray-600">
          Discover the soulful music of Ravi Kumar, rooted in the rich folk
          traditions of Rajasthan.
        </p>
      </div>
      <div>
        <div>
          {data.galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
        <div>
          {data.teamMembers.map((member) => (
            <div key={member.id}>
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
