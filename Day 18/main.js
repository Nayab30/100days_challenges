//Question 52:Make a smartphone object
let smartPhone = {
    brand: "Realme",
    model: "RMX2189",
    Ram: "3.00Gb",
    Rom: "32",
    size: "5 inch",
    battery: "24 hr"
};
console.log(smartPhone);
// Question 53:Pulling Apart a nested object
let skills = {
    languages: ["typescript", "javascript", "c++"],
    tools: ["git", "weback"],
    frameworks: ["react", "vue"]
};
console.log(`Computer programming language is ${skills.languages[0]} work with tool ${skills.tools[1]} and framwork ${skills.frameworks[0]} `);
//Question 54:Making Flexible Object Keys
function objectKey(key, value) {
    console.log(key + value);
}
objectKey("theme", "dark");
export {};
