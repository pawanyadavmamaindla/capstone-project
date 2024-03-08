var sentinel = {
    name: 'sentinel Design\u{2122}',
    employeeCount: 50,
    city: 'tokyo',
    country: 'Japan',
    isListed: false,
};

console.log(sentinel.name);

var propName = 'employeeCount';
console.log(sentinel[propName]);

sentinel.stockSymbol = 'SDJ';
sentinel.isListed = true;
sentinel.country = 'US'
delete sentinel.city;

var currencies = new Object();
currencies['japan'] = 'yen';
currencies['US'] = 'US Dollar';

console.log(`the currency of ${sentinel.country} is ${currencies[sentinel.country]}`)