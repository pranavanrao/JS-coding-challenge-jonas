var mm, mh, jm, jh, mbmi, jbmi, bool;
mm = prompt("Enter Mark's mass");
mh = prompt("Enter Mark's height");
jm = prompt("Enter John's mass");
jh = prompt("Enter John's height");

//Displaying mass and height of Mark and John
console.log("Mark's height = "+ mh);
console.log("Mark's mass = "+ mm);
console.log("John's height = "+ jh);
console.log("John's mass = "+ jm);

//calculating BMI
mbmi = mm/(mh*mh);//Mark's BMI
jbmi = mm/(jh*jh);//John's BMI
console.log("Mark's BMI = "+mbmi);
console.log("John's BMI = "+jbmi);

//boolean
bool = mbmi > jbmi;
console.log(bool);
bool = mbmi < jbmi;
console.log(bool);