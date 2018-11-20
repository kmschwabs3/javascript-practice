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