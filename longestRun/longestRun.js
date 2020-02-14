/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
	var obj = {}
	//count the repeted charachters and asssign it to the object
	string.replace(/(.)\1*/g, function(match, char) {
    return obj[char]=match.length;
})

var arr = Object.keys( obj ).map(function(key) { 
	return obj[key] 
});

var max = Math.max(...arr)
}
=======



>>>>>>> 7358c78edba3c993773b7de22c6cc1c2bb42aaae
