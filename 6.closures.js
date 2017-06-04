function sayHello(message){
	return function(firstName,lastName){
			return message +" "+firstName +" "+lastName;
	}
}

var sendWish=sayHello("Good Eve :)");
console.log(sendWish("Alekya","N"));