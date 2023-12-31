var maxLengthBetweenEqualCharacters = function(s) {
    let map = {};
    let dist = -1;
    let arr = s.split('');
    console.log(arr);
    arr.forEach((ch,i,arr) =>{
        if(map[ch] >= 0){
            dist = Math.max(dist, i-map[ch]-1);
            // map[ch] = i;
        }
        else {map[ch] = i;}
    })
    console.log(map);
    return dist;
};

console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"));