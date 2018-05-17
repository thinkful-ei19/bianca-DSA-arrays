

//URLify a string
//constant time O(1)
function urlify(str){

    const newStr = str.replace(/ /g, "%20");
    return newStr

}
//console.log(urlify('www.thinkful.com /tauh ida parv een'));
//runtime complexity 


//Filtering an array
//linear Time O(n) one loop
function filterArray(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] >= 5){
            newArr.push(arr[i])
        }
        
    }
    return newArr;
}
//console.log(filterArray([2,4,5,2,8,9]))

//Max sum in the array 
//linear time O(n)
function maxSumArray(arr){
    let sum = 0;
    let maxSum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
        if(sum > maxSum){
            maxSum = sum;
        }else if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}
//looping through the array and adding array index to the sum.
//if the sum is greater than max sum it will display it
//kadane algorithium 
//console.log(maxSumArray([4,6,-3,5,-2,1]));

//Merge arrays
function mergeArrays(arr1, arr2){
    let newArr = [];
    newArr.length = arr1.length + arr2.length
    newArr = arr1;
    let printArray = newArr.concat(arr2);
    printArray.sort((a,b) => a-b);
    return printArray;
}
let arr1 = [1,2,3,8,11]
let arr2 = [2,3,5,8,9,10]
//console.log(mergeArrays(arr1, arr2));
//merge sort algorithum

//Remove Characters 
//linear time O(n)
function removeCharacters(str, charactersToBeRemoved){
    let newStr = '';
    let temp = [];
    let vowels = [];
    for(let k = 0; k < charactersToBeRemoved.length; k++){
      vowels.push(charactersToBeRemoved[k]);
        
    }
    for(let i=0; i< str.length; i++){
        if(vowels.indexOf(str[i]) === -1){
            temp.push(str[i]);
        } 
    }
    
    for(let j=0; j<temp.length; j++){
        newStr += temp[j];
    }
    // for(let l=0; l<charArray.length; l++){
    //     if(tempArr.indexOf(charStr))
    // }
        return newStr;

}
//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//Products 

function products(arr){
    let newArr = [1,3,9,4];
    for(let i = 0; i < arr.length; i++){
        arr[]
    }
    return newArr;
}