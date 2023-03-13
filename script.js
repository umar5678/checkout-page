const shippingFee = document.querySelector('#shipping-fee')
const grandTotal = document.querySelector('#total-price')
const price = document.querySelectorAll('#price')
const decrementBtn = document.querySelectorAll('#decrement')
const quantityElem = document.querySelectorAll('#quantity')
const incrementBtn = document.querySelectorAll('#increment')

var shiippingFeeAmount = Number(shippingFee.textContent.replace('$', ''))

for( i = 0; i < incrementBtn.length; i++){
    incrementBtn[i].addEventListener('click', function(){
        let increment = parseFloat(this.previousElementSibling.textContent)
        increment++
        this.previousElementSibling.textContent = increment
        calcTotal()
    })
    decrementBtn[i].addEventListener('click', function(){
        let decrement = parseFloat(this.nextElementSibling.textContent)
        decrement <= 1 ? 1 : decrement--
        this.nextElementSibling.textContent = decrement
        calcTotal()
    })
}

// for( j = 0; j < decrementBtn.length; j++){
//    decrementBtn[j].addEventListener('click', function(){
//         let decrement = parseFloat(this.nextElementSibling.textContent)
//         decrement <= 1 ? 1 : decrement--
//         this.nextElementSibling.textContent = decrement
// })

function calcTotal(){
    let total = 0
    let subTotal = 0
    for(i = 0; i < quantityElem.length; i++){
      subTotal += Number(quantityElem[i].textContent) * Number(price[i].textContent)
    }
    // console.log(subTotal)
    total = (subTotal + shiippingFeeAmount).toFixed(2)
    grandTotal.textContent ="$" + total
 }
 calcTotal()

//  alert('good morning')