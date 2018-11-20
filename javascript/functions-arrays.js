// var studentNames = ["Timmy","Janessa","Arun"];

// var badStudentList = [];
// badStudentList.push(studentNames[0]);

// var index = badStudentList.indexOf("Timmy");

// //console.log(badStudentList);

// if (index > -1) {
//   badStudentList.splice(index, 1);
// }

// console.log(badStudentList);

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var lenght2 = 12;
// var width2 = 14;
// var area2 = lenght2 * width2;


// console.log(area1);
// console.log(area2);

// function area(length, width) {
//    return length * width;
// }

// var rectanglesAreas = []
// rectanglesAreas.push(area(10,15));
// rectanglesAreas.push(area(14,2));
// rectanglesAreas.push(area(4,5));

// console.log(rectanglesAreas);


var bankBalance = 500;

function makeTransaction(priceOfSale) {
   if (priceOfSale <= bankBalance) {
       bankBalance -= priceOfSale;
       console.log("Purchase Successful");
   } else {
       console.log("Insufficient Funds");
   }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450.00);
