// Practice Numbers 

// create a prompt asking the user how many people are going on a trip

// then for each person how many suitcases

// Once all information is received then show an alert like: 
// "5 people are traveling with 6 suitcases in total."

const numberOfAdults = prompt("How many people are going on a trip?");
const numberOfKids = prompt("How many kids are in the party?");
const totalNumberOfPeople = numberOfAdults + numberOfKids;
console.log("totalNumberOfPeople is " + totalNumberOfPeople);
//create a function that will prompt each number of people how many suitcases. 

const bagCheck = (numberOfPeople) => {
	
	let totalBagsPerPerson = 0;
	let adultTicketPrice = 0;
	let kidTicketPrice = 0;
	let suitcaseCost = 0;
	for(let i = 1; i <= totalNumberOfPeople; i++) {
		let howManyBags = parseInt(prompt(`How many suitcases is person ${i} bringing?`));
		console.log(howManyBags);
		console.log("in the function");
	  totalBagsPerPerson += howManyBags;
		adultTicketPrice = howManyAdultBags * 80;
		kidTicketPrice = howManyKidBags * 50 
		suitcaseCost = totalBagsPerPerson * 40
		console.log(totalBagsPerPerson);
	}
	alert(`${numberOfPeople} people are traveling with ${totalBagsPerPerson} suitcases in total. Total Price: $${adultTicketPrice + kidTicketPrice + suitcaseCost}`);

}
bagCheck(numberOfPeople);