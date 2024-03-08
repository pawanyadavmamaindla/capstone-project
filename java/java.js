function cartTotal() {
    let totalAmount = 0;

    return function (price) {
        totalAmount += price;
        return totalAmount;
    };
}

const mycart = cartTotal() ;

console.log(mycart(200));
console.log(mycart(600));
console.log(mycart(700));