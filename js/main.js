function checkPyth(){
    // debugger;
    var inputA = document.getElementById("aSide").value;

    if( isNaN(inputA)){
           document.getElementById("aMessage").innerHTML = "Please enter a numeric value";
    }
    var inputB = document.getElementById("bSide").value;
    var inputC = document.getElementById("cSide").value;
    var result = document.getElementById("result");
    debugger;
    if (inputA*inputA + inputB*inputB === inputC*inputC || inputB*inputB + inputC*inputC === inputA*inputA || inputA*inputA + inputC*inputC === inputB*inputB) {
        result.innerHTML = "Triangle with this sides is a right trinagle";
    } else {
        result.innerHTML = "Triangle with this sides is NOT a right trinagle";
    }


}
