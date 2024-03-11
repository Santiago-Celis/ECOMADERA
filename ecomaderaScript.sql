-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ecomadera
-- ------------------------------------------------------
-- Server version	5.7.44-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actionsrol`
--

DROP TABLE IF EXISTS `actionsrol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actionsrol` (
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `rol_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  PRIMARY KEY (`rol_id`,`action_id`),
  KEY `action_id` (`action_id`),
  CONSTRAINT `actionsrol_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `actionsrol_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `actions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actionsrol`
--

LOCK TABLES `actionsrol` WRITE;
/*!40000 ALTER TABLE `actionsrol` DISABLE KEYS */;
/*!40000 ALTER TABLE `actionsrol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'gamer','2024-02-26 00:22:18','2024-02-26 00:22:18'),(2,'mesitas de noche','2024-02-26 00:22:37','2024-02-26 00:30:43'),(5,'Habitacion','2024-02-26 15:41:13','2024-02-26 15:41:13');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditcard`
--

DROP TABLE IF EXISTS `creditcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creditcard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titular` varchar(255) DEFAULT NULL,
  `card_number` int(12) NOT NULL,
  `c_v_v` int(3) NOT NULL,
  `expiration_date` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `card_number` (`card_number`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `creditcard_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditcard`
--

LOCK TABLES `creditcard` WRITE;
/*!40000 ALTER TABLE `creditcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `creditcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `height` float NOT NULL,
  `width` float DEFAULT NULL,
  `depth` float NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `imagen_u_r_l` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'mesa',6,7,9,'Producto de prueba para las imagenes',NULL,10000,'src\\imgs\\Sala1.jpg','2024-02-26 00:34:12','2024-02-26 00:34:12'),(3,'silla',6,7,9,'Producto de prueba para las imagenes',NULL,10000,'src\\imgs\\Carrusel1.jpg','2024-02-26 00:38:14','2024-02-26 00:38:14'),(4,'cama',6,7,9,'Producto de prueba para las imagenes',NULL,10000,'src\\imgs\\Carrusel1.jpg','2024-02-26 00:39:04','2024-02-26 00:39:04'),(5,'comedor',6,7,9,'Producto de prueba para las imagenes',1,10000,'src\\imgs\\Carrusel1.jpg','2024-02-26 00:39:45','2024-02-26 00:39:45'),(7,'Cama',6,7,9,'Producto de prueba para las imagenes',5,10000,'src\\imgs\\Carta3.jpg','2024-02-26 15:41:44','2024-02-26 15:41:44');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2024-02-28 02:03:41','2024-02-28 02:03:41'),(2,'Usuario','2024-02-28 03:33:14','2024-02-28 03:33:14');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `rol` int(11) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rol` (`rol`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'santi','santi@mail.com','$2a$10$j943nL/7Eu4d/nl2JSioZubluQCJqSmvyQVHkLh7nXT2af9b4W0oq',2147483647,1,'2024-02-28 03:28:23','2024-02-28 03:28:23'),(2,'santi2','santi2@mail.com','$2a$10$U/HoV9cFXD9.T18LOnDMTOxWcQpL39XVjy6iX5N8a2ZPoGujNR3tK',2147483647,1,'2024-02-28 03:31:25','2024-02-28 03:31:25'),(3,'isaac','isaac@mail.com','$2a$10$aMMDYxIb0P0a7oXIICMZRuxddnEEnMuR4enCd6w4bekgDy8yBfVoO',2147483647,2,'2024-02-28 03:34:29','2024-02-28 03:34:29'),(4,'santi','terumatsu7@gmail.com','$2a$10$5/j1MB3jCwu.Y4W8QVr8N.lgaTNcIDCAG3g6CzzxWOxEXFLYmf7Hm',1234569856,1,'2024-03-11 01:58:38','2024-03-11 01:58:38'),(5,'santi','terumatsu7@gmail.com','$2a$10$kdk43HIcXrfpl7m9v4zgUulZ4TZbiddbQKl98mi7HhVhfwQ0a2/Le',1234569856,1,'2024-03-11 01:58:42','2024-03-11 01:58:42'),(6,'santi','terumatsu7@gmail.com','$2a$10$bgFfM92kIg9DY0.XL.eJs.cJx922szF67.oLg3c7lEpByywopWyne',1234569856,1,'2024-03-11 01:58:42','2024-03-11 01:58:42'),(7,'Manuela','manu@gmail.com','$2a$10$dwtw8OOKxUhaFJFB/14n5ufn8uVG7lydDc4exqJyrPPK87SUf.KfC',1234567890,1,'2024-03-11 02:25:55','2024-03-11 02:25:55'),(8,'sofi','sofi@mail.com','$2a$10$X93qsfmn2fXk6GoyUKvQLeuHpDp21l619mJTvkSfEK45ZbMTZLzm6',1234569856,1,'2024-03-11 03:42:12','2024-03-11 03:42:12'),(9,'Stevens','stevens@mail.com','$2a$10$m4rZpNsXYlS8cqkkSsL5x.NpfLL1YIqmGmfAMMTmW6g0shO9JVHPS',1236549865,1,'2024-03-11 05:26:29','2024-03-11 05:26:29');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11  3:20:52
