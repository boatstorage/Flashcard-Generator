
var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = partial(text, cloze);
	 
  function partial(text, cloze) {
		if (text.includes(cloze)) {

			
	    return text.replace(cloze, "...");

} else{
  throw new Error("Whoops! this text does not contain those words");
}

}}

var clozeCard1 = new ClozeCard("Albert Einstein won the noble prize for discovering the photoelectric effect in 1921", "Albert Einstein");
var clozeCard2 = new ClozeCard("The Magna Carta was signed in 1215 by King John of England", "Magna Carta");

// console.log(clozeCard1.partial);




module.exports = ClozeCard;