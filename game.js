function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAnswer=parseInt(number1) * parseInt(number2);
    question="<h4>"+number1+"multiplied by"+number2+"is?</h4>"
    inputBox="<br>Answer:<input type='text' id='answerInput' placeholder='Enter your answer here'>";
    checkButton="<br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

questionTurn="player1";
answerTurn="player2";
score1=0;
score2=0;

function check(){
    getAnswer=document.getElementById("answerInput").value;
    if (getAnswer==actualAnswer){
        if (answerTurn=="player1"){
            score1=score1+1;
            document.getElementById("score1").innerHTML=score1;
        }
        else 
        {score2=score2+1;
        document.getElementById("score2").innerHTML=score2;
        }
    }
    if (questionTurn=="player1"){
        questionTurn="player2";
        document.getElementById("playerQ").innerHTML="Question - "+name2;
        answerTurn="player1";
        document.getElementById("playerA").innerHTML="Answer - "+name1;
    }
    else questionTurn="player1";
    document.getElementById("playerQ").innerHTML="Question - "+name1;
    answerTurn="player2";
    document.getElementById("playerA").innerHTML="Answer - "+name2;
}