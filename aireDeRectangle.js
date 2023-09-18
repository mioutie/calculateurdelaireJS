function aireDeRectangle()
{
  let longueur= Number (prompt("entrer la longueur"));
  let largeur = Number (prompt("entrer la largeur"));
  
  console.log ("calcule du rectangle est :"+ longueur*largeur)
  let sol= Number(longueur*largeur)
  document.getElementById("total").innerText=sol;

}