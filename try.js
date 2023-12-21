function lcs(s1, s2, i, j, dp){
    if(i < 0 || j < 0) return 0;
    if(dp[i][j] == -1){
        if(s1.charAt(i) == s2.charAt(j)){
            dp[i][j] = 1 + lcs(s1, s2, i-1, j-1, dp);
        }
        else{
            dp[i][j] = Math.max(lcs(s1,s2, i-1,j,dp), lcs(s1,s2,i,j-1,dp));
        }
    }
    return dp[i][j];
}

var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length, m = text2.length;
    let dp = []
    for (let i = 0 ; i < n ; i++) {
        let arr = [];
        for (let j = 0 ; j < m ; j++) {
            arr.push(-1);
        }
        dp.push(arr);
    }
    console.log(dp);
    return lcs(text1, text2, n - 1, m - 1, dp);
};

console.log(longestCommonSubsequence("abcde","ace"));