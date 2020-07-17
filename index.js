var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        return "hello there";
    };
    return Greeting;
}());
var num = 12;
console.log("number: " + num);
var greet = new Greeting();
console.log(greet.greet());
//# sourceMappingURL=index.js.map