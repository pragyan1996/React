function solve(a, i, n, dp) {
	if (i < n) return 0;
	if (dp[i] == -1) {
		dp[i] = Math.max(solve(a, i - 1,n, dp), a[i] + solve(a, i - 2, n, dp));
	}
	return dp[i];
}
var rob = function (nums) {
	let dp = [], dp2 = [], n = nums.length;
	for (let i in nums) {
		dp.push(-1);
		dp2.push(-1);
	}
	let t1 = solve(nums, n - 1, 1, dp);
	console.log(t1);
	let t2 = solve(nums, n - 2, 0, dp2);
	return Math.max(t1,t2);
};
console.log(rob([2, 3, 2]));