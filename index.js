function abrirmenu(){
    let barraMenuAberto = document.getElementById('barra-menu');
    let menuFechado = barraMenuAberto.style.width = "0px";
    let menuAberto = barraMenuAberto.style.width = "300px";

    if (menuFechado){
        menuAberto;
    }else{
        menuFechado;
    }
}
