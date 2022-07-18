let Money = 500;
let RockWaarde = 1;
document.getElementById("MoneyAmmount").innerText = Money;

document.getElementById("RockImage").addEventListener("click", Click);

function Click(){
    ZoekWaarde(document.getElementById("RockType").innerText)
    Money = Money + RockWaarde ;
    document.getElementById("MoneyAmmount").innerText = Money;
}
function ZoekWaarde(stoneType){
    switch (stoneType){
        case "Normal Rock":
            RockWaarde = 1
            break;
        case Rocks[0].Name:
            RockWaarde = Rocks[0].Waarde
            break;
        case Rocks[1].Name:
            RockWaarde = Rocks[1].Waarde
            break;
        case Rocks[2].Name:
            RockWaarde = Rocks[2].Waarde
            break;
        case Rocks[3].Name:
            RockWaarde = Rocks[3].Waarde
            break;
        case Rocks[4].Name:
            RockWaarde = Rocks[4].Waarde
            break;
        case Rocks[5].Name:
            RockWaarde = Rocks[5].Waarde
            break;
        case Rocks[6].Name:
            RockWaarde = Rocks[6].Waarde
            break;
        case Rocks[7].Name:
            RockWaarde = Rocks[7].Waarde
            break;
        case Rocks[8].Name:
            RockWaarde = Rocks[8].Waarde
            break;
        case Rocks[9].Name:
            RockWaarde = Rocks[9].Waarde
            break;


    }
}

const Tab1btn = document.getElementById("Tab1btn");
const Tab2btn = document.getElementById("Tab2btn");
const Tab3btn = document.getElementById("Tab3btn");
const Tab1 = document.getElementById("Tab1");
const Tab2 = document.getElementById("Tab2");
const Tab3 = document.getElementById("Tab3");

Tab2.style.display = "none";
Tab3.style.display = "none";

Tab1btn.addEventListener("click", function (){
    Tab1.style.display = "block";
    Tab2.style.display = "none";
    Tab3.style.display = "none";
})
Tab2btn.addEventListener("click", function (){
    Tab1.style.display = "none";
    Tab2.style.display = "block";
    Tab3.style.display = "none";
})
Tab3btn.addEventListener("click", function (){
    Tab1.style.display = "none";
    Tab2.style.display = "none";
    Tab3.style.display = "block";
})

//Rocks Tab
const Rocks = [
    {
        Name: `Amazoniet`,
        description: ``,
        Price: 100,
        Waarde: 5,
    },
    {
        Name: `Rhodoniet`,
        description: ``,
        Price: 150,
        Waarde: 10,
    },
    {
        Name: `Chalcedoon`,
        description: ``,
        Price: 500,
        Waarde: 15,
    },
    {
        Name: `Labradoriet`,
        description: ``,
        Price: 1500,
        Waarde: 20,
    },
    {
        Name: `Kunziet`,
        description: ``,
        Price: 2500,
        Waarde: 25,
    },
    {
        Name: `Apatiet`,
        description: ``,
        Price: 5000,
        Waarde: 30,
    },
    {
        Name: `Aventurijn`,
        description: ``,
        Price: 7500,
        Waarde: 35,
    },
    {
        Name: `Andes Opaal`,
        description: ``,
        Price: 12500,
        Waarde: 40,
    },
    {
        Name: `Agaat`,
        description: ``,
        Price: 20000,
        Waarde: 45,
    },
    {
        Name: `Onyx`,
        description: ``,
        Price: 50000,
        Waarde: 50,
    }
]
for (let i = 0; i < Rocks.length; i++){
    const Rock = document.createElement("div")
    Rock.className = "Item"
    Rock.id = Rocks[i].Name
    Rock.innerHTML = `<h2>${Rocks[i].Name}</h2><p>Description</p><p>Price: ${Rocks[i].Price}</p>`
    Rock.addEventListener("click", function (){BuyRock(Rocks[i].Name)})
    document.getElementById("RockItem").appendChild(Rock);
}
function BuyRock(stoneType){
    switch(stoneType) {
        case Rocks[0].Name:
            if(Money >= Rocks[0].Price){
                Money = Money - Rocks[0].Price
                document.getElementById("RockType").innerText = Rocks[0].Name
                document.getElementById(Rocks[0].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[1].Name:
            if(Money >= Rocks[1].Price){
                Money = Money - Rocks[1].Price
                document.getElementById("RockType").innerText = Rocks[1].Name
                document.getElementById(Rocks[1].Name).remove()            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[2].Name:
            if(Money >= Rocks[2].Price){
                Money = Money - Rocks[2].Price
                document.getElementById("RockType").innerText = Rocks[2].Name
                document.getElementById(Rocks[2].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[3].Name:
            if(Money >= Rocks[3].Price){
                Money = Money - Rocks[3].Price
                document.getElementById("RockType").innerText = Rocks[3].Name
                document.getElementById(Rocks[3].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[4].Name:
            if(Money >= Rocks[4].Price){
                Money = Money - Rocks[4].Price
                document.getElementById("RockType").innerText = Rocks[4].Name
                document.getElementById(Rocks[4].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[5].Name:
            if(Money >= Rocks[5].Price){
                Money = Money - Rocks[5].Price
                document.getElementById("RockType").innerText = Rocks[5].Name
                document.getElementById(Rocks[5].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[6].Name:
            if(Money >= Rocks[6].Price){
                Money = Money - Rocks[6].Price
                document.getElementById("RockType").innerText = Rocks[6].Name
                document.getElementById(Rocks[6].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[7].Name:
            if(Money >= Rocks[7].Price){
                Money = Money - Rocks[7].Price
                document.getElementById("RockType").innerText = Rocks[7].Name
                document.getElementById(Rocks[7].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[8].Name:
            if(Money >= Rocks[8].Price){
                Money = Money - Rocks[8].Price
                document.getElementById("RockType").innerText = Rocks[8].Name
                document.getElementById(Rocks[8].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
        case Rocks[9].Name:
            if(Money >= Rocks[9].Price){
                Money = Money - Rocks[9].Price
                document.getElementById("RockType").innerText = Rocks[9].Name
                document.getElementById(Rocks[9].Name).remove()
            }
            else{
                alert("Not enough Money")
            }
            break;
    }
    document.getElementById("MoneyAmmount").innerText = Money;
}



