var newArr= Numbersonly([1, "apple", -3,"orange", 0.5]);

console.log(newArr);

function Numbersonly(arr){

var myArr=[0];
    for(var i=0;i<arr.length;i++)
    {
        if(typeof arr[i] === "number")
        {
            myArr.push(arr[i]);
        }

    }
    return myArr;

}