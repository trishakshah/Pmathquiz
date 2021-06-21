function addUser(){
user1=document.getElementById("input1").value;
user2=document.getElementById("input2").value;
localStorage.setItem("user1",user1);
localStorage.setItem("user2",user2);
}