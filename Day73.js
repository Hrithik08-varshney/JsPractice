//shuffle string

//==> brute force approach

var restoreString = function(s, indices) {
    let arr=[];
    for(let i=0;i<indices.length;i++){
        arr[indices[i]]=s[i];
    }
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
};

// console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));
console.log(restoreString("abc",[0,1,2]));