# bamazon

OVERVIEW:
Bamazon is an Amazon-like storefront with a MySQL database. The app will take in orders from customers and deplete stock 
from the store's inventory. It will also track product sales across the store's departments and then provide 
a summary of the highest-grossing departments in the store.

Customer App:
The app prompts users with two messages.
-The first asks them the ID of the product they would like to buy.
-The second message asks how many units of the product they would like to buy.

Manager App:
List a set of menu options:
-View Products for Sale
-View Low Inventory
-Add to Inventory
-Add New Product

-If a manager selects View Products for Sale, the app lists every available item: the item IDs, names, prices, and quantities.
-If a manager selects View Low Inventory, then it lists all items with an inventory count lower than five.
-If a manager selects Add to Inventory, the app should display a prompt that will let the manager "add more" of any item currently in the store.
-If a manager selects Add New Product, it allows the manager to add a completely new product to the store.

Running this application will list a set of menu options:
-View Product Sales by Department
-Create New Department

When a supervisor selects View Product Sales by Department, the app displays a summarized table in their terminal/bash window:

Department ID  Department Name      Over Head Costs  Product Sales  Total Profit
-------------  -------------------  ---------------  -------------  ------------
1              RC & Electronics     2000             2604.45        604.45
2              Sports & Recreation  8000             10591.85       2591.85
3              Furniture            2500             4895.69        2395.69
4              Clothes & Fasion     6000             22618.06       16618.06
5              Toys                 1300             59.97          -1240.03

The total_profit column is calculated using the difference between "Over Head Costs" and "Product Sales".

How to run the application:\n

node bamazonCustomer.js\n
node bamazonManager.js\n
node bamazonSupervisor.js\n

Major Conributor: Avram Adam
