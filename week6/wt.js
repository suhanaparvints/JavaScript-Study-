//1. Print String
// Write a program to print a given string.

// 2. Find Length
// Write a program to find the length of a string.

// 3. Reverse String
// Write a program to reverse a string using reverse().

// 4. Reverse Without reverse()
// Write a program to reverse a string without using the reverse() method.

// 5. Check Palindrome
// Write a program to check whether a string is a palindrome.

// 6. Check Two Strings Same
// Write a program to check whether two strings are exactly the same.

// 7. Check Same Characters / Anagram
// Write a program to check whether two strings are anagrams.

// 8. Count Vowels
// Write a program to count the number of vowels in a string.

// 9. Count Specific Character
// Write a program to count how many times a specific character appears in a string.

// 10. Find Duplicate Characters
// Write a program to find all duplicate characters in a string.

// 11. Remove Duplicate Characters
// Write a program to remove duplicate characters from a string.

// 12. Check Unique Characters
// Write a program to check whether all characters in a string are unique.

// 13. Character Frequency
// Write a program to count the frequency of every character in a string.

// 14. First Non-Repeating Character
// Write a program to find the first character that appears only once in a string.

// 15. Reverse Each Word
// Write a program to reverse each word in a sentence while keeping the word order unchanged.

//1.
let string="hello";
console.log(string);
//2.
console.log(string.length);
//3.
let reverse=string.split("").reverse().join("")
console.log(reverse);
//4.
let wotreverse="";
for(let i=string.length-1;i>=0;i--){
    wotreverse+=string[i];
}
console.log(wotreverse);

//5.
let pali="madam";
let ispal=pali.split("").reverse().join("");
console.log(pali);
console.log(ispal===pali);
//without reverse()
let rev="";
for(let i=pali.length-1;i>=0;i--){
    rev+=pali[i];
}
console.log(rev);
console.log(rev===pali);

//6.
let str1="suhana"
let str2="suhana"
console.log(str1===str2);
//or
let str3="suhana"
let str4="parvin"
let chek= String(str3===str4)
console.log(chek);

//7.
let ana1="listen"
let ana2="silent"
let result1=ana1.split("").sort().join("")
let result2=ana2.split("").sort().join("")
console.log(result1===result2);
//without sort()
let freq={};
for(let char of ana1){
    freq[char]=(freq[char]||0)+1;
}
for(let char of ana2){
    freq[char]=(freq[char]||0)-1;
}

let isAnagram = true;

for(let char in freq){
    if(freq[char]!==0){
        isAnagram=false;
        break;
    }
}
console.log(isAnagram);

//8.
let vow="Programmaing JavaScript"
let change=vow.toLowerCase();
console.log(change);
let count=0;
for(let char of change){
    if("aeiou".includes(char)){
        count++;
    }
}
console.log(count);

//9.
//count a specific character 
let str10 = "hello";
let count10 = 0;
for (let char of str10) {
    if (char === "l") {
        count10++;
    }
}
console.log(count10);
// repeated character count
let charac="programming"
let count1=0;
let fre={};
for(let char of charac){
    fre[char]=(fre[char]||0)+1;
}
console.log(fre);
for(let char in fre){
    if(fre[char]>1){
     console.log(char);
     count1++;
    }
}
console.log(count1);

//10.
//which one is duplicate
let dupli="hello"
let frequ={};
for(let char of dupli){
    frequ[char]=(frequ[char]||0)+1;
}
console.log(frequ);
for(let char in frequ){
    if(frequ[char]>1){
        console.log(char);
    }
}
//or 
let str = "hello";
for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
        console.log(char);
    }
}


//11.
let unique="programming"
let sets= new Set(unique)
for(let char of sets){
console.log(char);
}

//or
//remove duplicate character
let str0 = "hello";
let result0 = "";
for (let char of str0) {
    if (!result0.includes(char)) {
        result0 += char;
    }
}
console.log(result0);

//12.
//check unique characters
let uni="hellosuhana"
let sets1= new Set(uni)
let counts=0;
if (sets1.size === uni.length) {
    console.log("All characters are unique");
} else {
    console.log("Duplicate characters exist");
}

//13.

//14.
let nonrep="aabbcd"
for(let char of nonrep){
    if(nonrep.indexOf(char)===nonrep.lastIndexOf(char)){
        console.log(char);
        break;
    }
}

//15.
let word="hello world";
let rever="";
for(let i=word.length-1;i>=0;i--){
    rever+=word[i]
}
console.log(rever);
//with reverse()
let reversing=word.split(" ").reverse().join(" ");
console.log(reversing);
//
let anoth=word.split(" ").map(word=>word.split("").reverse().join("")).join();
console.log(anoth);