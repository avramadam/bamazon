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
  console.log("Connected!");
  displayItems();
});

function displayItems() {
  var sql = "SELECT * FROM products";
  
  conn.query(sql, function (err, result) {
    if (err) throw err;
    var displayTable = [];
      for (var i = 0; i < result.length; i++) {
        displayTable[i] = [result[i].item_id, result[i].product_name, result[i].price]
      }
      console.table(['\nItem ID','Description','Price'],displayTable);
  });
  conn.query(sql, function (err, result) {
    if (err) throw err;
      inquirer
        .prompt([
        {
          name: "selectItem",
          type: "input",
          message: "Please enter the Item ID of the product you would like to purchase: "
        },
        {
          name: "howMany",
          type: "input",
          message: "How many would you like to buy? "
        }
        ])
          .then (function(answer) {
            var chosenItem;
            for (var i = 0; i < result.length; i++) {

              if (result[i].item_id == answer.selectItem) {
                chosenItem = result[i];
              }
            }
           
              if (chosenItem.stock_quantity >= parseInt(answer.howMany)) {
                var quantityUpdate = parseInt(chosenItem.stock_quantity) - parseInt(answer.howMany);
                var totalPrice = chosenItem.price * answer.howMany;
                var prodSales = totalPrice + chosenItem.product_sales
                conn.query(
                  "UPDATE products SET ? WHERE ?",
                  [
                    {
                      stock_quantity: quantityUpdate,
                      product_sales: prodSales
                    },
                    {
                      item_id: chosenItem.item_id
                    }
                  ],
                  function(error) {
                    if (error) throw err;
                    console.log("Item purchased successfully");
                    console.log("Thank You for shopping with Bamazon!");
                    console.log("Total: $" + totalPrice.toFixed(2));
                    conn.end();
                  }
                );
              } else {
                console.log("Insufficient Quantity!");
                conn.end();
              }
          });
  });
}