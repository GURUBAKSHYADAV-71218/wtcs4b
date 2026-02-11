let uITeam=[1,2,3,4,5];
let flutterTea=[9,8,7,6,5];
function show(){
    console.log(uITeam);
    console.log(flutterTea);
    console.log(uITeam+" "+flutterTea)
}
console.log(show());













// // call stack , event loop
// console.log("first");
// console.log("2nd");
// // any asynchronus jisko chalne mea time lagega ,
// console.log("3rs");
// console.log("first");
// // so aisa case jismea agar bhale bada code aa gya beech mea toh bhi processor rukakar sabko line by line chalega
// usko synchronus bolenge, but in case agar beech me bada code aa gya aur wo bahoot time lag rha hai toh 
// aage wale ke code chalte hai aur wo baad mea chalega toh usko asynchronu bolte hai 


// setTimeout a(()  =>{
//     console.log("first");

// },4000);
// //setTimeout(aa,4000);// dekho aa is in another function , so this is called CALL BACK ,




// setInterval(() =>{// yea initially infinite chalega toh usko khatam karne k eliye hum next step pe jaayenge
//     console.log("first");
// },3000);



// ismea kitni baar chalana hai wo set karenge 
// let count=0;
// let id= setInterval(() =>{
//     console.log("first");
//     count++;
//     if(count===5){
//         clearInterval(id);
//     }
// },2000);


// function roll(num,next){
//     setTimeout(() =>{
//         console.log("ROLL no."+num);
//         if(next)next();
//     },1000);
// }
// roll(122212, () =>{
//     console.log("wait");
//     roll(12312,() => {
//         console.log("wait");
//         roll(12412),()=> {
//             console.log("wait");
//             roll(12512);
//         });
//     });
// });



// this problem is called call_back hell

// function roll(num,t,next){
//     setTimeout(() =>{
//         console.log("ROLL no."+num);
//         if(next)next();
//     },1000);
// }
// roll(122212,t, () =>{
//     console.log("wait");
//     roll(12312,t,() => {
//         console.log("wait");
//         roll(12412),t,()=> {
//             console.log("wait");
//             roll(12512);
//         });
//     });
// });

// const p= new  Promise((resolve,reject)=>{
//     resolve("okay");
//     reject("no not good");
// });
// p.then((value)=>{
//     console.log("resolve"+resolve);
// });

// const p = new Promise((resolve, reject) => {
//   reject("Big Block error");
//   resolve("sab theek hai");
// });
// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("error hai", error);
// });

console.log("1) Start");

const p = new Promise((resolve, reject) => {
  console.log("2) Promise created ");
  setTimeout(() => {
    resolve("3) Work finished");
  }, 1000);
});
console.log("4) After creating promise");

p.then((value) => {
  console.log(value); // runs AFTER resolve(...)
  console.log("5) then() runs only when promise is resolved");
});

console.log("6) End (JS keeps running; then will run later)");







