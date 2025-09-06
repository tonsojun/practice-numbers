// Practice Numbers 

// create a prompt asking the user how many people are going on a trip

// then for each person how many suitcases

// Once all information is received then show an alert like: 
// "5 people are traveling with 6 suitcases in total."

const numberOfPeople = prompt("How many people are going on a trip?")
console.log(numberOfPeople);
//create a function that will prompt each number of people how many suitcases. 

const bagCheck = (numberOfPeople) => {
	
	let totalBagsPerPerson = 0;
	for(let i = 1; i <= numberOfPeople; i++) {
		let howManyBags = parseInt(prompt(`How many suitcases is person ${i} bringing?`));
		console.log(howManyBags);
		console.log("in the function");
	  totalBagsPerPerson += howManyBags;
		console.log(totalBagsPerPerson);
	}
	alert(`${numberOfPeople} people are traveling with ${totalBagsPerPerson} suitcases in total`);

}
bagCheck(numberOfPeople);