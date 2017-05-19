var Basic = require("./basic.js");

function ClozeCard(text, cloze) {
	this.text = text.split(cloze);
	this.cloze = cloze;
	this.showCloze = function () {
		if(this.cloze === true) {
			console.log(this.cloze)
			return("...George Washington")
		}
		else {
			return("....was the first presidend of the USA.")
		}
	};
};

//ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard;



	//ATTEMPT * - if/else logic on flash page
// function ClozeCard(text, cloze) {
// 	this.text = text.split(cloze);
// 	this.cloze = cloze;
// 	this.showCloze = function () {
// 		if(this.cloze === true) {
// 			console.log(this.cloze)
// 			return("...George Washington")
// 		}
// 		else {
// 			return("....was the first presidend of the USA.")
// 		}
// 	};
// };
