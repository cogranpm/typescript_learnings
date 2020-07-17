
class Greeting {
    greet(): string {
        return "hello there";
    }
}

var num: number = 12
console.log(`number: ${num}`)

var greet = new Greeting();
console.log(greet.greet())