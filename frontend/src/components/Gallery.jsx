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

  const displayImages = images.slice(0, 3);

  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold">
        <span>Gallery</span>
      </h2>
      <br />
      <div
        className="p-1 border rounded-lg w-3/5 mx-auto h-80 py-6 relative"
        style={{ marginBottom: "-0.25rem", width: "80%" }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full rounded-lg"
        />
        <button
          className="absolute top-0 bottom-0 left-0 ml-2 my-auto text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 mr-2 my-auto text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4" style={{ margin: "-0.25rem" }}>
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="p-1 border cursor-pointer object-cover w-32 h-32 rounded-lg mx-4 my-2" // Adjusted margin to create space between images
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
