const Rangee = document.getElementById('spacing')
const blurr =document.getElementById('blur')
const color =document.getElementById('base')


Rangee.addEventListener('change',functionrangee);
color.addEventListener('change',functioncolor);
blurr.addEventListener('change',functionblur);


function functionrangee () {
    let rangeValue = Rangee.value;
    let colorr= color.value;
    const imgg = document.querySelector('img');
    imgg.style.backgroundColor = colorr ;
    imgg.style.padding = rangeValue+"px" ;
    
}
function functioncolor () {
    let rangeValue = Rangee.value;
    let colorr= color.value;
    const imgg = document.querySelector('img');
    imgg.style.backgroundColor = colorr ;
    imgg.style.padding = rangeValue+"px" ;
    let hh1 = document.querySelector('span');
    hh1.style.color = colorr ;

}
function functionblur () {
    let blurValue = blurr.value;
    const imgg = document.querySelector('img');
    imgg.style.filter= "blur("+ blurValue +"px)" ;
}