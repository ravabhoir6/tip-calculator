// script.js


function calculateTip(){

// storing the data inputs
const billAmount = document.querySelector("#billAmount").value;
const serviceQuality = document.querySelector("#serviceQuality").value;
const numPeople = document.querySelector("#totalPeople").value;

    //Quick Validation
    if(billAmount === "" || serviceQuality == 0){
        return window.alert("Youe needd input the values to get this calculator running")
    };

    // check to see if this input is empty or lees than 1 
    if(numPeople == 0 || numPeople <= 0){
        numPeople = 1;
        document.querySelector("#each").style.display = "none";

    }else{
        document.querySelector("#each").style.display = "block";
    }

    // lets do some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display Tip
    document.querySelector("#totalTip").style.display = "block";
    document.querySelector("#tip").innerHTML = total; 

}


// Hiding the tip amount at the bottom
document.querySelector("#totalTip").style.display = "none";
document.querySelector("#each").style.display = "none";

// running the function
document.querySelector("#calculate").onclick = function(){calculateTip();}








