// // Practice Numbers 

// // create a prompt asking the user how many people are going on a trip

// // then for each person how many suitcases

// // Once all information is received then show an alert like: 
// // "5 people are traveling with 6 suitcases in total."

// // const adultsTraveling = prompt("How many people are going on a trip?");
// // const adultsTravelingNumber = Number(adultsTraveling);
// // const kidsTraveling = prompt("How many kids are in the party?");
// // const kidsTravellingNumber = Number(kidsTravelling);

// // const totalPeople = adultsTravellingNumber + kidsTravellingNumber;

// // console.log("totalNumberOfPeople is " + totalNumberOfPeople);
// // //create a function that will prompt each number of people how many suitcases. 

// // const bagCheck = (numberOfPeople) => {
	
// // 	let totalBagsPerPerson = 0;
// // 	let adultTicketPrice = 0;
// // 	let kidTicketPrice = 0;
// // 	let suitcaseCost = 0;
// // 	for(let i = 1; i <= totalNumberOfPeople; i++) {
// // 		let howManyBags = parseInt(prompt(`How many suitcases is person ${i} bringing?`));
// // 		console.log(howManyBags);
// // 		console.log("in the function");
// // 	  totalBagsPerPerson += howManyBags;
// // 		adultTicketPrice = howManyAdultBags * 80;
// // 		kidTicketPrice = howManyKidBags * 50 
// // 		suitcaseCost = totalBagsPerPerson * 40
// // 		console.log(totalBagsPerPerson);
// // 	}
// // 	alert(`${numberOfPeople} people are traveling with ${totalBagsPerPerson} suitcases in total. Total Price: $${adultTicketPrice + kidTicketPrice + suitcaseCost}`);

// // }
// // bagCheck(numberOfPeople);

// const adultsTravelling = prompt("How many adults are travelling?");
// const adultsTravellingNumber = Number(adultsTravelling);

// const kidsTravelling = prompt("How many kids are travelling?");
// const kidsTravellingNumber = Number(kidsTravelling);


// const totalPeople = adultsTravellingNumber + kidsTravellingNumber;

// let totalSuitcases = 0;

// for (let i = 0; i < totalPeople; i++) {

//   const person = i + 1; // So it starts by 1

//   const suitcases = prompt(`How many suitcases is person ${person} bringing?`);

//   const suitcasesNumber = Number(suitcases);

//   totalSuitcases += suitcasesNumber;

// }

// const discountCode = prompt("Please enter your discount code");

// const adultsPrice = adultsTravellingNumber * 80;

// const kidsPrice = kidsTravellingNumber * 50;

// const suitcasesPrice = totalSuitcases * 40;

// let totalPrice = adultsPrice + kidsPrice + suitcasesPrice;

// if (discountCode === "THEOCTAGON10") {
// 	totalPrice = totalPrice * 0.9;
// }

// alert(`There's ${adultsTravellingNumber} adults travelling,
// ${kidsTravellingNumber} kids travelling,
// with ${totalSuitcases} suitcases.
// Total price: ${totalPrice}$`);

// ************** HEADS OR TAILS **********************

let activateCheats = false;

const button = document.getElementById("my-button");

button.addEventListener("click", () => {

	const randomNumber = Math.random();
	
	if (randomNumber > 0.5 || activateCheats) {
		console.log("Heads!");
	} else {
		console.log("Tails!");
	}

});

const buttonTwo = document.getElementById("cheat-button");

buttonTwo.addEventListener("click", () => {
	activateCheats = true;
})