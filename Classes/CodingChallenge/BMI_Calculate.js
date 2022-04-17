prabin_mass = 80;
prabin_height = 1.6764;

ram_mass = 60;
ram_height = 1.76784;

BMI1 = prabin_mass / (prabin_height * prabin_height);
BMI2 = ram_mass / (ram_height * ram_height);

// console.log(BMI1);
// console.log(BMI2);
let isprabinHigherBMI = (BMI1>BMI2)? "Prabin BMI is greater than Ram" : "Ram BMI is greater than Prabin";
console.log(isprabinHigherBMI);

