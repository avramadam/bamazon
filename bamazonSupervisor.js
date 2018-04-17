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
      choices: ["View Product Sales by Department","Create New Department","Exit App"]
    })
    .then(function(answer) {
      if (answer.selection === "View Product Sales by Department") {
        displayItems();
      } else if (answer.selection === "Create New Department") {
        addNewDepartment();
      } else if (answer.selection === "Exit App") {
        conn.end();
      }
    });

}

function displayItems() {
  //var sql = "SELECT department_id,departments.department_name,over_head_costs,SUM(products.product_sales) AS product_sales, product_sales - departments.over_head_costs AS Total_Profit FROM departments INNER JOIN products ON departments.department_name = products.department_name GROUP BY department_id";
  var sql = "SELECT department_id,departments.department_name,over_head_costs,SUM(products.product_sales) AS product_sales, SUM(products.product_sales) - departments.over_head_costs AS Total_Profit FROM departments INNER JOIN products ON departments.department_name = products.department_name GROUP BY department_id";
  
  conn.query(sql, function (err, result) {

    var displayTable = [];
    if (err) throw err;
      for (var i = 0; i < result.length; i++) {
        displayTable[i] = [result[i].department_id, result[i].department_name, result[i].over_head_costs, result[i].product_sales, result[i].Total_Profit]
      }
      console.table(['\nDepartment ID','Department Name','Over Head Costs','Product Sales','Total Profit'],displayTable);
      start();
  });
}

 function addNewDepartment() {
 
      inquirer
        .prompt([
        {
          name: "name",
          type: "input",
          message: "Please enter the department name: "
        },
        {
          name: "overhead",
          type: "input",
          message: "Please enter the over head costs: "
        }
        ])
          .then (function(answer) {

            var sql = "INSERT INTO departments (department_name, over_head_costs) VALUES ?";
            var values = [
              [answer.name, answer.overhead]
            ];
            conn.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("\n<-----Item Added Successfully----->.\n");
              start();
            });
              
          });
}