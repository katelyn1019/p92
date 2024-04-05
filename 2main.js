var n1 = localStorage.getItem("name1");
document.getElementById("name1").innerHTML=n1;
var n2 = localStorage.getItem("name2");
document.getElementById("name2").innerHTML=n2;
document.getElementById("questionturn").innerHTML=n1;
document.getElementById("answerturn").innerHTML=n2;
var score1 = 0;
document.getElementById("name1score").innerHTML="  :  " + score1;
var score2 = 0;
document.getElementById("name2score").innerHTML="  :  " + score2 ;
var questionturn = "player1";
var answerturn = "player2";


function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answerturn == "player1") {
            update_player1_score = score1 + 1;
            document.getElementById("name1score").innerHTML = update_player1_score;
            
        }
        else{
            update_player2_score = score2 + 1;
            document.getElementById("name2score").innerHTML = update_player2_score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2"
        document.getElementById("questionturn").innerHTML = n2;
    }
    else{
        questionturn = "player1"
        document.getElementById("questionturn").innerHTML = n1;
    }
    }