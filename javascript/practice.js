var myAccountBalance = 300;
var guitar = 500;
var coupon = 250;

if (guitar <= myAccountBalance){
	myAccountBalance -= guitar;
	console.log("You can buy the guitar!");
	console.log("Account Balance: " + myAccountBalance);
} else if (guitar - coupon <= myAccountBalance){
	console.log("You can buy the guitar with this coupon!");
	myAccountBalance -= guitar - coupon;
	console.log("Account Balance: " + myAccountBalance);
} else {
	console.log("You can't afford the guitar.");
}

if (1===1 && 2===2 || 'joe' === 'joe'){
	console.log('these are both same');
}

if (1 === 3 || "joe" === "joe"){
	console.log('one is true');
}

var catOne = 5;
var catTwo = 10;
var catThree = 1;
var catThreeDisabledHandicap = true;

if ((catOne > catTwo && catOne >catThree) && !catThreeDisabledHandicap){
	console.log("Cat 1 is the cutest!");
} else if ((catTwo > catOne && catTwo > catThree) && !catThreeDisabledHandicap){
	console.log("Cat 2 is the cutest!");
} else if ((catThree > catOne && catThree > catTwo) || catThreeDisabledHandicap) {
	console.log("Cat 3 is the cutest!");
}
