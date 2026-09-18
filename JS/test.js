//reverse each word
let word="hello world"
let reverse= word.split(" ").map(word=>word.split("").reverse().join("")).join();
console.log(reverse);
//first non repeating character
let rep="aabbcd";
for(let char of rep){
    if(rep.indexOf(char)===rep.lastIndexOf(char)){
        console.log(char);
        break;
    }
}
//character freqency
let chara="hello";
let count=0;
let freq={};
for(let char of chara){
    freq[char]=(freq[char]||0)+1;
    count++;
}
console.log(freq);
console.log(count);
//check unique character or not
let string="helo";
let unique=true;
for(let char of string){
    if(string.indexOf(char)!==string.lastIndexOf(char)){
        unique=false;
        break;
    }
}
console.log(unique);
//remove full duplicate characters
let dupli="hello";
for(let char of dupli){
    if(dupli.indexOf(char)===dupli.lastIndexOf(char)){
        console.log(char);
    }
}
//remove only one duplicate character
let str = "hello";
let result = "";
for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);

//find duplicate characters
let duplicate="hello";
let dup=0;
for(let char of duplicate){
    if(duplicate.indexOf(char)!==duplicate.lastIndexOf(char)){
        console.log(char);
        dup++;
    }
}
console.log(dup);

//
let non=new Set("hello");
for(let char of non){
    console.log(char);
}
