function checkPyth(){
    // alert("sve ok"); ovde proveravam da li je fcija povezana ok
    // debugger;
    var inputA = document.getElementById("aSide").value; //zasto je ovde bitno staviti ' a ne "   ???
    // alert(inputA);//provera da li je dobro uhvacen
    if( isNaN(inputA)){
           document.getElementById("aMessage").innerHTML = "unesi broj bre"; //ovo prepravi za kasnije
    }
    var inputB = document.getElementById("bSide").value;
    var inputC = document.getElementById("cSide").value;
    // alert(inputA + ", " + inputB + ", " + inputC); //da bih predstavio tri varijable, svaku odvojenu zarezima
    var result = document.getElementById("result");
    debugger;
    if (inputA*inputA + inputB*inputB === inputC*inputC || inputB*inputB + inputC*inputC === inputA*inputA || inputA*inputA + inputC*inputC === inputB*inputB) {
        result.innerHTML = "jeste pravougli";
    } else {
        result.innerHTML = "nije pravougli";
    }


}
