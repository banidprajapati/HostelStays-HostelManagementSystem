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

  // Filter the images array to include only the first 3 images
  const displayImages = images.slice(0, 3);

  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold">
        <span>Gal</span>lery
      </h2>
      <br />
      <div
        className="p-1 border rounded-lg w-3/5 mx-auto h-60 py-6 relative"
        style={{ marginBottom: "-0.25rem" }}
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
      {/* Render only the first 3 images */}
      <div className="flex justify-center mt-2" style={{ margin: "-0.25rem" }}>
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="p-1 border cursor-pointer object-cover w-24 h-24 rounded-lg m-1"
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
