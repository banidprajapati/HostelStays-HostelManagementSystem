-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 10:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hostelstays`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_details`
--

CREATE TABLE `admin_details` (
  `admin_Email` varchar(255) NOT NULL,
  `admin_Password` varchar(255) NOT NULL,
  `admin_FullName` varchar(255) NOT NULL,
  `admin_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_details`
--

INSERT INTO `admin_details` (`admin_Email`, `admin_Password`, `admin_FullName`, `admin_ID`) VALUES
('banid@gmail.com', 'banid@123', 'banid', 19),
('kritika@mail.com', '123@Asdf1', 'Kritika Tuladhar', 21),
('aayush@gmail.com', 'Aayush@123', 'Aayush Bhattarai', 23),
('aayushkarki@gmail.com', 'karki@123', 'Aayush Karki', 24);

-- --------------------------------------------------------

--
-- Table structure for table `booking_details`
--

CREATE TABLE `booking_details` (
  `booking_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `no_guests` int(11) DEFAULT NULL,
  `check_in` date DEFAULT NULL,
  `check_out` date DEFAULT NULL,
  `no_rooms` int(11) DEFAULT NULL,
  `hostel_name` varchar(255) DEFAULT NULL,
  `hostel_id` int(11) DEFAULT NULL,
  `status` enum('booked','cancelled') DEFAULT 'booked',
  `hostel_cost` decimal(10,2) DEFAULT NULL,
  `notification` tinyint(1) DEFAULT 1,
  `completed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_details`
--

INSERT INTO `booking_details` (`booking_id`, `user_name`, `user_email`, `user_id`, `no_guests`, `check_in`, `check_out`, `no_rooms`, `hostel_name`, `hostel_id`, `status`, `hostel_cost`, `notification`, `completed`) VALUES
(123473, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 211 Annapurna Hostel', 17, 'booked', 500.00, -4, 0),
(123474, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 211 Annapurna Hostel', 17, 'booked', 500.00, -4, 0),
(123475, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 101 Lalitpur View Home', 11, 'booked', 520.00, -3, 0),
(123476, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 207 Feel like Home Hostel', 13, 'booked', 550.00, -2, 0),
(123477, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 211 Annapurna Hostel', 17, 'booked', 500.00, -1, 0),
(123478, 'banid', 'banid', 2, 1, '2024-05-24', '2024-05-25', 1, 'HostelStays 211 Annapurna Hostel', 17, 'booked', 500.00, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `hostel_details`
--

CREATE TABLE `hostel_details` (
  `hostel_name` varchar(255) DEFAULT NULL,
  `hostel_location` varchar(255) DEFAULT NULL,
  `facilities` varchar(255) DEFAULT NULL,
  `photos` text DEFAULT NULL,
  `hostel_description` text DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `hostel_ID` int(11) NOT NULL,
  `hostel_city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hostel_details`
--

INSERT INTO `hostel_details` (`hostel_name`, `hostel_location`, `facilities`, `photos`, `hostel_description`, `price`, `hostel_ID`, `hostel_city`) VALUES
('Hostel Stays 310 HadiGaun Hostel', 'HadiGaun', 'Free Wi-Fi, Parking Access to Kitchen, Community Area, Shared / Personal Bathroom, Free Cancelation, Swimming pool, Parking', 'https://t4.ftcdn.net/jpg/06/68/21/91/240_F_668219129_mgl7849jCpjqU3d0fUIlG89DZ4JKWlVw.jpg', '\"Hostel Stays 310 Banid Hostel\" offers a delightful stay experience in the bustling neighborhood of HadiGaun, Kathmandu. Our hostel provides a cozy and welcoming atmosphere, perfect for travelers seeking comfort and convenience. Enjoy modern amenities, friendly service, and a central location that allows easy access to Kathmandu\'s attractions.', '450', 7, 'Kathmandu'),
('HostelStays 101 Lalitpur View Home', 'Pimbahal', 'Free Wi-Fi, Parking, Breakfast, Swimming Pool, Free Cancellation', 'https://t4.ftcdn.net/jpg/01/67/73/97/360_F_167739713_vYJIgXVO50AKeKp5pdXbOynSYKVUMH87.jpg', 'HostelStays 101 Lalitpur View Home\" offers a serene and scenic retreat in the charming neighborhood of Pimbahal, Lalitpur. Situated amidst tranquil surroundings, our hostel provides a peaceful atmosphere and a stunning view of Lalitpur\'s beauty. Experience comfort and convenience with our modern facilities, friendly hospitality, and a range of amenities to make your stay enjoyable. ', '520', 11, 'Lalitpur'),
('Hostel 202 Hostel Konark Inn Hostel', 'Patan', 'Free Wi-Fi, Parking Access to Kitchen', 'https://t4.ftcdn.net/jpg/01/68/55/95/360_F_168559545_n3rTcuV4Wk1my2YP7rwTim11urlM8YSl.jpg', 'This is located in Lalitpur', '400', 12, 'Lalitpur'),
('HostelStays 207 Feel like Home Hostel', 'Chakrapath', 'Free Wi-Fi, Parking, Access to Kitchen, Community Area, Shared / Personal Bathroom, Free Cancelation, Swimming pool,', 'https://res.cloudinary.com/hostelling-internation/image/upload/f_auto,q_auto/v1554994870/tgocza9viyqkxltfd7bh.jpg', 'This is located in Kathmandu', '550', 13, 'Kathmandu'),
('HostelStays 199 Mount Everest View Hostel', 'Pulchowk', 'Free Wi-Fi, Community Area, Shared / Personal Bathroom, Free Cancelation, Parking Access to Kitchen', 'https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg', 'HostelStays199\" offers a cozy and comfortable stay experience in the picturesque surroundings of Pulchowk, Lalitpur, nestled near the majestic Mount Everest. Our hostel provides modern amenities, friendly staff, and a welcoming atmosphere for travelers seeking a memorable stay.', '500', 15, 'Lalitpur'),
('HostelStays 114 Fewalake View Hostel', 'Newroad', 'Free Wifi, Kitchen, TV, Power backup, Geyser, Parking facility, In-house Restaurant, CCTV cameras, Bar, Reception', 'https://t4.ftcdn.net/jpg/06/25/24/13/360_F_625241335_M22gR0lrBLJp0GwD5xEWgUrZ0QjyrMBy.jpg', '\"HostelStays 114 Fewalake View\" is a charming hostel nestled in the heart of Newroad, Pokhara, offering breathtaking views of Fewa Lake. Our hostel combines modern comfort with traditional hospitality, providing guests with a memorable and relaxing stay experience. Explore the vibrant streets of Pokhara, unwind in our cozy accommodations, and enjoy the tranquility of the lake from our scenic vantage point.', '650', 16, 'Pokhara'),
('HostelStays 211 Annapurna Hostel', 'Nayabazar', 'Free Wi-Fi, Parking Access to Kitchen, Community Area, Shared / Personal Bathroom, Free Cancelation, Swimming pool, Parking', 'https://www.hostelworld.com/blog/wp-content/uploads/2018/09/hostel-room-types-5.jpg', '\"HostelStays 211 Annapurna Hostel\" is nestled in the vibrant heart of Nayabazar, Pokhara, offering a cozy and welcoming stay amidst the scenic beauty of Pokhara. With comfortable accommodations and a friendly atmosphere, guests can enjoy a convenient location near local attractions and amenities.', '500', 17, 'Pokhara');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `user_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_email`, `password`, `full_name`, `user_ID`) VALUES
('banid@gmail.com', 'banid@123', 'banid', 2),
('aayush@gmail.com', 'Aelloworld123', 'Aayush Bhattarai', 16),
('ashish.acharya@heraldcollege.edu.np', 'Asdf@1234', 'Ashish Acharya', 19),
('kritika@gmail.com', 'hostelStays@123', 'Kritika Tuladhar', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_details`
--
ALTER TABLE `admin_details`
  ADD PRIMARY KEY (`admin_ID`);

--
-- Indexes for table `booking_details`
--
ALTER TABLE `booking_details`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `hostel_details`
--
ALTER TABLE `hostel_details`
  ADD PRIMARY KEY (`hostel_ID`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_details`
--
ALTER TABLE `admin_details`
  MODIFY `admin_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `booking_details`
--
ALTER TABLE `booking_details`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123479;

--
-- AUTO_INCREMENT for table `hostel_details`
--
ALTER TABLE `hostel_details`
  MODIFY `hostel_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
