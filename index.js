function addNumber(num) {
    document.getElementById("results").value += num;
  }
  
  function decimal() {
    document.getElementById("results").value += ".";
  }
  
  function clearResults() {
    document.getElementById("results").value = "";
  }
  
  function addition() {
    document.getElementById("results").value += "+";
  }
  
  function subtraction() {
    document.getElementById("results").value += "-";
  }
  
  function multiplication() {
    document.getElementById("results").value += "*";
  }
  
  function division() {
    document.getElementById("results").value += "/";
  }
  
  function squareRoot() {
    document.getElementById("results").value = Math.sqrt(document.getElementById("results").value);
  }
  
  function signChange(){
    document.getElementById("results").value = eval(document.getElementById("results").value* -1);
  }
  
  function equals() {
    document.getElementById("results").value = eval(document.getElementById("results").value);
  }
  
  function deleteLast() {
    var current=document.getElementById("results").value;
    document.getElementById("results").value = current.substring(0, current.length-1);
  }