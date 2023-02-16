
-- Team Number: 14
-- Names: Sofia Komrskova, Devin Daniels

SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;



-- -----------------------------------------------------
-- Table `Customers`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE `Customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(300) NULL,
  `email` VARCHAR(100) NULL,
  `phone_number` VARCHAR(15) NULL, 
  PRIMARY KEY (`customer_id`)
)ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Employees`
-- -----------------------------------------------------

CREATE OR REPLACE TABLE `Employees` (
  `employee_id` INT NOT NULL AUTO_INCREMENT,
  `employee_name` VARCHAR(300) NOT NULL,
  `shift_worked` DATETIME NOT NULL,
  PRIMARY KEY (`employee_id`)
)ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `Sales`
-- -----------------------------------------------------

CREATE OR REPLACE TABLE `Sales` (
  `sale_id` INT NOT NULL AUTO_INCREMENT,
  `quantity_of_donuts_sold` INT NOT NULL,
  `purchase_date` DATETIME NOT NULL,
  `sale_amount` decimal(19,2) NOT NULL,
  `customer_id` INT NOT NULL,
  `employee_id` INT NOT NULL,
  PRIMARY KEY (`sale_id`),
  FOREIGN KEY (`customer_id`) REFERENCES `Customers`(`customer_id`) ON DELETE CASCADE,
  FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`employee_id`) ON DELETE CASCADE
  
)ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Sales_detail`
-- -----------------------------------------------------

CREATE OR REPLACE TABLE `Sales_detail` (
  `sale_detail_id` INT NOT NULL AUTO_INCREMENT,
  `donut_id` INT NOT NULL,
  `sale_id` INT NOT NULL,
  PRIMARY KEY (`sale_detail_id`),
  FOREIGN KEY (`donut_id`) REFERENCES `Donuts`(`donut_id`) ON DELETE CASCADE,
  FOREIGN KEY (`sale_id`) REFERENCES `Sales`(`sale_id`) ON DELETE CASCADE
  
)ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Donuts`
-- -----------------------------------------------------

CREATE OR REPLACE TABLE `Donuts` (
  `donut_id` INT NOT NULL AUTO_INCREMENT,
  `donut_name` VARCHAR(300) NOT NULL,
  `price` decimal(19,2) NOT NULL,
  PRIMARY KEY (`donut_id`)
  
)ENGINE = InnoDB;

-- Insert Example Data into Customers Table (5 Items)
INSERT INTO Customers (`customer_name`, `email`, `phone_number`)
    VALUES ('John Carter','john.carter@gmail.com', '347-555-2122'), 
    (null,null,null),
    (null,null,null),
    ('Alison Deluca','alison.deluca@hotmail.com','212-304-2122'),
    (null,null,null);

-- Insert Example Data into Employees Table (5 Items)
INSERT INTO Employees (`employee_name`, `shift_worked`)
    VALUES ('Jane Smith','2023-1-15'), 
    ('Peter Griffin','2023-1-16'),
    ('Dana Scully','2023-1-17'),
    ('Fox Mulder','2023-1-18'),
    ('Homer Simpson','2023-1-19');

-- Insert Example Data into Sales Table (5 Items)
INSERT INTO Sales (`quantity_of_donuts_sold`, `purchase_date`, `sale_amount`, `employee_id`, `customer_id`)
    VALUES (4,'2023-1-15', 13.18, 1, 1), 
    (3,'2023-1-16', 10.33, 2, 2),
    (12,'2023-1-17', 28.22, 3, 3),
    (6,'2023-1-18', 16.71, 4, 4),
    (2,'2023-1-19', 7.22, 5, 5);

 -- Insert Example Data into Sales_detail Table (5 Items)
INSERT INTO Sales_detail (`donut_id`, `sale_id`)
    VALUES (1, 1), 
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);

    -- Insert Example Data into Donuts Table (5 Items)
INSERT INTO Donuts (`donut_name`, `price`)
    VALUES ('vanilla', 2), 
    ('chocolate', 2.5),
    ('strawberry',2.5),
    ('blueberry',2.5),
    ('mocha', 3);

   
