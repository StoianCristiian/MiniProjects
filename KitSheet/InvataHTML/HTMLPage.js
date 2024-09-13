const carusel = document.querySelectorAll(".carousel ul li");

let itemIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeCarusel);

function initializeCarusel()
{
  if(carusel.length > 0)
  {
    carusel[itemIndex].classList.add("displayItem");
    intervalId = setInterval(NextItem(), 5000);
  }
}

function showItem(index)
{
  if(index >= carusel.length)
    itemIndex = 0;
  else if(index <= 0)
    itemIndex = carusel.length-1;
  carusel.forEach(listitem => {
    listitem.classList.remove("displayItem");
  })
  carusel[itemIndex].classList.add("displayItem");
}

function NextItem() {
  console.log("da");
  itemIndex++;
  showItem(itemIndex);
}