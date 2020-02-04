var bills = [124, 48, 268];

function tipCalc (bill) {
    var temp;
    if (bill <=50) {
        temp = 0.2;
    }
    else if (bill > 50 && bill <= 200) {
        temp = 0.15;
    }
    else {
        temp = 0.1;
    }

    return temp * bill;
}

var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

console.log("Bill of 1st resto = "+bills[0]);
console.log("Tip given = "+tips[0]);
console.log("Total amount paid = "+(bills[0]+tips[0]));
console.log("\n\n");

console.log("Bill of 2nd resto = "+bills[1]);
console.log("Tip given = "+tips[1]);
console.log("Total amount paid = "+(bills[1]+tips[1]));
console.log("\n\n");

console.log("Bill of 3rd resto = "+bills[2]);
console.log("Tip given = "+tips[2]);
console.log("Total amount paid = "+(bills[2]+tips[2]));