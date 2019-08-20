const mysql = require("mysql");
const inquirier = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadID);
});

let displayProducts = function () {
    let query = "Select * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("res", res);
        purchasePrompt();
    });
}

function purchasePrompt() {
    inquirier.prompt([
        {
            name: "ID",
            type: "input",
            message: "Enter the ID you wouldlike to buy",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How mant do you want?",
            filter: Number
        },
    ]).then(function (anwsers) {
        const quantityNeeded = anwsers.Quantity;
        const IDrequested = anwsers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

function purchaseOrder(ID, amtNeeded) {
    connection.query(`Select * FROM products Where item_id = ${ID}`, function (err, res) {
        if (err) { console.log(err) };
        if (amtNeeded <= res[0].stock_quantity) {
            var totalCost = res[0].price * amtNeeded;
            console.log("We got what your looking for!");
            console.log("Your total cost for " + amtNeeded + " " + res[0].product_name + " is " + totalCost);

            connection.query(`UPDATE products SET stock_quantity = stock_quantity - ${amtNeeded} WHERE item_id = ${ID}`);
        } else {
            console.log("We don't have that many" + res[0].product_name + "please come back next week");
        };
        displayProducts();
    });
};

displayProducts();