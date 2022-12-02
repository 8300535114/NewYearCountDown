/*const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const secounds=document.querySelector("#seconds");

function updateTime(){
	const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);

const currentDate= new Date();

const diff=newYear-currentDate;
const d=Math.floor(diff/1000/60/60/24);

const h=Math.floor((diff/1000/60/60)%24);

const m=Math.floor((diff/1000/60)%60);

const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
secounds.innerHTML=s<10?"0"+s:s;
}

setInterval(updateTime,1000);

/*
1000ms=1s
60s=1m
60m=1hr
24hrs=1day
*/


const days= document.querySelector('#days');
const hours= document.querySelector('#hours');
const minutes= document.querySelector('#minutes');
const seconds= document.querySelector('#seconds');

 function fun(){
const newDate= new Date().getFullYear();
console.log(newDate+1);

const newYear=new Date(`January 1 ${newDate+1} 00:00:00`)
console.log(newYear);

const nowDate=new Date();
console.log(nowDate);

const diff=newYear-nowDate;
console.log(diff);

const d=Math.floor(diff/1000/60/60/24);
console.log(d)
const h=Math.floor((diff/1000/60/60)%24)
console.log(h)
const m=Math.floor((diff/1000/60)%60)
console.log(m)
const s=Math.floor((diff/1000)%60)
console.log(s)
days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
}
setInterval(fun);
