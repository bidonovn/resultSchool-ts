var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    console.log((price - (price * discount / 100)) / months);
};
totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250
