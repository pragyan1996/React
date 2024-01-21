function solve(a, i, dp) {
	if (i < 0) return 0;
	if (dp[i] == -1) {
		dp[i] = Math.max(solve(a, i - 1, dp), a[i] + solve(a, i - 2, dp));
	}
	return dp[i];
}
var rob = function (nums) {
	let dp = [];
	for (let i in nums) {
		dp.push(-1);
	}
	console.log(dp);
	return solve(nums, nums.length - 1, dp);
};

console.log(rob([1, 2, 3, 1]));