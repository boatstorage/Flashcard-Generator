var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var basicLibrary = require("./basicLibrary.json");
var clozeLibrary = require("./clozeLibrary.json");

var currentCard;

var count = 0;

function gameMenu() {
	var menuMessage;

	inquirer.prompt([
		{type: "list",
		message: "\nChoose which kind of flash cards to study",
		choices: ["front question, back answer", "fill in the blank"],
		name: "mainMenu"
		}

		]).then(function(answer) {
			switch (answer.mainMenu) {
				case 'front question, back answer':
					console.log("lets begin!");
					menuMessage = setTimeout(basicRun(), 1000);
					break;
				case 'fill in the blank':
					console.log("and go!");
					menuMessage = setTimeout(clozeRun(), 1000);
					break;
				default:
				console.log("sorry thats not a choice");
			}
		});
	}
	gameMenu();

	function getQuestion(type, card) {
		if (type === "basic") {
			currentCard = new BasicCard(card.front, card.back);
			return currentCard.front;
		} else if (type === "cloze") {
			currentCard = new ClozeCard(card.text, cloze.cloze);
			return currentCard.partial;
		}

	}

	function basicRun(count){
		
		if (count < basicLibrary.length) {
			console.log("po");
			frontCard = getQuestion("basic", basicLibrary[count]);
			inquirer.prompt([
			{
				type: "input",
				message: frontCard,
				name: "basicQuestion"	
			}
			]).then( function(answer) {
				console.log(answer);
				if (answer.trim().toLowerCase() === basicLibrary[count].back.toLowerCase()) {
					console.log("You are correct! The answer is " + basicLibrary[count].back);
				} else {
				
					console.log("Incorrect! The answer is " + basicLibrary[count].back);
				
					count++;
					basicRun(count);
		}

		else {
			count = 0;
			gameMenu();
		}
	})
		
				
		


			

				
			
	

		


	function clozeRun(){
		if (count < clozeLibrary.length) {
			partialCard = getQuestion("cloze", clozeLibrary[count]);
			inquirer.prompt([
			{
				type: "input",
				message: partialCard,
				name: "clozeQuestion"	
			}
			]).then( function(answer) {
				if (answer.clozeQuestion.trim().toLowerCase() === clozeLibrary[count].cloze.toLowerCase()) {
					console.log("You are correct! " + clozeLibrary[count].fulltext);
				} else {
					console.log("Incorrect! " + clozeLibrary[count].fulltext);
				
			

			count++;
			clozeRun();
		}
		})

		} else {
			count = 0;
			gameMenu();
		}
}