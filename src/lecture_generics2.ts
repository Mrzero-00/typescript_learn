// 제너릭은 함수 뿐만 아니라 class를 지정 할 때도 사용이 가능하다.

class localdata<T>{
    constructor(private key:string){
    }

    add(v:T){
        localStorage.setItem(this.key,JSON.stringify(v));
    }

    get():T{
        const value = localStorage.getItem(this.key);
        return value ? JSON.parse(value) : null
    }
}

interface UserData {
    name:string;
}

interface UserAge {
    age:number;
}


const userLocalData = new localdata<UserData>("dsdsd");
const userAgeLocalData = new localdata<UserAge>("dsdsd");

userLocalData.add({name:"john"});
userAgeLocalData.add({age:30});

const useNameGet = userLocalData.get();
const useAgeGet = userAgeLocalData.get();

console.log(useNameGet);
console.log(useAgeGet);
