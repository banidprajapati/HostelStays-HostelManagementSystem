import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
  "https://th.bing.com/th/id/OIP.TNiiiasFrRpuJFby6RbPJAHaEo?rs=1&pid=ImgDetMain",
  "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/08/Dingle-.jpg?resize=750%2C449&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3azycI9KcegvjJEqbnL3w9fsuayexAxZLRzcXStkCPA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTxKwcLawJH8y5MbIaUgdOk7hhi5ZTR9A4PhDeuOqUQ&s",
];

export const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const displayImages = images.slice(0, 4);
  const imageSize = 80 / displayImages.length + "%";
  const remainingImages = images.length - displayImages.length;

  return (
    <div
      className="text-left ml-auto"
      style={{ width: "100%", marginBottom: "1rem" }}
    >
      <h2 className="text-3xl font-bold">
        <span className="text-black">Gallery</span>
      </h2>
      <br />
      <div
        className="p-0 rounded-lg w-full mx-auto h-120 py-3 relative" // Increased height to 120px
        style={{ marginBottom: "-0.25rem", marginTop: "-0.125rem" }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full rounded-lg"
          style={{ width: "600px", height: "400px" }} // Fixed width and height
        />
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "100%", padding: "0 1rem" }}
      >
        {" "}
        {/* Increased width and added padding */}
        <button
          className="mx-1 text-black font-bold text-2xl px-4 py-3 rounded-full focus:outline-none" // Increased font size and padding
          onClick={prevImage}
        >
          &lt;
        </button>
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="p-0.5 border cursor-pointer object-cover rounded-lg mx-0.5"
            style={{ width: imageSize, height: "80px" }} // Fixed height for small images
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        {remainingImages > 0 && (
          <span className="p-0.5 border cursor-pointer object-cover rounded-lg mx-0.5 text-black font-bold text-xl">
            +{remainingImages}
          </span>
        )}
        <button
          className="mx-1 text-black font-bold text-2xl px-4 py-3 rounded-full focus:outline-none" // Increased font size and padding
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
