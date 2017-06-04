var obj="Hello World";
var newObj='';
function reverse(obj){
	for(var i=obj.length-1; i>=0; i--){
		newObj+=obj[i];
		console.log(newObj)
		return newObj;
	}
}

