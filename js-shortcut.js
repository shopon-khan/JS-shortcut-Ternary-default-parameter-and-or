const money = 150;
// let active = false;
let active = true;
// let active = true;
let food;
let cssClass;
if (money > 100) {
    food= 'biryani';
} else {
    food = 'dim baji';
}
// console.log(food);
// ternary
// ternary structure 1st condition ? 2nd true value : 3rd false value
let food2 = money > 100 ? 'biryani' : 'alur vorta';

if (active === true) {
    cssClass = 'active';
    
} else {
    cssClass = 'inactive';
}
const cssClass2 = active  ? 'active' : 'inactive';
// function call shortcut alternative
// active ? displayUser() : hidenUser()

// active && displayUser()
// active || displayUser()

const x = active && 5;
// if true then go 5
const y = active || 5;
// or if false go 5
// console.log(x);
// console.log(y);

// const number = '45';
// kuno akti string ar age jodi + plus sine deyoa hoy tahole ta numbera convert hoya jai
// string to number
const number = +'45';
// number to string 
const numText = 45 + '';
console.log(numText);
// console.log(number);

// default parameter 
function add(num1, num2 = 5){
    num2 = num2 || 5;
    return num1 + num2; 
}
add(45, 52);