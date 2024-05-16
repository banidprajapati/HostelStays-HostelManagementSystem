import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Gallery } from "./Gallery";
import { Description } from "./Description";
import { Amenities } from "./Amenities";
import { HostelPolicies } from "./HostelPolicies";
import { BookStay } from "./BookStay";
import { Footer } from "./Footer";

export const ProductPage = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [hostelDetails, setHostelDetails] = useState(null);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/hostel_details/${id}`
        );
        setHostelDetails(response.data);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, [id]);
  return (
    <div className="">
      {hostelDetails && (
        <div className="grid grid-cols-2 grid-rows-2 gap-12 mt-8">
          <Gallery
            images={hostelDetails.photos}
            className="col-span-2 row-span-2"
          />
          <Description
            name={hostelDetails.hostel_name}
            description={hostelDetails.hostel_description}
            address={`${hostelDetails.hostel_location}, ${hostelDetails.hostel_city}`} // Combine location and city
            amenities={hostelDetails.facilities}
            className="col-span-1"
          />

          <HostelPolicies
            totalBeds={hostelDetails.total_beds}
            bedsPerRoom={hostelDetails.beds_per_room}
            className="col-span-1"
          />
          <BookStay
            hostelID={id}
            price={hostelDetails.price}
            className="col-span-1"
            isLoggedIn={isLoggedIn}
          />
        </div>
      )}
      <Footer/>
    </div>
  );
};
