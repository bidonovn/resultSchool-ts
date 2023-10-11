interface ITotalPrice {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): void => {
    console.log((price - (price * discount / 100)) / months);
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250