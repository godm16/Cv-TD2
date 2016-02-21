

function ChangeText()
{
    alert("le texte change");
    document.getElementById('montext').innerHTML = 'Hello JavaScript!'
}

var ages =  [52, 18, 44];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function Yvan()
{
    var chiffre = parseInt(document.getElementById('monChiffre').value) ;
    alert(chiffre);
    var total = Ajout2(chiffre);
    alert(total);

    document.getElementById('sommes').innerHTML = total;
}

function manger()
{
    var nour = document.getElementById('monChiffre').value;
    alert(nour);
    fruits.push(nour);


    document.getElementById('menu').innerHTML = fruits;
}

function Ajout2(x)
{
  return ages[0] + x + 2;
}
