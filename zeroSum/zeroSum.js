/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
function zeroSum(nums) {
var array =[]
	for (var i = 0; i < nums.length; i++) {
		if(nums.filter(function(number) {
  		return number+nums[i] === 0;
		}).length >0){
			return true
		}
	}
	return false
}