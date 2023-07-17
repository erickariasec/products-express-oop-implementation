const {
  Product,
  FixedPriceProduct,
  VariablePriceProduct,
  CompositePriceProduct,
} = require("../models/product.model");

class ProductService {
  constructor() {}

  getFixedPriceProducts() {
    const products = [
      new FixedPriceProduct("Coca Cola", 1.75),
      new FixedPriceProduct("Leche", 1.2),
      new FixedPriceProduct("Pan", 0.18),
    ];

    return products;
  }

  getVariablePriceProducts() {
    const productsData = [
      { name: "Carne", measure: "libra", price: 3.5, quantity: 2 },
      { name: "Frutas", measure: "kilo", price: 1.25, quantity: 1.5 },
      { name: "Alambre", measure: "metro", price: 5.5, quantity: 3 },
    ];

    const products = productsData.map(({ name, measure, price, quantity }) => {
      const product = new VariablePriceProduct(name, measure, price, quantity);
      return {
        name: product.name,
        unitPrice: product.price,
        measure: product.measure,
        quantity: product.quantity,
        totalPrice: product.totalPrice,
      };
    });

    return products;
  }

  getCompositePriceProducts() {
    const products1 = [
      new FixedPriceProduct("Coca Cola", 1.75),
      new VariablePriceProduct("Carne", "libra", 3.5, 2),
    ];

    const products2 = [
      new FixedPriceProduct("Leche", 1.1),
      new VariablePriceProduct("Frutas", "kilo", 2.5, 4),
      new VariablePriceProduct("Pan", "unidad", 1, 3),
    ];

    const compositeProduct1 = new CompositePriceProduct(
      "Combo 1 - Almuerzo: Carne, Coca Cola",
      products1,
      0.5
    );
    const compositeProduct2 = new CompositePriceProduct(
      "Combo 2 - Desayuno: Leche, Frutas, Pan",
      products2,
      1.2
    );

    const compositeProducts = [compositeProduct1, compositeProduct2].map(
      (compositeProduct) => {
        const products = compositeProduct.products.map((product) => {
          if (product instanceof FixedPriceProduct) {
            return {
              name: product.name,
              unitPrice: product.price,
            };
          } else if (product instanceof VariablePriceProduct) {
            return {
              name: product.name,
              unitPrice: product.price,
              measure: product.measure,
              quantity: product.quantity,
              totalPrice: product.totalPrice,
            };
          }
        });

        const totalPrice = products.reduce((total, product) => {
          if (product.totalPrice) {
            return total + product.totalPrice;
          } else {
            return total + product.unitPrice;
          }
        }, 0);

        return {
          name: compositeProduct.name,
          products,
          priceWithOutDiscount: totalPrice,
          discount: compositeProduct.discount,
          totalPrice: totalPrice - compositeProduct.discount,
        };
      }
    );

    return compositeProducts;
  }
}

module.exports = ProductService;
