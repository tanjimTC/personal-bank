document.getElementById("login").addEventListener("click", () => {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction").style.display = "block";
});


//deposit button handler
document.getElementById("deposit").addEventListener("click", () => {
  let depositNumber = getAmount("depositAmount");
  updateField("currentdepositNumber", depositNumber);
  document.getElementById("depositAmount").value = "";
  updateField("balance", depositNumber);
});



//withdraw button handler
document.getElementById("withdraw").addEventListener("click", () => {
  let withdrawNumber = getAmount("WithdrawAmount");
  updateField("currentwithdraw", withdrawNumber);
  document.getElementById("WithdrawAmount").value = "";
  updateField("balance", -1* withdrawNumber);
});


function getAmount(id) {
  let amount = document.getElementById(id).value;
  let amountNumber = parseFloat(amount);
  return amountNumber;
}

//deposit adding
function updateField(id, lastNumber) {
  let balance = document.getElementById(id).innerText;
  let balanceFloat = parseFloat(balance);
  let newBalance = balanceFloat + lastNumber;
  document.getElementById(id).innerText = newBalance;
}