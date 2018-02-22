(() => {
  console.log('icon set js is loaded');

  // varriables always go at the top
  var iconSet = document.querySelectorAll('svg');


  //functions here
  function logThisIcon(){
    console.log('clicked on this icon:' , this.id);
    // change opacity
    this.style.opacity = 0.5;
  }

  function enlargeIcon(e){
    this.style.width = "600px";
    this.style.height = "600px";
    setAttribute("class","enlarged");

  }

  function regSize(e){
    this.style.width = "400px";
    this.style.height = "400px";
    setAttribute("class","normal");
  }


  //event handeling goes at the bottom
  iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));
  iconSet.forEach(icon => icon.addEventListener('mouseover',enlargeIcon));
  iconSet.forEach(icon => icon.addEventListener('mouseout',normalSize));



})();
