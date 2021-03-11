function solution(n) {
    let arr = [];
    arr.length = n+1;
    arr.fill(true);
    //console.log(arr)
    arr[0] = false;
    arr[1] = false;
    for(let i=2;i<=n;i++){
        if(arr[i] === false){
            continue;
        }
        for(let j=2 ; j<= parseInt(n/i);j++){
            arr[i*j] = false;
        }
    }
    //console.log(arr)
    return arr.filter(Boolean).length
}