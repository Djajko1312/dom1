//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#7C1AC9";
    }
    else listItems[i].style.backgroundColor = "#200E6F";
}


//console.log(document.getElementsByClassName("title"))

let title = document.getElementsByClassName("title");

console.log(title)

console.dir(title[1])

title[1].textContent = "Nesto"

listItems[3].textContent = "cetvrrti"
listItems[3].style.backgroundColor = "red"

document.querySelector("#random-elemnt p").style.backgroundColor = "red"


console.log(document.querySelectorAll("list-item"))