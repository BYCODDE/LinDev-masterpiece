// შექმენით პატარა კოდი სადაც გამოიყენებთ პრომისებს, კლასს და ფუნქციებს,
// ეს ყველაფერი დაგვიბრუნებს ველიუს

function addNumbers(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 500);
  });
}

class Foo {
  static #bar = 3;
  static getValue() {
    return Foo.#bar;
  }
}

(async () => {
  console.log(await addNumbers(Foo.getValue(), 4));
})();
