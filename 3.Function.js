/******* Creating function*******/

	/*SLEF invoking function*/
(function(message){
	console.log("Hello?????????????"+message)
})("Good EVE")

//Regular function

function sample(){
	return "Hello World.."
}

var message=sample();
console.log(message)

//Anonymous function
var hi=function(){
	console.log("Hi....!!!!")
	return "Hi,Hello..."
}

console.log(hi())

/****Constructor Function****/

function Person(firstName,lastName){//name starts with capital letter
	this.firstName=firstName;
	this.lastName=lastName;

	/*this.fullName=function(){
		return this.firstName+" "+this.lastName;
	}*/
}

Person.prototype.fullName=function(){
	return this.firstName+" "+this.lastName;
}
var newPerson1=new Person("Alekya","N");
var newPerson2=new Person("Anya","B");
var newPerson3=new Person("Anajali","B");
console.log(newPerson1.fullName())
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())



