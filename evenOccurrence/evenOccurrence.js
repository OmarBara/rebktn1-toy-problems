/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = function(array){

var result ;
var count = 0; 
// 
for (var i = 0; i < array.length; i++) { 
    for (var j = i+1; j <array.length; j++){ 
        if (array[i] === array[j]){ 
            count++; 
        }
    } 
        if (count === 2) 
          	 return array[i]; 
} 


// return counts
}