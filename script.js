


// this is the romove button :)


var removeItemButtons = document.getElementsByClassName('delete')
for(var i = 0; i < removeItemButtons.length; i++){
    var button = removeItemButtons[i]
    button.addEventListener('click',function(){
        
        this.parentNode.remove()  
         
    })
}






// this is the like button ;)


var like1Buttons = document.getElementsByClassName('like1')
for( i = 0; i < like1Buttons.length; i++){
    var like1 = like1Buttons[i] ;
    like1.addEventListener('click',function(){
      if(like1.style.color ==='red'){
          like1.style.color='black';
      }
      else{
            like1.style.color ='red';
      }   
    })
}
var like2Buttons = document.getElementsByClassName('like2')
for( i = 0; i < like2Buttons.length; i++){
    var like2 = like2Buttons[i] ;
    like2.addEventListener('click',function(){
      if(like2.style.color ==='red'){
          like2.style.color='black';
      }
      else{
            like2.style.color ='red';
      }   
    })
}
var like3Buttons = document.getElementsByClassName('like3')
for( i = 0; i < like3Buttons.length; i++){
    var like3 = like3Buttons[i] ;
    like3.addEventListener('click',function(){
      if(like3.style.color ==='red'){
          like3.style.color='black';
      }
      else{
            like3.style.color ='red';
      }   
    })
}






// this is the plus/minus button :)



    var plusButtons = document.getElementsByClassName('plus-btn')
    for(let i = 0; i < plusButtons.length; i++){
let add=plusButtons[i]
    add.addEventListener('click', function(){
        add.previousElementSibling.value ++; 
        totalprice()
        itemprice1()
        itemprice2()
        itemprice3()
    }
    )
    
        
    }
    
    var minusButtons = document.getElementsByClassName('minus-btn')
    for(let i=0 ; i< minusButtons.length; i++){
        let minus=minusButtons[i]
        minus.addEventListener('click', function(){

            if (minus.nextElementSibling.value >0){
             minus.nextElementSibling.value --  
             totalprice()
             itemprice1()
             itemprice2()
             itemprice3()

        }
        
             }
         ) }
// price1
function itemprice1(){
let quantity1=document.getElementById("qty1")
let price1=document.getElementById("prix1")
price1.innerHTML=1379.00 * quantity1.value}
// price2
function itemprice1(){
    let quantity2=document.getElementById("qty2")
    let price2=document.getElementById("prix2")
    price2.innerHTML=176.00 * quantity2.value}
// price3
    function itemprice3(){
    let quantity3=document.getElementById("qty3")
    let price3=document.getElementById("prix3")
    price3.innerHTML=249.00 * quantity3.value}


// this is the total :/ 



         function totalprice() {
            var items = document.getElementsByClassName('Item')
            var total = 0
            for (let i = 0 ; i < items.length ; i++) {
                var Price = items[i].querySelector('.price')
                var quantity = items[i].querySelector('.Quant')
                total += Price.innerHTML*quantity.value
            }
            document.getElementById('finalPrice').value = total }