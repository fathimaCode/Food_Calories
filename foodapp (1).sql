-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 10:38 AM
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
-- Database: `foodapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `purchase_id` varchar(20) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `created_at` varchar(20) NOT NULL,
  `productId` varchar(20) NOT NULL,
  `subtotal` varchar(20) NOT NULL,
  `calories` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `purchase_id`, `quantity`, `created_at`, `productId`, `subtotal`, `calories`) VALUES
(1, '047480c8-2dcc-4e90-9', '5', '2024-03-27T07:07:53.', '2', '500', '1000'),
(2, '047480c8-2dcc-4e90-9', '4', '2024-03-27T07:07:55.', '3', '500', '800'),
(3, '24710710-931a-4291-a', '5', '2024-03-27T07:07:53.', '2', '500', '1000'),
(4, '24710710-931a-4291-a', '4', '2024-03-27T07:07:55.', '3', '500', '800'),
(5, 'a66f19e5-92e4-474c-a', '5', '2024-03-27T07:07:53.', '2', '500', '1000'),
(6, 'a66f19e5-92e4-474c-a', '4', '2024-03-27T07:07:55.', '3', '500', '800'),
(7, '09d1e9f3-8b5c-405d-a', '4', '2024-03-27T08:04:13.', '2', '400', '800'),
(8, '09d1e9f3-8b5c-405d-a', '3', '2024-03-27T08:04:15.', '4', '450', '300'),
(9, '4bce1be7-9819-4a6a-a', '4', '2024-03-27T08:39:01.', '2', '400', '800'),
(10, '4bce1be7-9819-4a6a-a', '5', '2024-03-27T08:39:03.', '4', '750', '500'),
(11, '1b238f1e-225d-485d-a', '6', '2024-03-27T09:13:55.', '1', '300', '600'),
(12, '1b238f1e-225d-485d-a', '6', '2024-03-27T09:13:58.', '2', '600', '1200'),
(13, 'afcb222f-eb57-4779-a', '3', '2024-03-27T09:18:52.', '2', '300', '600'),
(14, 'afcb222f-eb57-4779-a', '3', '2024-03-27T09:18:53.', '3', '375', '600'),
(15, '8701726e-e6f4-4e4d-b', '4', '2024-03-27T09:20:32.', '2', '400', '800'),
(16, '8701726e-e6f4-4e4d-b', '3', '2024-03-27T09:20:33.', '3', '375', '600'),
(17, '2f0754ee-5e1d-4ffb-a', '3', '2024-03-27T09:21:08.', '2', '300', '600'),
(18, '2f0754ee-5e1d-4ffb-a', '4', '2024-03-27T09:21:10.', '3', '500', '800'),
(19, '06c02b54-f1ab-49be-b', '4', '2024-03-27T09:22:59.', '2', '400', '800'),
(20, '06c02b54-f1ab-49be-b', '3', '2024-03-27T09:23:01.', '3', '375', '600'),
(21, 'd70c411e-e042-48b6-b', '5', '2024-03-27T09:25:30.', '2', '500', '1000'),
(22, 'd70c411e-e042-48b6-b', '3', '2024-03-27T09:25:33.', '3', '375', '600'),
(23, '1390c7d2-13df-4b76-9', '3', '2024-03-27T09:31:07.', '3', '375', '600'),
(24, '1390c7d2-13df-4b76-9', '3', '2024-03-27T09:31:09.', '4', '450', '300'),
(25, '1390c7d2-13df-4b76-9', '3', '2024-03-27T09:31:12.', '12', '540', '135');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` varchar(20) NOT NULL,
  `img` varchar(100) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `calories` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `quantity`, `price`, `img`, `created_at`, `calories`) VALUES
(1, 'Pizza', 100, '50', '123.jpg', '2024-03-26', 100),
(2, 'Batter Fried', 95, '100', 'batter-fried-chicken.jpg', '2024-03-26', 200),
(3, 'cowboy pie', 44, '125', 'Cowboy-pie-cef67be.jpg', '2024-03-26', 200),
(4, 'Skillet Polenta in Creamy', 522, '150', '36.jpg', '2024-03-26', 100),
(5, 'Fish fried', 50, '155', 'images (3).jfif', '2024-03-26', 200),
(6, 'Pasta Yummy', 100, '222', 'images (4).jfif', '2024-03-26', 50),
(7, 'spaghetti', 25, '500', 'one-pot-spaghetti.jpg', '2024-03-26', 100),
(8, 'Chinese Rice Combo', 20, '158', '253.jpg', '2024-03-26', 50),
(9, 'Garlic Beard', 15, '150', 'download (6).jfif', '2024-03-27', 500),
(10, 'Pixel_Food', 100, '250', 'ouu.jpeg', '2024-03-27', 600),
(11, 'Fiber Food', 150, '155', 'download (7).jfif', '2024-03-27', 200),
(12, 'Chicken tikka', 147, '180', 'chicken.jpg', '2024-03-27', 45);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `purchase_id` varchar(20) NOT NULL,
  `predicted_calories` varchar(20) NOT NULL,
  `ordered_calories` varchar(20) NOT NULL,
  `total_amount` varchar(20) NOT NULL,
  `age` varchar(20) NOT NULL,
  `weight` varchar(20) NOT NULL,
  `height` varchar(20) NOT NULL,
  `purchased_at` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`id`, `name`, `purchase_id`, `predicted_calories`, `ordered_calories`, `total_amount`, `age`, `weight`, `height`, `purchased_at`) VALUES
(1, 'pavithra', '047480c8-2dcc-4e90-9', '1873.7974', '1800', '1000', '22', '50', '150', '2024-03-27'),
(2, 'Kuamr', '24710710-931a-4291-a', '1608.9072', '1800', '1000', '52', '50', '151', '2024-03-27'),
(3, 'ravi', 'a66f19e5-92e4-474c-a', '1502.3984', '1800', '1000', '50', '20', '151', '2024-03-27'),
(4, 'Riya', '09d1e9f3-8b5c-405d-a', '1777.8296', '1100', '850', '29', '58', '151', '2024-03-27'),
(5, 'Jeeva', '4bce1be7-9819-4a6a-a', '1757.9233', '1300', '1150', '50', '50', '150', '2024-03-27'),
(6, 'Ravi', '1b238f1e-225d-485d-a', '2023.4308', '1800', '900', '45', '55', '170', '2024-03-27'),
(7, 'Usha', 'afcb222f-eb57-4779-a', '1945.7253', '1200', '675', '10', '45', '154', '2024-03-27'),
(8, 'SD', '8701726e-e6f4-4e4d-b', '2867.576', '1400', '775', '25', '152', '22', '2024-03-27'),
(9, 'sds', '2f0754ee-5e1d-4ffb-a', '1405.8646', '1400', '800', '50', '11', '11', '2024-03-27'),
(10, 'sds', '06c02b54-f1ab-49be-b', '3146.9338', '1400', '775', '15', '150', '155', '2024-03-27'),
(11, 'Naveeb', 'd70c411e-e042-48b6-b', '1842.4414', '1600', '875', '45', '50', '154', '2024-03-27'),
(12, 'Praveen', '1390c7d2-13df-4b76-9', '1815.85', '1035', '1365', '15', '40', '167', '2024-03-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
