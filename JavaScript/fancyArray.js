var arr=["James", "Jill","Jane","Jack"];
var symbols="==>";
var reversed = true;
fancyArray(arr,symbols);

function fancyArray(arr, symbols)
{

    for(var i=0;i<arr.length;i++)
    {
        console.log(i, symbols,arr[i]);
    }
    if (reversed)
    {
        console.log("*****************************");
        console.log("Reversed: ");
        console.log("*****************************");

        for(var i=arr.length-1; i>=0;i--)
        {
            console.log(i, symbols,arr[i]);
        }
    }


}