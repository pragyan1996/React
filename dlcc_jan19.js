function dfs(nums, i, n, s, target, sum, ans) {
    console.log(i,s,sum, ans,target);
    if (s == 0) {
        let t = Math.abs(target - sum[0]);
        console.log(t);
        if (t <= ans[0]) {
            ans[0] = t;
            ans.push(sum[0]);
        }
        return;
    }
    if (i == n) return;
    sum[0] += nums[i];
    dfs(nums, i + 1, n, s - 1, target, sum, ans);
    sum[0] -= nums[i];
    dfs(nums, i + 1, n, s, target, sum, ans);
    return;
}
var threeSumClosest = function (nums, target) {
    let i = 0, n = nums.length, sum = [0], ans = [Number.MAX_SAFE_INTEGER];
    dfs(nums, i, n, 3, target, sum, ans);
    return ans[1];
};

console.log(threeSumClosest([-1, 2, 1, -4],1));