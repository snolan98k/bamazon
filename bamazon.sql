CREATE database bamazon;
USE bamazon;
CREATE TABLE products
(
    item_id INT (4) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR (200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(15) NOT NULL,
    PRIMARY KEY (item_id)
);

Select *
FROM products;

INSERT INTO products
    (item_id,product_name,department_name,price,stock_quantity)

VALUES
    (102, "Wine glass", "kitchen", 29.99, 15),
    (115, "Decanter", "kitchen", 49.99, 10),
    (202, "wine cabinet", "Furniture", 249.99, 5),
    (258, "Wooden Table", "Furniture" , 599.99, 2),
    (295, "Chair", "Furniture", 49.99, 20),
    (365, "Coasters", "Accessories", 4.99, 20),
    (312, "Placemats", "Accessories", 34.99, 15),
    (458, "Samsung TV", "Electronics", 999.99, 5),
    (476, "Bose Speakers", "Electronics", 499.99, 8),
    (582, "Tool Box", "Tools", 100.00, 5)
