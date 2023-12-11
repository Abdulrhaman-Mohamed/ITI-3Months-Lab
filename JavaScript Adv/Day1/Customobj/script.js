// var obj = {
//     name: "mai",
//     age: 20,
//     display: function (x) {
//       console.log(x);
//       console.log(this.name);
//     },
//   };





// // create obj.prop to for in obj to create getter and setter 

// for (var key in obj) 
// {
//     (function()
//     {
//         var objNamee = obj[key];
//         Object.defineProperty(obj , key ,{
//             getter:function()
//             {
//                 return objNamee;
//             },
//             setter:function(value)
//             {
//                 objNamee=value;
//             }
//         })
//     })();

// }

// obj.age=30;
// console.log(obj)


var obj = {
    name: "mai",
    age: 20,
    display: function () {
      console.log(this.name);
      console.log(this.age);
    },
getSetGen:function()
{
    for (var key in this) 
{
    if(typeof this[key] !== "function" )
    {
        var obj_ = this;
        (function()
    {
        var objNamee = obj_[key];
        Object.defineProperty(obj_ , key ,{
        get:function()
            {
                return objNamee;
            },
        set: function (value) {

          objNamee = value;
    }
        })
    })();
    }
    

}
}
};

  var obj2=
{
    name:"ggg",
    age:60,
    log:function(){},
    gget:function(){},
}








// obj.getSetGen();
  
//   obj.name = 25;
//   console.log(obj);




// //debugger
// getSetGen(obj2);
// console.log(obj2)
// console.log(obj);
// obj.getSetGen();   
// // console.log(obj); 
// // // execute after call direct
// // //obj.getSetGen.call(obj2);


// // // Bind ---> didn't call direct can be stored in variable 
var caller=obj.getSetGen.bind(obj2);
console.log(obj2);
caller();
console.log(obj2.name);









