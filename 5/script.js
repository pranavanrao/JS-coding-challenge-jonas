var john = {
    name : "John Smith",
    bills : [128, 48, 268, 180, 42],
    Cal_tips : function() {
        this.tips = [];
        this.total = [];

        for (var i=0; i<this.bills[i]; i++) {
            var temp;
            var bill = this.bills[i];
            if (bill <= 50) {
                this.temp = 0.2;
            }
            else if (bill > 50 && bill <= 200) {
                this.temp = 0.15;
            }
            else {
                this.temp = 0.1;
            }
            this.tips[i] = this.temp * bill;
            this.total[i] = bill + bill * this.temp;
        }
    }
};

var mark = {
    name : "Mark Jobs",
    bills : [77, 375, 110, 45],
    Cal_tips : function() {
        this.tips = [];
        this.total = [];
        
        for (var i=0; i<this.bills[i]; i++) {
            var temp;
            var bill = this.bills[i];
            if (bill <= 50) {
                this.temp = 0.2;
            }
            else if (bill > 50 && bill <= 200) {
                this.temp = 0.1;
            }
            else {
                this.temp = 0.25;
            }
            this.tips[i] = this.temp * bill;
            this.total[i] = bill + bill * this.temp;
        }
    }
};

john.Cal_tips();
mark.Cal_tips();

console.log(john,mark);

console.log("John's tips = \n"+john.tips);
console.log("John's total = \n"+john.total);

console.log("Mark's tips = \n"+mark.tips);
console.log("Mark's total = \n"+mark.total);