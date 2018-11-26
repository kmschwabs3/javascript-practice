// var myAccountBalance = 300;
// var guitar = 500;
// var coupon = 250;

// if (guitar <= myAccountBalance){
// 	myAccountBalance -= guitar;
// 	console.log("You can buy the guitar!");
// 	console.log("Account Balance: " + myAccountBalance);
// } else if (guitar - coupon <= myAccountBalance){
// 	console.log("You can buy the guitar with this coupon!");
// 	myAccountBalance -= guitar - coupon;
// 	console.log("Account Balance: " + myAccountBalance);
// } else {
// 	console.log("You can't afford the guitar.");
// }

// if (1===1 && 2===2 || 'joe' === 'joe'){
// 	console.log('these are both same');
// }

// if (1 === 3 || "joe" === "joe"){
// 	console.log('one is true');
// }

// var catOne = 5;
// var catTwo = 10;
// var catThree = 1;
// var catThreeDisabledHandicap = true;

// if ((catOne > catTwo && catOne >catThree) && !catThreeDisabledHandicap){
// 	console.log("Cat 1 is the cutest!");
// } else if ((catTwo > catOne && catTwo > catThree) && !catThreeDisabledHandicap){
// 	console.log("Cat 2 is the cutest!");
// } else if ((catThree > catOne && catThree > catTwo) || catThreeDisabledHandicap) {
// 	console.log("Cat 3 is the cutest!");
// }

var length1 = 15;
var width1 = 10;
// var area1 = length1 * width1;

var length2 = 12;
var width2 = 14;
// var area2 = length2 * width2;

function area(length, width){
	return length * width;
}
var rectanglesArea = [];
rectanglesArea.push(area(12, 14));
rectanglesArea.push(area(5, 7));

console.log(rectanglesArea);


var bankBalance =100;

function makeTransaction(priceOfSale){
	if (priceOfSale <= bankBalance){
		bankBalance -= priceOfSale;
		console.log("Purchase Sucessful!")
	} else {
		console.log("Insufficent Funds.")
	}
};

console.log(bankBalance);
makeTransaction(80.00);

console.log(bankBalance);
makeTransaction(3.50);

console.log(bankBalance);
makeTransaction(11.99);

console.log(bankBalance);
makeTransaction(35.76);

var transaction = function(priceOfSale){
	if (priceOfSale <= bankBalance){
		bankBalance -= priceOfSale;
		console.log("Purchase Sucessful!")
	} else {
		console.log("Insufficent Funds.")
	}
};

var printCustomerName = function(first, last) {
	console.log(`First Name: ${first} Last Name: ${last}`);
};

console.log(printCustomerName('Krissy', 'Schwab'));

var applyForCreditCard = function(creditScore, soul){
	//somefunction
}

