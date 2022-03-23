//타입 스크립트에서는 함수의 인수와 결과 값을 타입 어노테이션을 통해 지정 할 수 있다.
function add(x, y) {
    return x + y;
}
var result = add(3, 4); // add함수를 불러올때 인수의 number가 아닌 다른 값이 들어간다면 에러가 발생함.
function storeLogic(item) {
    if (item === "건어물") {
        return { item: item };
    }
    else if (item === "아이스크림") {
        return { item: item };
    }
    else {
        throw new Error("unsupported error");
    }
}
console.log(storeLogic("건어물"));
console.log(storeLogic("아이스크림"));
//# sourceMappingURL=lecture_function.js.map