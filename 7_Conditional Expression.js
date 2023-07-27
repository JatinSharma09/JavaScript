//If Else Statemant
// let a = prompt("Enter Your Age");
// if(a>=18)
// {
//   alert("You Are Eligeble");
// }
// else
// {
//   alert("You Are Not Eligeble");
// }
// If...else...if Statemant
let a =prompt("Enter Your Age");
a = Number.parseInt(a);
if(a<0)
{
  alert("This Is Invalid Age");
}
else if(a<9)
{
    alert("You Are Kid");
}
else if(a<18 && a>=9 )
{
  alert("You Are a Kid And You Can Think Of Driving After 18");
}
else
{
  alert("This Is A Invalid Age")
}
