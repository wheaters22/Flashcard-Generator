
function ClozeCard(text, cloze) {
	this.full = full;
	this.partial = partial;
	this.cloze = cloze;
	this.showCloze = function () {
		if(this.cloze === true) 
			return("...George Washington")
		console.log(this.cloze)
	};
}

//ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard;