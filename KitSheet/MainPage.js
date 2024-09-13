const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

//initializeSlide();
document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide()
{
  if(slides.length > 0)
  {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(NextSlide, 5000);
  }
}

function ShowSlide(index)
{
  if(index >= slides.length)
  {
    slideIndex = 0;
  }
  else if(index < 0)
  {
    slideIndex = slides.length-1;
  }
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  })
  slides[slideIndex].classList.add("displaySlide");
}

function NextSlide()
{
  slideIndex++;
  ShowSlide(slideIndex);
}

function PrevSlide()
{
  clearInterval(intervalId);
  slideIndex--;
  ShowSlide(slideIndex);
}