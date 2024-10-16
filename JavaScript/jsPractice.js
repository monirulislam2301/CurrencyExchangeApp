/*
    //synchronous: runs in a sequence

    console.log("one")
    console.log("two")
    console.log("three")

    //asynchronous: does not run in a sequence

    function addition()
    {
        console.log("2+3=5")
    }

  setTimeout(addition,2000) // 2s timeout 

  setTimeout(()=> {
    console.log("printing after 5seconds")
},5000)
   

console.log("testing before setTimeout")
*/

//callbacks
// function sum(a,b)

// {
//     console.log(a+b);
// }
//  function calc(a, b , sumCallback)
//  {
//     sumCallback(a , b);
//  }

//  calc(1,2,sum)

//  calc(25,2 , (a,b)=> {
//     console.log("printing with the whole function",a-b)
//  });
/*
 //callback Hell : nested callbacks, very difficult to understand the code

 //example of nesting
 let fullName = "jack"

 if(fullName==="jack")
    {
        console.log("true");
    }else
    {
        console.log("false");
    }


function getData(dataId)
{
    console.log("data",dataId);
}

getData() // undefined 
getData(26558) // data 26558

function getData2()
{
    setTimeout(()=>{
        console.log("printing data after 2 seconds")
    }, 2000) 
}

getData2() // printing data after 2 seconds
*/
//promise: to solve callback hell, used for eventual task

// let promise = new Promise ((resolve, reject)=>
//     {
//         console.log("promise");
//         resolve("issue has been resolved");
       
//     });

// let newPromise = new Promise ((resolve, reject)=>
//     {
//         setTimeout(()=>
//             {
//             console.log("printing new promise");
//             resolve("success");
//             },5000)
//     });    

// how to use promise 

//promise.then used for fulfilled promises and promise.catch used for rejection


// const getPromise = ()=>
//     {
//      return new Promise ((resolve, reject)=>
//         {
//             console.log("this is a promise");
//             resolve("success");
//            reject("error");
//         });   
//     };


//     let anotherPromise = getPromise();
//     anotherPromise.then(()=>
//         {
//             console.log("resolved promise");
//         });

//     anotherPromise.catch(()=>
//         {
//             console.log("rejected promise");
//         });

// promise chain

// function asyncFunc()
// {
//     return new Promise ((resolve, reject )=>
//         {
//             setTimeout(()=>
//                 {
//                     console.log("some data");
//                     resolve("data received");
//                 },3000);
//         });
// };
// console.log("fetching data.....");
// let promiseOne=  asyncFunc();
// promiseOne.then((res)=>{
//        console.log(res);
//     });


    // we can do promise chaining to execute code sequentially.


// Now if we compare readability then promise chaining > callbacks hell. So we use Async-Await for more readability


//Async- Await

async function api()
{
    return new Promise((resolve, reject)=>{
        
      setTimeout(()=>
        {
              console.log("Weather data received");
        resolve(200);    
        },3000) ;  
        })   
}
async function api2()
{
    return new Promise((resolve, reject)=>{
        
      setTimeout(()=>
        {
              console.log("Weather data received2");
        resolve(200);    
        }) ;  
        })   
}

async function callfunc()
{
    await api();
    console.log("second data")
    await api2();
}

callfunc();
















