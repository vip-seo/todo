var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(one, two) {
        var _this = _super.call(this, one, two) || this;
        _this.one = one;
        _this.two = two;
        _this.color = 'white';
        return _this;
    }
    User.prototype.sayHello = function () {
        console.log('hello ' + this.name);
    };
    User.prototype.run = function () {
        return 4;
    };
    return User;
}(Human));
var mark = new User('Mark', 27);
console.log(mark);
