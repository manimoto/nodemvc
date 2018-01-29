-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 29, 2018 at 03:28 PM
-- Server version: 5.5.58-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `salt`, `password`) VALUES
(5, 'manish', '$2a$10$dCwFMPKJDaNiIM2/yvkWMe', '$2a$10$dCwFMPKJDaNiIM2/yvkWMeHcBcMMcaCm9cCKXoJIdFNbCcetApgom'),
(6, 'rajat', '$2a$10$WO0rChpRsjKiZa70E6gA3u', '$2a$10$WO0rChpRsjKiZa70E6gA3uTpLv8y8FldQhiuYZiUVLyjgQgzQnSS.'),
(7, 'ram', '$2a$10$qHF1iWJYO2z3js7dHyoZwO', '$2a$10$qHF1iWJYO2z3js7dHyoZwOPKWGsqo2JR9BdxxErmDOYXhTUxRz6my'),
(9, 'jain', '$2a$10$mrN3HtcNCK1rj77haBI7qe', '$2a$10$mrN3HtcNCK1rj77haBI7qeZw/2YCp0KWhL0YZEHKW7M9F.lm/HZg6');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
