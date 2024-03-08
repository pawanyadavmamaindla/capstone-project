function groupArrayElement(inputArr, n) {
    const result = [];
    if (n <= 0 || !Number.isInteger) {
        return result;
    }
    const len = Math.floor(inputArr.length /n);
    let start = 0;
    let end = len;

    for(let i = 0; i < n; i++){
        if (i == n-1) {
            result.push(inputArr.slice(start))
        } else {
            result.push(inputArr.slice(start,end))
        }
        start = end;
        end +=  len;
    }
}
let arr = [1,2,3,4,5,6];
let num = 2;
const Response =
console.log(groupArrayElement([1,2,3,4,5,6])) 