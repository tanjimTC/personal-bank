document.getElementById("login").addEventListener("click",()=>{
    document.getElementById("login-area").style.display="none";
    document.getElementById("transaction").style.display = "block";
});

document.getElementById("deposit").addEventListener("click",()=>{
    var depositAmount=document.getElementById("depositAmount").value;
    let depositNumber = parseFloat(depositAmount);


    // let currentDepositAmount =document.getElementById("currentdepositNumber").innerText;
    // let finalDepositAmount2 = parseFloat(currentDepositAmount);
    // let finalDepositAmount = depositNumber + finalDepositAmount2;
    // document.getElementById("currentdepositNumber").innerText =finalDepositAmount;


    updateField("currentdepositNumber",depositNumber);

    document.getElementById("depositAmount").value ="";

    updateField("balance",depositNumber);
    
});
 function updateField (id, lastNumber){
    let balance = document.getElementById(id).innerText;
    let balanceFloat = parseFloat(balance);
    let newBalance = balanceFloat+lastNumber;
    document.getElementById(id).innerText = newBalance;
 }