//your code here
// let price =document.querySelectorAll("tr td:nth-child(2)");
let price =document.querySelectorAll('[data-ns-test="price"]');
let sum = 0;
price.forEach((item)=>{
	// console.log(item.innerText);
	sum += +item.innerText;	
})
console.log(sum);
 let total = document.getElementById("grandtotal");
total.innerHTML=sum;

