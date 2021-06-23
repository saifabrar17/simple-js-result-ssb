function total(){
    var english = parseInt(document.getElementById("eng").value);
    var bangla = parseInt(document.getElementById("bng").value);
    var physics = parseInt(document.getElementById("phy").value);
    var math = parseInt(document.getElementById("math").value);

    if(english>100 || bangla>100 || physics>100 || math>100){
        alert("Please enter a valid mark!");
    }else{
        var total = english + bangla + physics + math;
        document.getElementById("total").innerHTML="Your total mark is : " + total;
    }
}

function average(){
    var english = parseInt(document.getElementById("eng").value);
    var bangla = parseInt(document.getElementById("bng").value);
    var physics = parseInt(document.getElementById("phy").value);
    var math = parseInt(document.getElementById("math").value);

    if(english>100 || bangla>100 || physics>100 || math>100){
        alert("Please enter a valid mark!");
    }else{
        var total = english + bangla + physics + math;
        var avg = total/4;
        document.getElementById("average").innerHTML="Your average mark is : " + avg;
    }

}
function grade(){
    var english = parseInt(document.getElementById("eng").value);
    var bangla = parseInt(document.getElementById("bng").value);
    var physics = parseInt(document.getElementById("phy").value);
    var math = parseInt(document.getElementById("math").value);

    if(english>100 || bangla>100 || physics>100 || math>100){
        alert("Please enter a valid mark!");
    }
    else{
        var total = english + bangla + physics + math;
        var avg = total/4;
        if(english<33 || bangla<33 || math<33 || physics<33){
            document.getElementById("grade").innerHTML="Failed!";
        }else if(avg>=80 && avg<=100){
            document.getElementById("grade").innerHTML="Your Grade Is A+";
        }else if(avg>=70 && avg<=79){
            document.getElementById("grade").innerHTML="Your Grade Is A";
        }else if(avg>=60 && avg<=69){
            document.getElementById("grade").innerHTML="Your Grade Is A-";
        }else if(avg>=50 && avg<=59){
            document.getElementById("grade").innerHTML="Your Grade Is B";
        }else if(avg>=40 && avg<=49){
            document.getElementById("grade").innerHTML="Your Grade Is C";
        }else if(avg>=33 && avg<=39){
            document.getElementById("grade").innerHTML="Your Grade Is D";
        }else{
            document.getElementById("grade").innerHTML="Failed You Fool!";
        }
    }
}
