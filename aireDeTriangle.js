function aireDeTriangle ()
{
   
    let axeA= Number (prompt("entrer l'axe A"));
    let axeC=Number (prompt("entrer l'axe C"));
    alert("calcul de l'aire de triangle:"+axeA * axeC /2);
    console.log("calcul de l'aire de triangle:" +axeA * axeC/2);
    // document.write("calcul de l'aire de triangle:" +axeA * axeC/2);
    let calcul=Number(axeA*axeC/2); 
    
    document.getElementById("resulta").innerText=calcul;
}



