// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var Arrayception = function(array) {
	// body...
	let count = 0;
	//chck the typeof array is array 
	 // if === undefined the loop is finish
	 //if not add 1 to count
	// while(typeof(argument) !== 'undefined'){
	// 	argument = argument[0]
	// 	console.log()

	// }
	function loop(array){
	for (let i=0; i<array.length; i++){
		//type of array is array and have value
      if (Array.isArray(array[i]) && array[i].length > 0 )
        // console.log()
    count++
    loop(array)
	 //if the brevious count typeof == number return count
	 //else return 0
	}
}

loop(array)

return count;
}