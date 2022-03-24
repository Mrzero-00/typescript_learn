// 제너릭은 함수의 props의 타입이 정확하게 정해지지 않앗을때 사용한다.
// 아래 함수는 x라는 값이 string인지 number인지 모른다고 가정하고
// 이를 return준다고 할때, any를 사용하면 모든값을 받을 수 있어서 제너릭으로 사용할 수는 있다.
// any를 쓰는 것은 함수의 arg가 어떤 타입이든 받을 수 있다는 점에서 제네릭이지만, 
// 실제로 함수가 반환할 때 어떤 타입인지에 대한 정보는 잃게 됩니다. 
// 만약 number 타입을 넘긴다고 해도 any 타입이 반환된다는 정보만 얻을 뿐입니다.
function genericLogic(x, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeout);
    });
}
genericLogic("10", 500).then(function (e) { console.log(e); });
// 우의 코드에서 then에서 나오는 return 값을 보면 any로 나옴.
function genericLogic2(x, timeout) {
    // return new Promise(( resolve ,reject)=>{
    //     setTimeout(() => {
    //         resolve(x);
    //     }, timeout);
    // })
    // resolve 함수의 props를 제너릭으로 지정하게 되면, 인수를 입력받을때의 타입이 지정되어
    // resolve 로 리턴되는 값의 타입을 확인할 수 있다.
    // return new Promise(( resolve : (x:T)=>void ,reject)=>{
    //     setTimeout(() => {
    //         resolve(x);
    //     }, timeout);
    // })
    //return 값의 제너릭으로 <T>를 주어됨
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeout);
    });
}
genericLogic2(30, 500).then(function (e) { console.log(e); });
genericLogic2("30", 500).then(function (e) { console.log(e); });
//이렇게 제너릭이 들어간 함수를 호출 할 때 함수의 타입을 제너릭처럼 보내주어도 됨.
function genericLogic3(v, v2, v3) {
    return [v, v2, v3];
}
var createTuple = genericLogic3("dd", 3, 1);
//위 처럼 제너릭은 2개이상의 복수로도 사용이 가능하며, 반환값으로 지정해주면 타입이 자유료운 튜플도 만들수 있음.
//# sourceMappingURL=lecture_generics.js.map