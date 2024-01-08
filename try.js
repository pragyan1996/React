function check(a, i, j) {
    let d = a[i] - a[i + 1];
    for (let s = i + 1; s <= j; s++) {
        if (d != a[s - 1] - a[s]) return false;
    }
    return true;
}
function solve(a, i, n, d, cd) {
    if (i == n) {
        if (d.length < 3) return 0;
        if (check(d, 0, d.length - 1)) return 1;
        else return 0;
    }
    let ans = 0;
    if (d.length > 1) {
        cd = d[1] - d[0];
        // console.log(d, i, cd, cd == a[i] - d[d.length - 1]);
        if (cd == a[i] - d[d.length - 1]) {
            d.push(a[i]);
            console.log(d);
            ans += solve(a, i + 1, n, d, cd);
            d.pop();
        }
    }
    else {
        d.push(a[i]);
        cd = d[1] - d[0]
        ans += solve(a, i + 1, n, d, cd)
        d.pop();
    }


    ans += solve(a, i + 1, n, d);
    return ans;
}
var numberOfArithmeticSlices = function (nums) {
    // let set = new Set(nums);
    // if ([...set].length == 1) return Math.pow(2, nums.length);
    // let ans = solve(nums, 0, nums.length, [], null);
    // return ans;

    let dp = []; 
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        dp.push({});
    }
    let ans = 0;
    for (let i = 1; i < n; i++) {
        let diff;
        for (let j = 0; j < i; j++) {
            diff = nums[i] - nums[j];
            if (!dp[i][diff]) dp[i][diff] = 0;
            dp[i][diff] += 1 + (dp[j][diff] ? dp[j][diff] : 0);
            ans += 1 + (dp[j][diff] ? dp[j][diff] : 0);
        }
        
    }
    return ans - Math.floor((n * (n - 1)) / 2);
};

console.log(numberOfArithmeticSlices([7, 7, 7, 7, 7]));