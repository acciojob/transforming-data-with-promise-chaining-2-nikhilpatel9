//your JS code here. If required.
const inpt=document.getElementById("ip");
const outpt=document.getElementById("output");
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
	const prm= new Promise((resolve)=>{
		let num=Number(inpt.value);
		setTimeout(()=>{
			
			outpt.textContent=`Result:${num}`;
			
			resolve(num);
			
		},2000);
	}).then((num)=>{
		return new Promise((resolve) => {
		setTimeout(()=>{
			num*=2;
			outpt.textContent=`Result:${num}`;
			resolve(num);
		},2000);
		});
	}).then((num)=>{
		return new Promise((resolve) => {
		setTimeout(()=>{
			num*=2;
			outpt.textContent=`Result:${num}`;
			resolve(num);
		},1000);
		});
	}).then((num)=>{
		return new Promise((resolve) => {
		setTimeout(()=>{
			num-=3;
			outpt.textContent=`Result:${num}`;
			resolve(num);
		},1000);
		});
	}).then((num)=>{
		return new Promise((resolve) => {
		setTimeout(()=>{
			num/=2;
			outpt.textContent=`Result:${num}`;
			resolve(num);
		},1000);
		});
	}).then((num)=>{
		return new Promise((resolve) => {
		setTimeout(()=>{
			num+=10;
			outpt.textContent=`Result:${num}`;
			resolve(num);
		},1000);
		});
	}).then((num)=>{
		outpt.textContent=`Final Result:${num}`;
	})
})