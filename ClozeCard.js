
var ClozeCard = function(text, cloze) {
	this.text = text.split(cloze);
	this.cloze = cloze;
}

var clozeCard1 = new ClozeCard("Albert Einstein won the noble prize for discovering the photoelectric effect in 1921", "Albert Einstein");
var clozeCard2 = new ClozeCard("")


module.exports = ClozeCard;