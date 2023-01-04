window.onload = function(){
  let clicarMenu = document.getElementById('clicarMenu');
  let menu = document.getElementById('barra-menu');

clicarMenu.addEventListener('click', function(){
  
  if(menu.style.width == "0px"){
    menu.style.width = "350px";
  }else{
     menu.style.width = "0px";
  }

  console.log('funcionou');
})
  
}
