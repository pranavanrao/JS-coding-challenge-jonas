var avg_john, avg_mark;

//average of john's team
avg_john = (89 + 120 + 103)/3;
console.log("average of john's team is "+avg_john);

//average of mark's team
avg_mark = (116 + 94 + 123)/3;
console.log("average of mark's team is "+avg_mark);

//average of mary's team
avg_mary = (97 + 134 + 105) / 3;
console.log("average of mark's team is "+avg_mary);

if(avg_john > avg_mark && avg_john > avg_mary) {
    console.log("John's team won!!");
}
else if(avg_mark > avg_mary && avg_mark > avg_mary){
    console.log("Mark's team won!!");
}
else {
    console.log("Mary's team won");
}