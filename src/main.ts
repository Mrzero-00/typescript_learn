// 타입스크립트는 자바스크립트와 달리 정적인 언어이기때문에, 변수의 타입을 확인하는 컴파일 단계가 필요함.
// 컴파일 할 때 tsc [희망하는 ts확장자 파일] 을 하면 컴파일 할 수 있음 ex) tsc main.ts 
// 컴파일이 문제없이 완료 되면 js파일이 생성된다. 기본적으로 js파일을 구성 브라우저도 지원하기위하여 javascript es5를 따르지만 target옵션을 통해 es6로도 만들수잇음.
// ex) tsc main.ts --target es6
const username= 'ddd';

import add from './utill.js';


// promise 같은 경우 es2015이후의 나온 것으로 별도의 작업을 안하고 컴파일 한다면 에러가 뜬다.
// 이것을 해결하기 위하여 tsc 옵션중 --lib을 통해 특정 기능을 미리 불러와서 컴파일 해야한다.
// ex) tsc main.ts --lib es2015.Promise


const promiseFuntion = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("1000ms over");
    }, 1000);
})

promiseFuntion.then(console.log);

console.log(add(3,4));



// 지금 까지 사용된 promise, arrow function, import 등등은 es2015이후 에 나온 기능들이기에 기본적으로 컴파일할경우 문제가 생겨 lib옵션을 통해
// 컴파일 전 미리 불러들이 던가, target 옵션을 통해 es6형태로 컴파일 할 수 도 있다.
// es6로 target을 변경하여 컴파일하면 컴파일 단계에서는 문제가 생기지 않지만, node 로 생선된 js파일을 실행할 경우 문제가 발생한다.
// 이 문제는 node version의 따라 모듈 시스템의 다른데 es5는 commonjs 형태를 따른다고 한다.
// 타겟은 es6를 따르되 module은 conmmonjs를 따르게끔 컴파일 해주어야한다.
// ex) tsc main.ts --target es6 --module commonjs