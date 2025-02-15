//square(5)
//Anonymous function

const square=function (n)
{
    return n*n;
}

console.log("Square is ",square(5))

const add=function (a,b)
{
    return a+b
}
console.log(add(12,67))
//printName("Nisha")

// ========================================

 const area=(l,b)=> l*b;
 console.log("area is ",area(2,5))
// ========================================

const isEven=(n)=>n%2==0;
console.log("Even Or odd",isEven(6))
// ===========================================
// area of circle : pi*r*r

const areaOfCircle=(r)=>{

   return Math.PI*r*r;
}

console.log(areaOfCircle(5))


