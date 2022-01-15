// const precioOriginal = 120;
// const descuento = 18;
//  const coupons = [
//      "Cupon_suscripción",
//      "Cupon_cliente_frecuente",
//      "Cupon_fin_de_año"
//  ]
 const coupons = [
     {
         name:  "Cupon_suscripción",
         discount: 15,
     },
     {
        name:  "Cupon_cliente_frecuente",
        discount: 30,
    },
    {
        name: "Cupon_fin_de_año",
        discount: 25,
    },

 ];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;



    //let descuento;

    // switch(couponValue) {
    //     case coupons[0]:
    //         descuento = 15;
    //     break;
    //     case coupons[1]:
    //         descuento = 30;
    //     break;
    //     case coupons[2]:
    //         descuento = 25;
    //     break; 
    // }

    // if(!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    // } else if (couponValue === "Cupon_suscripción") {
    //     descuento = 15;
    // } else if (couponValue === "Cupon_cliente_frecuente") {
    //     descuento = 30;
    // } else if (couponValue === "Cupon_fin_de_año") {
    //     descuento = 25;
    // }


    const isCouponValeValid = function(coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValeValid);

    if(!userCoupon) {
        alert("El cupón " + userCoupon + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");

        resultP.innerText = "El precio con descuento son $" +  precioConDescuento;
    }

    
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });