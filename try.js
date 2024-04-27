/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const dfs = function (s, i, n, k, dp, ans) {
	if (i == n) {
		ans[0] = Math.max(dp.length, ans[0]);
		return;
	}

	if (dp.length && dp[dp.length - 1].charCodeAt(0) - s.charCodeAt(i) <= k || dp.length == 0) {
		dp.push(s[i]);
	}
	dfs(s, i + 1, n, k, dp, ans);
	dp.pop();
	dfs(s, i + 1, n, k, dp, ans);
	return;
}
var longestIdealString = function (s, k) {
	let dp = [];
	let ans = [0];
	dfs(s, 0, s.length, k, dp, ans);
	console.log(dp,ans);
	return ans[0];
};

console.log(longestIdealString("lkpkxcigcs",6));