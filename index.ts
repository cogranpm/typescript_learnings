
class Greeting {
    greet(): string {
        return "hello there";
    }
}

const num: number = 12
console.log(`number: ${num}`)

const greet = new Greeting();
console.log(greet.greet())

//destructuring
let input = [1, 2];
let [first, second] = input;
console.log(`First:${first}, Second:${second}`);

function destuct([first, second]: [number, number]){
    console.log(`First:${first}, Second:${second}`);
}

destuct([1, 2]);