// // var myAccountBalance = 300;
// // var guitar = 500;
// // var coupon = 250;

// // if (guitar <= myAccountBalance){
// // 	myAccountBalance -= guitar;
// // 	console.log("You can buy the guitar!");
// // 	console.log("Account Balance: " + myAccountBalance);
// // } else if (guitar - coupon <= myAccountBalance){
// // 	console.log("You can buy the guitar with this coupon!");
// // 	myAccountBalance -= guitar - coupon;
// // 	console.log("Account Balance: " + myAccountBalance);
// // } else {
// // 	console.log("You can't afford the guitar.");
// // }

// // if (1===1 && 2===2 || 'joe' === 'joe'){
// // 	console.log('these are both same');
// // }

// // if (1 === 3 || "joe" === "joe"){
// // 	console.log('one is true');
// // }

// // var catOne = 5;
// // var catTwo = 10;
// // var catThree = 1;
// // var catThreeDisabledHandicap = true;

// // if ((catOne > catTwo && catOne >catThree) && !catThreeDisabledHandicap){
// // 	console.log("Cat 1 is the cutest!");
// // } else if ((catTwo > catOne && catTwo > catThree) && !catThreeDisabledHandicap){
// // 	console.log("Cat 2 is the cutest!");
// // } else if ((catThree > catOne && catThree > catTwo) || catThreeDisabledHandicap) {
// // 	console.log("Cat 3 is the cutest!");
// // // }

// // var length1 = 15;
// // var width1 = 10;
// // // var area1 = length1 * width1;

// // var length2 = 12;
// // var width2 = 14;
// // // var area2 = length2 * width2;

// // function area(length, width){
// // 	return length * width;
// // }
// // var rectanglesArea = [];
// // rectanglesArea.push(area(12, 14));
// // rectanglesArea.push(area(5, 7));

// // console.log(rectanglesArea);


// // var bankBalance =100;

// function makeTransaction(priceOfSale){
// 	if (priceOfSale <= bankBalance){
// 		bankBalance -= priceOfSale;
// 		console.log("Purchase Sucessful!")
// 	} else {
// 		console.log("Insufficent Funds.")
// 	}
// };

// console.log(bankBalance);
// makeTransaction(80.00);

// console.log(bankBalance);
// makeTransaction(3.50);

// console.log(bankBalance);
// makeTransaction(11.99);

// console.log(bankBalance);
// makeTransaction(35.76);

// var transaction = function(priceOfSale){
// 	if (priceOfSale <= bankBalance){
// 		bankBalance -= priceOfSale;
// 		console.log("Purchase Sucessful!")
// 	} else {
// 		console.log("Insufficent Funds.")
// 	}
// };

// var printCustomerName = function(first, last) {
// 	console.log(`First Name: ${first} Last Name: ${last}`);
// };

// console.log(printCustomerName('Krissy', 'Schwab'));


//two ways to access elements in objects
// console.log(student.firstName);
// console.log(student.age);
// console.log(student['firstName']);
// console.log(student['age']);

var students = [];

//object constructor!!!
function Student(firstName, lastName, age){
	this.firstName =firstName;
	this.lastName = lastName;
	this.age = age;
	this.greeting = function(){
		return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
	};
}

students.push(new Student('Mark', 'Turner', 7));
students.push(new Student('Tim', 'Frank', 8));

var student = students[0];

// for (var key in student){
// 	console.log(student[key]);
// }
//for in loop

for (var index =0; index < students.length; index++){
	var student = students[index];
	console.log (student.greeting());
}

// var s1 = new Student('Jenny','Li' , 8);
// console.log(s1);
// console.log(s1.greeting());

// var student0 = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	age: 7,
// };

// console.log(student0.greeting());

// //creates new empty objecct
// var student1 = new Object();
// student1.firstName = 'Joe';
// student1.lastName = 'Hardy';
// student1.age = 8;
// console.log(student1);

// var student2 = {};
// student2.firstName = 'Sally';
// student2.lastName = 'West';
// student2.age = 7;
// console.log(student2);

// var student = [];

// student.push(student0);
// student.push(student1);
// student.push(student2);

// console.log(student);