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

		]).then(function(answer, error) {
			if (error) {
				throw error;
				gameMenu();
			}else {


			switch (answer.mainMenu) {
				case 'front question, back answer':
					console.log("lets begin!");
					basicRun(count);
					break;
				case 'fill in the blank':
					console.log("and go!");
					clozeRun(count);
					break;
				default:
				console.log("sorry thats not a choice");
			}
		}
		});
	}
	gameMenu();

	function getQuestion(type, card) {
		if (type === "basic") {
			currentCard = new BasicCard(card.front, card.back);
			return currentCard.front;
		} else if (type === "cloze") {
			currentCard = new ClozeCard(card.text, card.cloze);
			return currentCard.partial;
		}

	}

	function basicRun( count){

		
		if (count < basicLibrary.length) {
	
			frontCard = getQuestion("basic", basicLibrary[count]);
			inquirer.prompt([
			{
				type: "input",
				message: frontCard,
				name: "basicQuestion"	
			}
			]).then( function(answer, error) {
				if (error) {
					throw error;
					basicRun(count);
				}else {
				console.log(answer);
				if (answer.basicQuestion.trim().toLowerCase() === basicLibrary[count].back.toLowerCase()) {
					console.log("You are correct! The answer is " + basicLibrary[count].back);
					count++;
					basicRun(count);
				} else {
				
					console.log("Incorrect! The answer is " + basicLibrary[count].back);
				
					count++;
					basicRun(count);
		}
	}
	})
		}}
				
		


			

				
	function clozeRun(count){

		if (count < clozeLibrary.length) {
			partialCard = getQuestion("cloze", clozeLibrary[count]);
			inquirer.prompt([
			{
				type: "input",
				message: partialCard,
				name: "clozeQuestion"	
			}
			]).then( function(answer, error) {
				if (error){
					throw error;
					clozeRun(count);
				}
				if (answer.clozeQuestion.trim().toLowerCase() === clozeLibrary[count].cloze.toLowerCase()) {
					console.log("You are correct! " + clozeLibrary[count].text);
					count++;
					clozeRun(count);
				} else {
					console.log("Incorrect! " + clozeLibrary[count].text);
					count++;
					clozeRun(count);
		
				}
			})
		}
};

		
