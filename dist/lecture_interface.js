// interface는 타입만 결정? 하고 구현의 대한 내용은 정의 하지 않는다.
// 즉 interface에서는 어떠한 행위를 해야하고 그 행위들이 받아야하는 props 및 반환되는 값만 정의해주고
// 실질적인 구현은 변수의 정의해주어야 한다.
var myTv = {
    turnOn: function () {
    },
    turnOff: function () {
    }
};
//interface안에 interface를 검사하여 넣을수도 있음.
// interface는 행위를 지정 하기도 하지만 값을 정의하기도 한다.
// adress의 같은경우 ? 를 붙여 두엇는데, ?가 붙으면 null값 즉, 값이 없어도 에러가 발생하지 않는다.
var user1 = {
    name: "user1",
    age: 0,
    gender: "man",
    adress: "dkdkdk",
    say: function (say) {
        throw new Error("Function not implemented.");
    }
};
var user2 = {
    name: "user1",
    age: 0,
    gender: "man",
    say: function (say) {
        throw new Error("Function not implemented.");
    }
};
// 위 처럼 adress는 옵셔널한 값으로 정의됨
//# sourceMappingURL=lecture_interface.js.map