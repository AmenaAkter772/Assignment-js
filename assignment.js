
// ----feetToMile-----

function feetToMile(feet){
        var mile = feet / 5280;
        return mile;
}
var result = feetToMile(1000);
console.log(result); 


// ----woodCalculator in cubic---

function woodCalculator(chair, table, khat){
    var chairCount = chair * 1 * 1728;
    var tableCount = table * 3 * 1728;
    var khatCount = khat * 5 * 1728;
    var totalFurnichure = chairCount + tableCount + khatCount;
    return totalFurnichure;
}
var furnichureResult = woodCalculator(2, 3, 4);
console.log(furnichureResult);  



   //----- brickCalculator----

   function brickCalculator(bricks){
    if(bricks >= 38000)
    {
        return(1000 * 15);
    }
    else if( bricks <= 16000)
    {
        return((1000 * 12) + 15000);
    }
    else (bricks == 37000)
    {
        return((1000 * 10) + 15000 + 12000);
    }
}
var result = brickCalculator(37000);
console.log(result);



// ----tinyFrient -----

function tinyFriend(array){
    let minEle = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i].length<minEle.length){
          minEle = array[i];
        }
    }
    return minEle;
    }
    var result = tinyFriend(['moni','sarika','onamika','mahejabin','mo','moyna','sonalyborno']);
    console.log(result); 


