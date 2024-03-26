-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 02:17 PM
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
(1, 'Pizza', 50, '50', '123.jpg', '2024-03-26', 100),
(2, 'Batter Fried', 100, '100', 'batter-fried-chicken.jpg', '2024-03-26', 200),
(3, 'cowboy pie', 50, '125', 'Cowboy-pie-cef67be.jpg', '2024-03-26', 200),
(4, 'Skillet Polenta in Creamy', 525, '150', '36.jpg', '2024-03-26', 100),
(5, 'Fish fried', 50, '155', 'images (3).jfif', '2024-03-26', 200),
(6, 'Pasta Yummy', 15, '222', 'images (4).jfif', '2024-03-26', 50),
(7, 'spaghetti', 15, '500', 'one-pot-spaghetti.jpg', '2024-03-26', 100),
(8, 'Chinese Rice Combo', 150, '158', '253.jpg', '2024-03-26', 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
