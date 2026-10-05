//bubble
const bubbleSort=(arr)=>{
const n=arr.length;
for(let i=0;i<n;i++){
    for(let j=0; j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
  return arr;
}
console.log(bubbleSort([29,10,5,22]));
//selection
const selectionSort=(arr)=>{
const n=arr.length;
for(let i=0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }
    if(minIndex!==i){
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
}
return arr
}
console.log(selectionSort([29,10,5,22]));
//insertion
const insertionSort=(arr)=>{
    const n= arr.length;
    for(let i=1;i<n;i++){
        const key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr
}
console.log(insertionSort([29,10,5,22]));