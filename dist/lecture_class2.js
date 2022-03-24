// 인터페이스를 구현하고 이를 클래스에 상속 할 수 있는데, 이때 implements를 활용하여 상속한다.
// 상속은 한개이상 가능하며, 2개이상일 경우 ','로 나눠준다.
// interface같은경우 export를 해주지 않아도 전범위 적으로 사용가능한가?
// 이전 강의를 통해 interface부분에서 person interface를 생성한적이 있는데 command + . 를통해 인터페이스 구현시 이전 인터페이스가 전부 나옴.
var KoreanProgrammer = /** @class */ (function () {
    function KoreanProgrammer(name) {
        this.name = name;
    }
    KoreanProgrammer.prototype.writeCode = function (write) {
        return write;
    };
    KoreanProgrammer.prototype.say = function (say) {
        console.log(say);
    };
    KoreanProgrammer.prototype.likeKimchi = function () {
        console.log("i like kimchi!");
    };
    return KoreanProgrammer;
}());
var john = new KoreanProgrammer("john");
console.log(john);
john.likeKimchi();
//# sourceMappingURL=lecture_class2.js.map