// logical and (&&)

var gotJob = true;
var moneysaved = 250000;
if(gotJob == true && moneysaved > 300000){
    console.log("yehh. i'm prepared for marriage")
}
else{
    console.log("i'm not prepared")
}


// logical or (||)

var haveFlat = true;
var haveMoney =  200000;
var passHonours = false;
if(haveFlat == true || haveMoney > 300000 && passHonours == true){
    console.log("everything is ok for my marriage")
}
else{
    console.log("nothing is ready")
}