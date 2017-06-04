var person1={name:"ByreGowda",age:10}
var person2={name:"Anjali",age:15}

function sayHello(message,wish){
	return message +" "+this.name+" "+this.age + wish;
}

var msg1=sayHello.bind(person1);
console.log(msg1("Hi"))

var msg2=sayHello.bind(person2);
console.log(msg2("Hello"))

var msg3=sayHello.call(person2,"Hello","Hi...");
console.log(msg3)

var msg4=sayHello.apply(person2,["Hello","Hi..."]);
console.log(msg4)