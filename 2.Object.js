//creating empty object

//using new Object()
var object1=new Object();

//using object literal
var object2={};

//using Object.create()
var obj3=Object.create(null)

//rfunction constructor
function Person(){	}
var obj4=new Person()



//Adding properties to object 
var obj={
	id:1
};
obj["name"]="Alekya";//oldest way to write a property

obj.city="Vizag";

Object.defineProperty(obj,'state',{
		value:"AP"
})

delete obj.city;

console.log(obj)

/*Modifying object*/

//1.Prevent extensions()->will allow to modify & delete existing property 
					    //but not allow to add a new property

var person1={name:"Alekya",age:'10'}

Object.preventExtensions(person1)

person1.name="Anya"

person1.city="Vizag";

delete person1.age;

//console.log(person1)

//2.seal->will allow to modify existing property 
		//but not allow to add & delte property

var person2={name:"Alekya",age:'10'}

Object.seal(person2)

person2.name="Anya"

person2.city="Vizag";

delete person2.age;

//console.log(person2)

//3.freeze->//can't modify, add or delte property

var person3={name:"Alekya",age:'10'}

Object.freeze(person3)

person3.name="Anya"

person3.city="Vizag";

delete person3.age;

console.log(person3)


/***********Adding properties and methods to object********/


var person={
	firstName:"Alekya", //properties
	lastName:"N",
	location:"vizag",
	pincode:"531001",
	fullName:function(){ //method 
		return this.firstName+""+this.lastName
	}
}

var firstName=person.firstName;

var fullName=person.fullName();
console.log(fullName)
console.log(firstName)

/*******Get keys from an object**********/

var customer={
	name:"vasavi",
	age:25,
	location:"vizag",
	pincode:"531001",
}

var keys=Object.keys(customer)
console.log(keys)

var values=Object.values(customer)
console.log(values)




/*obj={
	state:'AP' //overridding value
}*/



/*var obj1=new Object();
console.log(obj1)

var obj2={}
console.log(obj2)

var obj3=Object.create(null)
console.log(obj3)

function Person(){

}
var obj4=new Person();
console.log(obj4)*/


