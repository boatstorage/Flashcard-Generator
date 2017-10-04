
var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...")

}

var clozeCard1 = new ClozeCard("Albert Einstein won the noble prize for discovering the photoelectric effect in 1921", "Albert Einstein");
var clozeCard2 = new ClozeCard("The Magna Carta was signed in 1215 by King John of England", "Magna Carta")


module.exports = ClozeCard;