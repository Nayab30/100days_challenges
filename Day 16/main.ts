// Question 46:Enhanced Laptop Object
let laptop ={
    make :"lenovo",
    model:"t510",
    year:"2022",
    describe: function(){
        console.log(`This is a ${laptop.year} ${laptop.model} ${laptop.make} `)
    }
}
laptop.describe();

// Question 47:Advanced Array Destructuring

let laptops =[
    {
        make:"lenovo",
        model:"t510",
        year:"2019"
    },
    {
        make:"apple",
        model:"t444",
        year:"2017"
    }
]
let [laptop1,laptop2] = laptops
console.log(laptop1);
console.log(laptop2);

// Question 48:Combining array with spread operator

let laptopPrice1=[1100,2222,1200]

let laptopPrice2=[1300,2000,1700]

let combinePrice = [laptopPrice1 , laptopPrice2]

console.log(combinePrice)





