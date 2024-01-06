function jobScheduling(s, e, p) {
    const n = s.length;
    const st = Array.from({ length: n }, (_, i) => ({ start: s[i], index: i }));
    st.sort((a, b) => a.start - b.start);
    const dp = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const nextCompatibleIndex = st.findIndex((job, j) => job.start >= e[st[i].index] && j > i);
        dp[i] = Math.max(dp[i + 1], p[st[i].index] + (nextCompatibleIndex >= 0 ? dp[nextCompatibleIndex] : 0));
    }
    console.log(dp[0]);
    return dp[0];
}

jobScheduling([1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60])

