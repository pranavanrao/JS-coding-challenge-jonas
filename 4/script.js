var john = {

    name : "John Smith",
    mass : 85,
    height : 1.9,
    cal_bmi : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

};

john.cal_bmi();
console.log(john);

var mark = {

    name : "Mark Jobs",
    mass : 78,
    height : 1.7,
    cal_bmi : function () {
        this.bmi = this.mass / (this.height * this.height);
    }
    
};

mark.cal_bmi();
console.log(mark);

if (john.cal_bmi > mark.cal_bmi) {
    console.log("John has the more BMI");
}
else if (mark.cal_bmi > john.cal_bmi) {
    console.log("Mark has the more BMI");
}
else {
    console.log("Both Mark and John has same BMI");
}