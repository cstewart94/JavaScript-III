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

// Principle 2
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
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding