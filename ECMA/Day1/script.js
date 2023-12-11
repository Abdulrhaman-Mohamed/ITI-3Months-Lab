////////////////Swaping/////////////
// let [a ,b]=[1,2];
// [b,a]=[a,b];
// console.log(a , b)


////////Max Value////////
// let arr = [1,25,45,10,30];
// function max_min()
// {

//     let arr = [`Max is ${Math.max(...arguments)}` , `Min is ${Math.min(...arguments)}`]
//     console.log(arr);

// }

// max_min(15,25,23,60,75,20,50,100);



///////////////////3-study array//////////////

var fruits = ["apple", "strawberry", "banana", "orange",
"mango"];
// /////////////a-Test string////////// 
let testString=fruits.map((el)=>{
    return typeof el === "string";
});

//console.log(testString);

// ///////////b-test with "a"/////////

let testStartA1=fruits.filter((el)=>{
    return el.startsWith('a',0);
});

let testStartA2=fruits.map((el)=>{
    return el.startsWith('a',0);
});

// console.log(testStartA1);
// console.log(testStartA2);


// ///////c-"b" or "s"///////////
let testStartB_S=fruits.filter((el)=>{
    if(el.startsWith('b',0) || el.startsWith('s',0))
    return el;
});

//console.log(testStartB_S);



// ///////////d-you like/////

let youLike = fruits.map((el)=>{
    return `you like the ${el}`;
})

//console.log(youLike);


// ////////////////////////e-forEach//////////

youLike.forEach((el)=>{
    console.log(el);
})

// //////////////////////////////////////////////////////






