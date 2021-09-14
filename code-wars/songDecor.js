function songDecoder(song){
    let t="";
    let flag=true;;
    while(flag){
        let temp=song.indexOf("WUB");
        if(temp===-1)
            flag=false;
        else{
            if(song[temp-1]!==" ")
                song=song.slice(0,temp)+" "+song.slice(temp+3);
            else
            song=song.slice(0,temp)+song.slice(temp+3);
        }
    }
    return song.trim();
  }
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")); 
console.log(...[1,2,3]);


      // for(let i=0;i<song.length;i++){
    //   if(song.indexOf("WUB")!==i && song.indexOf("WUB")!==i+1 && song.indexOf("WUB")!==i+2){
    //       str+=song[i];
    //   }
    //   else
    // }