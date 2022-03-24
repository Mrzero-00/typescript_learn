// type alias는 interface와 비슷하게 사용됨.

type PersonType = {
    name:string;
    age:number;
}

//이런식으로 사용됨.
//또한 color등 유니온타입을 지정할떄 type을 이용하면 간편하게 사용할 수도 있음.


type Color = "red" | "blue" | "black";

const color: Color ="red";

// 대체적으로 왠만한 타입 어노테이션을 type alias로 대처 할수 있으며, 
// 한가지를 정해서 사용하는것을 권장한다고함.
