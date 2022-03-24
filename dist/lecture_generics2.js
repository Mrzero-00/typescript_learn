// 제너릭은 함수 뿐만 아니라 class를 지정 할 때도 사용이 가능하다.
var localdata = /** @class */ (function () {
    function localdata(key) {
        this.key = key;
    }
    localdata.prototype.add = function (v) {
        localStorage.setItem(this.key, JSON.stringify(v));
    };
    localdata.prototype.get = function () {
        var value = localStorage.getItem(this.key);
        return value ? JSON.parse(value) : null;
    };
    return localdata;
}());
var userLocalData = new localdata("dsdsd");
var userAgeLocalData = new localdata("dsdsd");
userLocalData.add({ name: "john" });
userAgeLocalData.add({ age: 30 });
var useNameGet = userLocalData.get();
var useAgeGet = userAgeLocalData.get();
console.log(useNameGet);
console.log(useAgeGet);
//# sourceMappingURL=lecture_generics2.js.map