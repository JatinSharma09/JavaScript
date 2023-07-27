// let a,i,j;
// a = prompt("Enter The Number:");
// for(i=1;i<=a;i++)  
//   {
//       for(j=1;j<=i;j++)
//         {
//         console.log("*");
//         }
//     console.log(`\n`);
//     }
let obj = {
  ajay: 23,
  jatin: 45,
  aditya: 47,
  uday: 45,
  aakash: 48  
}
for (let a in obj){

    console.log(" Marks of " + a + " are " + obj[a])
  
}
 for (let b of "Jatin"){
    console.log(b)
 }