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