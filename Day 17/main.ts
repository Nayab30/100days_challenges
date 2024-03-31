//Question 49:Function with rest parameters

function hobbies(hobby:string){
    return`Enjoy the ${hobby}`
}
console.log(hobbies("reading"))

// Question 50:Multiline template literals

let idealday =`My ideal Day
1.celebrate birthday with my friends
2.Go to for shopping
3.Eat dinner in five star hotel`

console.log(idealday)

//Question 51:Refactoring to arrow function

function areaRectangle(length:number,breadth:number){
    return length * breadth
}
console.log(areaRectangle(40,20));