function isIsogram(str){
    let temp=0;
    for(let i=0;i<str.length;i++){
      for(let j=str.length-1;j>=0;j--){
        if(str[i].toLowerCase()==str[j].toLowerCase())
            if(i!=j)
            return false;
      }
    }
    return true;
  }
  console.log(isIsogram("aba"));


  function isIsogram(str){
    if(str=="")
      return true;
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++)
        if(str.indexOf(str[i])!==str.lastIndexOf(str[i]))
            return false;
    return true;
  }
  console.log(isIsogram("moOse"));