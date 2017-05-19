
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.showBasic = function() {
		if(this.front === true) {
			return ("Who was the first presidnet of USA?")
		}
		else {
			return ("George Washington")
		}
	};
};



// var input1 = process.argv[2].toLowerCase();

// var fs = require('fs');

// if (input1 === "basic") {

// 	var basic = require("./Basic");
// 	basic();


// } else if (input1 === "cloze") {

// 	var cloze = require("./Cloze");
// 	cloze();

// } else {

// 	console.log("This is not a function of this app!");
// }


module.exports = BasicCard;