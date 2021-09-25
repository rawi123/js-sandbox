// const mumbling=str=>{
//     str=str.split("")
//     let str1="";
//     for (let i=0;i<str.length;i++)
//         str1+=str[i].repeat(i+1)
//     return str1
// }
// function mumbling1(str){
//     str=str.split("")
//     str=str.map((val,i)=>{
//         return val.repeat(i+1)
//     })
//     return str.join("")
// }
// const mumbling2=str=>{
//     str=str.split("")
//     return str.reduce((temp,val,i)=>{
//         for(let j=0;j<i+1;j++)
//             temp+=val
//         return temp
//     },"")
// }
// console.log(mumbling2("rawi"));

// 6.2
// const duplicates=str=>{
//     str=str.toLowerCase().split("").sort()
//     let temp=[]
//     for (let i=0;i<str.length;i++)
//         if(!temp.includes(str[i]) &&str.lastIndexOf(str[i])!==i)
//             temp.push(str[i])
//     return temp.length
// }
// const duplicates1=str=>{
//     str=str.toLowerCase().split("").sort()
//     return str.reduce((temp,val,i)=>{
//         if(str.lastIndexOf(val)!==i &&!temp.includes(val)) temp.push(val);return temp
//     },[])
// }

const duplicates2=str=>{
    str=str.toLowerCase().split("").sort()
    let temp=0

    for (let i=0;i<str.length-1;i++){
        if(str[i]===str[i+1]){
            temp+=1
            while(str[i]===str[i+1])
                i++;
        }
    }
    return temp;
}
// console.log(duplicates1("aaabbcadae"));

//6.3
// const organize=(s1,s2)=>{
//     let str=new Set((s1+s2).split("").sort());
//     return [...str].join("")
// }
// const organize1=(s1,s2)=>{
//     let combineArr=(s1+s2).split("").sort()
//     return combineArr.filter((val,i)=>combineArr.indexOf(val)===i).join("")
// }
// const organize2=(s1,s2)=>{
//     let str=(s1+s2).split("").sort()
//     return str.reduce((temp,val)=>{
//         return !temp.includes(val)?(temp+=val,temp):temp
//     },"")
// }
// console.log(organize2("xyaabbbccccdefww","xxxxyyyyabklmopq"));


//6.4
// const isogram=str=>{
//     let temp=duplicates2(str)
//     return temp===0
// }

// const isogram1=str=>{
//     str=str.toLowerCase().split("")
//     return !str.some((val,i)=>str.indexOf(val)!==i)
// }
// console.log(isogram1("Dermatoglyphics"));
