// function greet(str, str1) {

// //   console.log(`${str}, ${str1} ${this.username}, your room is ${this.room}!`);
// // }

// // const mango = {
// //   username: "Mango",
// //   room: 27
// // };

// // const poly = {
// //   username: "Poly",
// //   room: 191
// // };

// // const andy = {
// //     username: "Andy",
// //     showName: function(username){
// //         console.log(this.username);
// //     }
// // }

// // greet.call(mango, "Hi", "how are you")

// // greet.apply(poly,["Bob","what"])

// // greet.call(andy,"Hey", "How")


// const car = {
//     engine: "3.0",
// };

// const bmw = Object.create(car);
// car.mark = "bmw";

// console.log(bmw.mark);

// console.log(car.engine);



// const carMark = {
//     name: "Audi",
// };

// const carModel = Object.create(carMark);
// carModel.model = "A7";




class Car{
  brand;
  #brand;
  constructor(params) {
    //this.#brand = brand;
    this.model = params.model;
    this.price = params.price;
    
  }
  getBrand(){
    return this.#brand;
  }
  changeBrand(newBrand){
    this.#brand = newBrand;
  }

}

// const bmw = new Car("BMW", "X5", 60000);
// console.log(bmw)

const audi = new Car({brand: "Audi", model: "Q3", price: 36000 });
console.log(audi)