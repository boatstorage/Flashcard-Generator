
var inquirer = require("inquirer");



var BasicCard = function(front, back){
	this.front = front;
	this.back = back;

}

var card1 = new BasicCard("What is Coffee's most active chemical?", "caffeine");
var card2 = new BasicCard("This is the only metal that is liquid at room temperature", "mercury");

module.exports = BasicCard;