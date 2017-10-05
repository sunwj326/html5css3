var cartItems = document.querySelectorAll(".cart_item");
var cartCounts = document.querySelectorAll('.cart_col_count_input');
var cartBtnCuts = document.querySelectorAll('.cart_btn_cut');
var cartBtnAdds = document.querySelectorAll('.cart_btn_add');
var cartUnitPrices = document.querySelectorAll('.cart_unit_price');
var cartTotalPrices = document.querySelectorAll('.cart_total_price');
var cartCheckBoxs = document.querySelectorAll('.cart_col_select_checkbox');
var cartSummary = document.querySelector('.cart_summary_price_number');

var cart = new Cart();

document.querySelector('#allcheck').onchange = function(){
    cartCheckBoxs.forEach((elem, index)=>{
        elem.checked = document.querySelector('#allcheck').checked;
        cart.cartItems[index].setValidation(elem.checked);
    });
    cartUpdate();
};

cartItems.forEach((elem, index)=>{
    var unitPrice = cartUnitPrices[index].innerHTML;
    unitPrice = Number.parseInt(unitPrice);
    var item = new CartItem(unitPrice);
    cart.addItem(item);

    cartBtnCuts[index].onclick = function(event){
        item.countDecrease1();
        cartUpdate();
    }

    cartBtnAdds[index].onclick = function(event){
        item.countIncrease1();
        cartUpdate();
    }

    cartCheckBoxs[index].onchange = function(event){
        item.setValidation(cartCheckBoxs[index].checked);
        cartUpdate();
    }

    cartCounts[index].onkeyup = function(event){
        item.setCount(cartCounts[index].value);
        cartUpdate();
    }
});

function cartUpdate(){
    cart.cartItems.forEach((elem, index)=>{
        cartCounts[index].value = elem.getCount();
        cartTotalPrices[index].innerHTML = elem.getTotalPrice();
    });
    cartSummary.innerHTML = cart.getSummary();
}


function CartItem(unitPrice){
    this.validation = false;
    this.setValidation = function(validate){
        this.validation = validate;
    }
    this.getTotalPrice = function(){
        return this._curCount * this.unitPrice;
    };
    this.unitPrice = unitPrice;
    this._curCount = 0;
    this.setCount = function(newCount){
        this._curCount = newCount;
    };
    this.getCount = function(){
        return this._curCount;
    };
    this.countIncrease1 = function(){
        this._curCount ++;
    };
    this.countDecrease1 = function(){
        if(this._curCount > 0){
            this._curCount --;
        }
    };
}

function Cart(){
    this.cartItems = [];

    this.addItem =  function(item){
        this.cartItems.push(item);
    };

    this.getSummary = function(){
        var summary = 0;
        this.cartItems.forEach((elem,index)=>{
            if(elem instanceof CartItem && elem.validation){
                summary += elem.getTotalPrice();
            }
        });
        return summary;
    }
}

// var item1 = new CartItem(3);
// item1.setCount(1.5);
// var item2 = new CartItem(4);
// item2.setCount(3);
// var cart = new Cart();
// cart.addItem(item1);
// cart.addItem(item2);
// console.log(cart.getSummary());