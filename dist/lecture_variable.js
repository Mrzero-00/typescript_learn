var score1 = 11;
var score2 = 22;
var score3 = 33;
// 스코프에 대해서 잘못 알고 있는것이 있었다.
// var는 스코프의 개념이 없는줄 알고있엇는데, 그것이 아니라 var는 함수단위의 스코프를 가진다.
// 반면 let,const는 블록 단위의 스코프를 가진다.
var inner = function () {
    var innerNum = 3;
    if (true) {
        var ifinnerNum = 33;
        //if는 블록 스코프를 가지기 때문에 var는 외부에서 참조할 수 있고 let은 참조 할 수 없음.
        var ifinnerNum_let = 333;
    }
    var innerinner = function () {
        var innerinnerNum = 33;
        console.log(innerNum);
    };
    console.log(ifinnerNum);
    // console.log(ifinnerNum_let);
};
inner();
var typeswitch = function () {
    // typescript 는 type을 지정해주지 않으면 초기화 할 때의 값의 타입으로 변수 타입이 결정된다.
    // 하지만 선언과 동시의 초기화 해주지 않고 선언만 하고 나중에 초기화 하는 경우는 타입이 지정되지 않는다.
    // 타입스크립트의 강점을 살리기위해서 변수의 타입을 미리 지정하고 오류를 최소화 해야하기에
    // 타입 어노테이션을 통해 타입을 미리 지정해주는것이 좋다.
    var number = 30;
    var number2;
    var number3;
    number3 = 33;
    //number3 = "33"; number3는 number타입으로 어노테이션 되었기때문에 스프링 타입의 "33" 을 넣을수 없다.
    number = 33;
    //number = "33";
    number2 = 33;
    number2 = "33";
};
//# sourceMappingURL=lecture_variable.js.map