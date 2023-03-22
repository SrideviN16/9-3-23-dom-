//9-3-23//
//1.string retrn//
let cday=new Date("2023/3/9");
let myday=cday.getDate();
console.log(myday);
cday.setDate(cday.getDate()-3);
console.log(cday);
//2.prgm return the gap between the two day//
let fday=new Date("2023/3/9");
let mysday=fday.getDay();
let ans=new Date();
if(fday.getDay()==0)
{
	 ans.setDate(fday.getDate()-7);
}
else 
{
	   ans.setDate(fday.getDate()-(mysday-1));
}
console.log(ans);