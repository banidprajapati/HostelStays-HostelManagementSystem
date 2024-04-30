import React, { useState } from "react";

export const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convert images to an array if it's not already one
  const imagesArray = Array.isArray(images) ? images : [images];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const displayImages = imagesArray.slice(0, 4);
  const remainingImages = imagesArray.length - displayImages.length;

  // Render only the current image if there's only one image in the array
  if (imagesArray.length === 1) {
    return (
      <div className="text-left ml-auto w-full mb-1">
        <h2 className="text-3xl font-bold text-black">Gallery</h2>
        <div className="mt-1">
          <div className="p-0 rounded-lg w-full mx-auto h-120 py-3 relative mb-1">
            <img
              src={imagesArray[0]}
              alt={`Image 1`}
              className="object-cover w-full h-96 rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-left ml-auto w-full mb-1">
      <h2 className="text-3xl font-bold text-black">Gallery</h2>
      <div className="mt-1">
        <div className="p-0 rounded-lg w-full mx-auto h-120 py-3 relative mb-1">
          <img
            src={imagesArray[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="object-cover w-full h-96 rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-auto px-4 mb-1">
        <button
          className="mx-1 text-black font-bold text-2xl px-4 py-3 rounded-full focus:outline-none"
          onClick={prevImage}>
          &lt;
        </button>
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="p-0.5 border cursor-pointer object-cover rounded-lg mx-0.5 w-auto h-20"
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        {remainingImages > 0 && (
          <span className="p-0.5 border cursor-pointer object-cover rounded-lg mx-0.5 text-black font-bold text-xl">
            +{remainingImages}
          </span>
        )}
        <button
          className="mx-1 text-black font-bold text-2xl px-4 py-3 rounded-full focus:outline-none"
          onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};
