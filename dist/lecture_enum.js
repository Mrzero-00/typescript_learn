// enum은 상수를 한군데 모아놓은 변수임
// 사용성에 대해서는 잘 모르겟음..
var USER_LEVER;
(function (USER_LEVER) {
    USER_LEVER[USER_LEVER["GOlD"] = 0] = "GOlD";
    USER_LEVER[USER_LEVER["SILVER"] = 1] = "SILVER";
    USER_LEVER[USER_LEVER["BRONSE"] = 2] = "BRONSE";
})(USER_LEVER || (USER_LEVER = {}));
var USER_LEVER2;
(function (USER_LEVER2) {
    USER_LEVER2["GOlD"] = "GOLD";
    USER_LEVER2["SILVER"] = "SILVER";
    USER_LEVER2["BRONSE"] = "BRONSE";
})(USER_LEVER2 || (USER_LEVER2 = {}));
console.log(USER_LEVER);
console.log(USER_LEVER2);
// enum은 interface처럼 props의 값을 제한 할 수 있음.
// enum의 각각의 상수가 키값이며, 배열처럼 상수의 나열 순서의 따라 인덱스를 가진다.
// 상수의 특정 값을 지정해 주게 되면, 인덱스를 가지지않고 객체처럼 키값으로만 접근이 가능함.
// 타입스크립트 2.4version부터 string도 대입이 가능하게 되었음. 
//# sourceMappingURL=lecture_enum.js.map