const selectionSort = (arr) => {
     const n = arr.length;
     for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;   //getting the smallest one
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]] //swapping the smallest with the selected element
        }
     }
     return arr;
}

console.log(selectionSort([29,14,10,23,14,30]))