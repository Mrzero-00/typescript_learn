let numberValue:number;
let stringValue:string;
let boolValue:boolean;
let nullValue:null;
let undefinedValue :undefined;
//원시형 타입

let objectValue:object;
//래퍼런스형 타입

let symbolValue:symbol;
//es6에서 나온 새로운 원시형 타입

let anyValue:any;
//모든 타입의 상위 타입

//타입 어노테이션을 통해 값을 정의 할때 string, number, object,symbol 등 모든 타입에는 null과 undefined가 대입될 수 있다.
//이는 null과 undefinde가 하위 타입이기 때문이라고 한다.
// 하여 모든 타입의 상위 타입인 any타입은 모든 값이 들어갈 수 있다.
stringValue = undefined;
nullValue = undefined;
objectValue = undefined;
nullValue = null;
undefinedValue = null;
undefinedValue = undefined;

anyValue = "string";
anyValue = 33;
anyValue = {};

// 래퍼형태의 값을 지정 할 때 

stringValue = String("래퍼를 통한 값 정의");
// stringValue = new String("래퍼를 통한 값 정의");
// new를 사용하면 새로운 객체가 return 되기 때문에 string 타입으로 어노테이션 된 stringValue에는 정의할 수 없다.
// 반면 객체 타입에는 정의 할 수 있다.

objectValue = new String("래퍼를 통한 값 정의");

// symbol 타입은 이해가 잘 되지 않음.. 유니크한 값을 만들어 주어서 주로 객체의 키로써 사용한다고 하는데,, 나중에 직접 사용할 기회가 되면 그때 추가적으로 이해 필요
// 우선 Symbol은 생성할때 Symbol생성 함수로만 생성이 가능하다고 한다.

symbolValue = Symbol();



//배열 타입
//배열 타입또한 타입을 지정하고 그 타입에 맞는 데이터를 넣을 수 있게 해야함.

let stringArrayValue :string[];
let numberArrayValue :number[];
let anyArrayValue:any[];

//stringArrayValue = [3,4,5,6]; stringArrayValue는 스트링 타입의 배열이기의 값들이 string으로 들어와야된다.
numberArrayValue = [3,4,5,6];
// 여러 타입을 다양하게 넣고 싶다면, 상위 타입인 any형의 배열을 만들어 줘야함.
anyArrayValue = [3,4,"33",{}];

// tuple 타입
// tuple은 얼핏 보면 array와 비슷하지만, 값의 갯수를 정하고 타입을 정할 수 있음.
// 지정된 갯수와 타입이 동일해야 오류가 안남
let tupleValue: [number,number,string] ;
tupleValue = [3,3,"33"];

//object의 경우 인라인으로 값을 직접 정해 줄 수 있는데, 이는 차후 배우는 인터페이스나 class에서 좀더 다뤄봄

let objectValue2 : {name:string,age:number};
objectValue2 ={
    name:"name",
    age:33
}