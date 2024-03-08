let amount = 5000.0;
let discount = 5.0;
const tax = 50.0;

if (amount > 3500.0) {
    discount = 10.0;

} else if (amount > 2500.0) {
    discount = 7.0
} else {
    discount = 5.0
}
let finalamount = amount - (amount * discount) / 100
console.log(finalamount(3500.0))