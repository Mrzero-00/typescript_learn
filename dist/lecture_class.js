// 클래스는 타입스크립트 학습이라기보다는, 자바스크립트 es6에 새로 도입된 것이다.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cart = /** @class */ (function () {
    //클래스의 접근제한자로는 public,private,protected 가 존재한다.
    // public - 기본 디폴트로 접근제한자를 설정하지않으면 public으로 입렵되며, 상속받은 하위 클래스 및 인스턴스, 클래스 내부에서 접근이 가능함
    // private - 하위 클래스 및 인스턴스에서 접근이 불가능하고 클래스 내부에서만 접근이 가능하다.
    // protected - 인스턴스에서는 접근이 불가능하지만, 상속해준 하위 클래스에서는 접근 할 수 있음.
    //constructo는 클래스 초기화 메소드로 클래스가 만들어졋을때 초기값을 지정해 줄 수 있다.
    function cart(user) {
        this.user = user;
    }
    // 아래 처럼 constructor 메소드에서 인자값에 public 과 같이 접근제한자를 적어주게 되면, 해당하는 값을 속성으로 따로 부여하지 않아도
    // 접근이 가능하게 된다. 즉, 속성을 자동으로 생성해 준다고 생각하면 될듯.
    // 하지만, 개인적으로 코드길이는 늘어날지 모르겠지만, 코드 가독성 측면에서는 속성으로 따로 빼주는게 좋다고 생각함.
    // constructor(public user:User){
    //     this.user = user;
    // }
    cart.prototype.pushItem = function (item) {
        this.cartBox.push(item);
    };
    cart.prototype.removeItem = function (item) {
    };
    return cart;
}());
var eventCart = /** @class */ (function (_super) {
    __extends(eventCart, _super);
    function eventCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    eventCart.prototype.eventMethod = function () {
    };
    return eventCart;
}(cart));
var myCart = new cart({ name: "john" });
var newCart = new eventCart({ name: "jays" });
newCart.
;
//# sourceMappingURL=lecture_class.js.map