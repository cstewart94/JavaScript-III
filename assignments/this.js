/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When nothing else applies, defaults to the window object.
* 2. Left of the dot. Only objects with methods.
* 3. Creates a new object
* 4. Can state what the 'this' keyword is in a function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function anotherCat(){
    console.log(this.catSize);
  }
  var catSize="small"
  anotherCat();

// Principle 2
// code example for Implicit Binding
const exampleCat={
    fur: 'short hair',
    color: 'tabby',
    name: 'Frankie',
    attitude: 'inquisitive',
    aboutCat:function(){
      console.log (`${this.name} is a ${this.fur} ${this.color} and is very ${this.attitude}.`);
    }
  }
  exampleCat.aboutCat();


// Principle 3
// code example for New Binding
function Cat(attributes){
    this.catFur=attributes.catFur,
    this.catColor=attributes.catColor,
    this.catName=attributes.catName,
    this.catBehavior=attributes.catBehavior
    console.log(this);
}

const catOne = new Cat({
    catFur: 'long hair',
    catColor: 'black',
    catName: 'Salem',
    catBehavior: 'curious'
});

// Principle 4
// code example for Explicit Binding
function roar(){
    console.log(this.meow);
  }
  
  let bigCat={
    meow:'roar'
  }
  
  roar.call(bigCat);