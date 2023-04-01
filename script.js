//your code here
let price =document.querySelectorAll("tr td:nth-child(2)");
let sum = 0;
price.forEach((item)=>{
	// console.log(item.innerText);
	sum += +item.innerText;	
})
console.log(sum);
let tr = document.createElement("tr");
 let table = document.getElementById("table");
tr.innerHTML=sum;
table.appendChild(tr);
