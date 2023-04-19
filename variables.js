// declaring variables using var, let and const

// var x = 7;
// var x =8;
// document.write("Declaring using var: "+x);

// let y = 7;
// y =8;
// document.write("Declaring using let: "+y);

// const z = 7;
// z++;
// document.write("Declaring using const: "+z);

// x = 7;
// var x;
// document.write("Declaring using var: "+x);  // javascript hoisting is when all of the variables declaration get declared at the beginning of the program

// y = 8;
// let y;
// document.write("Declaring using let: "+ y);

// var x =7;

// if(x == 7) {
//     const y = 8;
//     document.write("inside blocks: "+y);
// }
// document.write(y);

//  -----------------------------------------------------------------
// console.log()

// let x = 7;
// if (x === "7"){
//     // document.write("<h1>hello</h1>");
//     console.log("hello");
    
// }
// else{
//     console.log("goodbye");
//     // document.write("<h1>goodbye</h1>");
// }

let rate = prompt("rate our website from 1 to 5");
rate = parseInt(rate);
let z = 8;
for(let i=1; i<=rate; i++){
    document.write("<img src='img/download.png' height='50' width='50'>");
}
// if(rate === 1){
//     document.write("<img src='img/download.png' height='50' width='50'>");
// }
// else if (rate === 2){
//     document.write("<img src='img/download.png' height='50' width='50'>");
//     document.write("<img src='img/download.png' height='50' width='50'>");
// }


