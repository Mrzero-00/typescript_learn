var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 인터페이스를 구현하고 이를 클래스에 상속 할 수 있는데, 이때 implements를 활용하여 상속한다.
// 상속은 한개이상 가능하며, 2개이상일 경우 ','로 나눠준다.
// interface같은경우 export를 해주지 않아도 전범위 적으로 사용가능한가?
// 이전 강의를 통해 interface부분에서 person interface를 생성한적이 있는데 command + . 를통해 인터페이스 구현시 이전 인터페이스가 전부 나옴.
var Korean = /** @class */ (function () {
    function Korean(name) {
        this.name = name;
    }
    return Korean;
}());
// abstract 은 미완성 클래스? 혹은 추상적인 클래스라고 생각하면 될것 같음.
// abstract으로 만들어진 class는 new를통해 인스턴스를 생성 할 수 없다.
// abstract내부의 메소드의 abstract를 주어지면, 구현체를 작성하지 못하고,
// 이 클래스를 상속받은 클래스에서 구현체를 작성해주어야만 사용이 가능함.
var KoreanProgrammer = /** @class */ (function (_super) {
    __extends(KoreanProgrammer, _super);
    function KoreanProgrammer(name) {
        return _super.call(this, name) || this;
    }
    KoreanProgrammer.prototype.likeKimchi = function () {
        throw new Error("Method not implemented.");
    };
    KoreanProgrammer.prototype.writeCode = function (write) {
        return write;
    };
    KoreanProgrammer.prototype.say = function (say) {
        console.log(say);
    };
    return KoreanProgrammer;
}(Korean));
var john = new KoreanProgrammer("john");
console.log(john);
john.likeKimchi();
//# sourceMappingURL=lecture_class2.js.map