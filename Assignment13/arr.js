function printreverse(arr){
	for(var i=arr.length-1;i>=0;i--){
		console.log(arr[i]);
	}
}
console.log("Print Reverse Function ");
printreverse([1,2,3,4,5]);
function isuniform(arr){
	var res=arr[0];
	for(var i=0;i<arr.length;i++){
		if(res!==arr[i]){
			return false;
		}

	}
	return true;
}
console.log("Is uniform Function");
console.log(isuniform([1,1,1,1,1,1,1]));
var sumval=0;
function sum(arr){
	for(var i=0;i<arr.length;i++){
	sumval+=arr[i];
}
}
console.log("Sum of the values of the array");
sum([2,4,5,6,7,8,9]);
console.log(sumval);
console.log("Maximum value of the array");
function max(arr){
	var max_val=arr[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>max_val){
			max_val=arr[i];
		}
	}
	return max_val;
}

console.log(max([45,76,2,34,89]));