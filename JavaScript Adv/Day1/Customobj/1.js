var user = {
    name: "ali",
    age: 54,
    getSetGen: function () {
        var self=this
        for (var key in self) {
                //console.log(this);
                if (typeof self[key] !== "function") {
                    self[`get ${key}`] = function () { return "Temo" };
                    self[`set${key.charAt(0).toUpperCase()}${key.slice(1)}`] = function (value) {  self[key]=value };
                }
            }
    }
}
user.getSetGen()

var person = {
    email: ";aksdlkdsd@wds.com",
    name:"ali"
}

user.getSetGen.call(person)
console.log(person)
console.log(person.name)