//타입 스크립트에서는 함수의 인수와 결과 값을 타입 어노테이션을 통해 지정 할 수 있다.

function add(x:number,y:number):Number{
    return x+y;
}

const result = add(3,4); // add함수를 불러올때 인수의 number가 아닌 다른 값이 들어간다면 에러가 발생함.


//타입 스크립트에서 함수의 return 값은 원시 타입 이외에도 interface로 정의한 타입으로도 나올수 있다.

interface Store{
    item:string;
}

interface ColdStore{
    item:string;
}

function storeLogic(item:"건어물"):Store
function storeLogic(item:"아이스크림"):ColdStore

//타입 스크립트에서 인수의 따른 리턴값이 상이하다면, 함수 overload를 통해 인수의 따른 return 값을 지정해 줄 수 있다.
//동일한 함수명을 준뒤 구현체를 적지 않으면 오버로드로 인식한다.
//구현체가 없으면 에러를 발생하고, 아래 처럼 구현체를 작성해 주어야한다.


function storeLogic(item: "건어물" | "아이스크림"){
    // item의 타입 어노테이션이 기존과 살짝 다른데, 이렇게 지정된 값에서 결정 하는것을 유니온 타입이라고 한다.
    if(item==="건어물"){
        return {item}
    }else if(item==="아이스크림"){
        return {item}
    }else{
        throw new Error("unsupported error");
    }
}
console.log(storeLogic("건어물"));
console.log(storeLogic("아이스크림"));