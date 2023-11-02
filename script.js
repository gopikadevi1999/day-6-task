//4.write a class to calculate the uber price

class UberPrice{
    constructor(baserate, costpermin, costpermile){
        this.baserate = baserate;
        this.costpermin = costpermin;
        this.costpermile = costpermile;
    }
calculatePrice(distance,time){
    if(distance < 0 || time < 0){
        return "distance and time";
    }
const fare = this.baserate + this.costpermin + this.costpermile;
return fare;
  }
}

const calculator = new UberPrice(2.5, 1.5, 0.3);
const distance = 10;
const time = 20;
const price = calculator.calculatePrice(distance, time);
console.log(`$${price.toFixed(2)}`);

//3.Write a “person” class to hold all the details.

class Person{
    constructor(names,age,gender,salary){
    this.names = names;
    this.age =  age;
    this.gender = gender;
    this.salary = salary;
    }
}
const personDatails = new Person("Gopikadevi",24,"female",10000);
console.log(personDatails.names);
console.log(personDatails.age);
console.log(personDatails.gender);
console.log(personDatails.salary);

//question number 1

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movieArray) {
      return movieArray.filter(movie => movie.rating === "PG");
    }
  }
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(casinoRoyale);
  

  //Question 2

  class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color =color;
    }
    get toString(){
        return `"Circle[radius = ${this.radius}, color = ${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return Math.PI * 2 * this.radius;
    }
}

var obj1 = new Circle(1.0, "red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle);