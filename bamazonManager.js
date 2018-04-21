var inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "WujEufD1",
  database: "bamazon"
});

conn.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "selection",
      type: "rawlist",
      message: "Please choose from the following options:",
      choices: ["View Products for Sale","View Low Inventory", "Add to Inventory", "Add New Product", "Exit App"]
    })
    .then(function(answer) {
      if (answer.selection === "View Products for Sale") {
        displayItems();
      } else if (answer.selection === "View Low Inventory") {
        viewLowInventory();
      } else if (answer.selection === "Add to Inventory") {
        addToInventory();
      } else if (answer.selection === "Add New Product") {
        addNewProduct();
      }else if (answer.selection === "Exit App") {
        conn.end();
      }
    });

}

function displayItems() {
  var sql = "SELECT * FROM products";
  
  conn.query(sql, function (err, result) {
    if (err) throw err;
    var displayTable = [];
      for (var i = 0; i < result.length; i++) {
        displayTable[i] = [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
      }
      console.table(['\nItem ID','Description','Price', 'Quantity'],displayTable);
      start();
  });
  }

  function viewLowInventory() {
  var sql = "SELECT * FROM products WHERE stock_quantity < 5";
  conn.query(sql, function (err, result) {
    var displayTable = [];
    if (err) throw err;
      for (var i = 0; i < result.length; i++) {
        displayTable[i] = [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
      }
      if (result.length != 0) {
        console.table(['\nItem ID','Description','Price', 'Quantity'],displayTable);
      } else {
        console.log('\n<-----No Items to Display----->\n');
      }
      start();
  });
  }

  function addToInventory() {
  var sql = "SELECT * FROM products";
  
  conn.query(sql, function (err, result) {
    var displayTable = [];
    if (err) throw err;
      for (var i = 0; i < result.length; i++) {
        displayTable[i] = [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
      }
      console.table(['\nItem ID','Description','Price', 'Quantity'],displayTable);
  });
  conn.query(sql, function (err, result) {
    if (err) throw err;
      inquirer
        .prompt([
        {
          name: "selectItem",
          type: "input",
          message: "Please enter the Item ID of the product: "
        },
        {
          name: "howMany",
          type: "input",
          message: "How many would you like to add? "
        }
        ])
          .then (function(answer) {
            var chosenItem;
            for (var i = 0; i < result.length; i++) {
              if (result[i].item_id == answer.selectItem) {
                chosenItem = result[i];
              }
            }
           
                var quantityUpdate = parseInt(chosenItem.stock_quantity) + parseInt(answer.howMany);
                conn.query(
                  "UPDATE products SET ? WHERE ?",
                  [
                    {
                      stock_quantity: quantityUpdate
                    },
                    {
                      item_id: chosenItem.item_id
                    }
                  ],
                  function(error) {
                    if (error) throw err;
                    console.log("Item updated successfully");
                    start();
                  }
                );
              
          });
  });


}

 function addNewProduct() {
 
      inquirer
        .prompt([
        {
          name: "name",
          type: "input",
          message: "Please enter the name of the product: "
        },
        {
          name: "department",
          type: "input",
          message: "Please enter the department name: "
        },
        {
          name: "price",
          type: "input",
          message: "Please enter the price of the product: "
        },
        {
          name: "quantity",
          type: "input",
          message: "Please enter the quantity: "
        }
        ])
          .then (function(answer) {

            var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?";
            var values = [
              [answer.name, answer.department, answer.price, answer.quantity]
            ];
            conn.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("\n<-----Item Added Successfully----->.\n");
              start();
            });
              
          });
}

