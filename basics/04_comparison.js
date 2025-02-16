console.log(2>1); // true
console.log(2==1);//false
console.log(2<1);// false
console.log(2!=1);// true
console.log(2>=1);// true
console.log(2<=1);//false 

console.log(null==0); // false 
console.log(null>=0); // true because null ke case me greater aur smaller ke symbols hone par  null zero mei convert ho jaata hai  
console.log(null!=0); // true 


console.log(undefined==0);  // false 
console.log(undefined>=0);  // false
console.log(undefined!=0); // true

// === importance (it strictly checks the value as well as the datatype also )
console.log("2"=== 2) // false because value is true but datatype is diff 
console.log("2"==2) // true because it checks inly the value 