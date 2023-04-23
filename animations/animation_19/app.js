var bottomBar = document.querySelector(".bottom-bar");
var content = document.querySelector(".content");
var collapsed = true;
switchSize = () => {
  if( collapsed ){
    content.classList.remove("collapsed");
    content.classList.add("expanded");
  }else{
    content.classList.remove("expanded");
    content.classList.add("collapsed");
  }
  collapsed = !collapsed;
}

bottomBar.addEventListener("click", switchSize)