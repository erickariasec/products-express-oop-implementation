class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class FixedPriceProduct extends Product {
  constructor(name, price) {
    super(name, price);
  }
}

// class VariablePriceProduct extends Product {
//   constructor(name, measure) {
//     super(name, 0);
//     this.measure = measure;
//   }

//   setPrice(price) {
//     this.price = price;
//   }
// }

// class VariablePriceProduct extends Product {
//   constructor(name, measure, quantity) {
//     super(name, 0); // El precio se determinará después
//     this.measure = measure;
//     this.quantity = quantity;
//   }

//   calculatePrice() {
//     this.price = this.quantity * this.price;
//   }
// }

// class VariablePriceProduct extends Product {
//   constructor(name, measure, quantity) {
//     super(name, 0); // El precio se determinará después
//     this.measure = measure;
//     this.quantity = quantity;
//   }

//   setPrice(price) {
//     this.price = price;
//   }

//   calculatePrice() {
//     this.price = this.quantity * this.price;
//   }
// }

class VariablePriceProduct extends Product {
  constructor(name, measure, price, quantity) {
    super(name, price);
    this.measure = measure;
    this.quantity = quantity;
    this.calculatePrice(); // Calcular el precio total al crear la instancia
  }

  calculatePrice() {
    this.totalPrice = this.price * this.quantity;
  }
}

// class CompositePriceProduct extends Product {
//   constructor(name, products, discount) {
//     super(name, 0);
//     this.products = products;
//     this.discount = discount;
//   }

//   calculatePrice() {
//     let total = 0;
//     for (const product of this.products) {
//       total += product.price;
//     }
//     this.price = total - this.discount;
//   }
// }

// class CompositePriceProduct extends Product {
//   constructor(name, products, discount) {
//     super(name, 0); // El precio se determinará después
//     this.products = products;
//     this.discount = discount;
//   }

//   calculatePrice() {
//     let total = 0;
//     for (const product of this.products) {
//       total += product.price;
//     }
//     this.price = total - this.discount;
//   }
// }

class CompositePriceProduct extends Product {
  constructor(name, products, discount) {
    super(name, 0); // El precio se determinará después
    this.products = products;
    this.discount = discount;
    this.calculatePrice(); // Calcular el precio total al crear la instancia
  }

  calculatePrice() {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    this.price = total - this.discount;
  }
}

module.exports = {
  Product,
  FixedPriceProduct,
  VariablePriceProduct,
  CompositePriceProduct,
};
