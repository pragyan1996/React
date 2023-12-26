let str = "10010100"

let n = str.length;
let str1 = '', str2 = '';
let cnt1 = 0 , cnt2 = 0;
for(let i = 0 ; i < n ; i ++){
    str1 = i%2 == 0 ? '0' : 1;
    str2 = i%2 == 1 ? '0' : 1;
    if(str1 != str.charAt(i)) cnt1++;
    if(str2 != str.charAt(i)) cnt2++;
}


console.log(str, Math.min(cnt1, cnt2));