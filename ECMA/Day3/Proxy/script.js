let Myobj = {
    name:"Temo mohamed",
    age:22,
    address:"11 street - Elarbien - suez"
}


let handler ={
    ////////Get
    get:function(target ,prop){

        if(!(prop in target))
        throw "this property isn't exit in object"
    },

    //////Set
    set:function(target , prop ,val){

        if (!(prop in target )) {
            throw `this ${prop} is not found`;
          }


        if(prop == "name")
        {
            //debugger
            if((typeof val !== "string") || val.length < 7)
            {
                throw "Name Must be A string and lenght should be greater than 7 character";
            }
        }


        if(prop == "address")
        {

            //debugger
            if((typeof val !== "string"))
            {
                throw "Address Must be A string ";
            }
        }



        if(prop == "age")
        {

            //debugger
            if(val <25 || val > 60)
            {
                throw "Age  Must be  between 25 and 60";
            }
        }

        target[prop] = val ;
    }
}

let proxyTest = new Proxy(Myobj , handler);


proxyTest.age = 26;
proxyTest.name = "temo Mohamed";
proxyTest.address = "2555";
console.log(proxyTest , Myobj)

//console.log(proxyTest.temo);

