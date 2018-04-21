CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
    item_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name varchar(255) NOT NULL,
    department_name varchar(255),
    price float(8,2) NOT NULL,
    stock_quantity int NOT NULL,
    product_sales float(8,2)
);

CREATE TABLE departments (
    department_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name varchar(255) NOT NULL,
    over_head_costs float(8,2) NOT NULL
);

INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (1,'bicycle','Sports & Recreation',1999.98,38025,5999.94);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (2,'Paddle Board','Sports & Recreation',223.99,217,1791.92);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (3,'Weight Lifting Machine','Sports & Recreation',2799.99,139,2799.99);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (4,'Drokanian FPV','RC & Electronics',135.99,187,1223.91);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (5,'Propellar','RC & Electronics',8.99,1055,1276.58);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (6,'Lumenier 2200kv Motor','RC & Electronics',25.99,970,103.96);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (7,'Table & Chairs','Furniture',250.99,249,250.99);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (8,'Couch','Furniture',129.99,22,3400.99);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (9,'Side Table','Furniture',99.99,175,599.94);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (10,'TV Stand','Furniture',126.99,102,253.98);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (13,'Treadmill','Sports',1457.99,19,1457.99);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (14,'Headboard','Furniture',129.99,2,389.79);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (15,'Striped Pollo Shirt','Clothes & Fasion',34.49,21,1207.15);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (16,'Diamond Necklace','Clothes & Fasion',2378.99,3,21410.91);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (17,'Lunenier 250mm Frame','RC & Electronics',179.99,4,NULL);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`,`product_sales`) VALUES (18,'Spider-Man Action Figure','Toys',19.99,1997,59.97);


INSERT INTO `departments` (`department_id`,`department_name`,`over_head_costs`) VALUES (1,'RC & Electronics',2000.00);
INSERT INTO `departments` (`department_id`,`department_name`,`over_head_costs`) VALUES (2,'Sports & Recreation',8000.00);
INSERT INTO `departments` (`department_id`,`department_name`,`over_head_costs`) VALUES (3,'Furniture',2500.00);
INSERT INTO `departments` (`department_id`,`department_name`,`over_head_costs`) VALUES (4,'Clothes & Fasion',6000.00);
INSERT INTO `departments` (`department_id`,`department_name`,`over_head_costs`) VALUES (5,'Toys',1300.00);