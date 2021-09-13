console.log("rawi");
let siblings=window.prompt("'How many siblings do you have?");
siblings=parseInt(siblings);
if(siblings===1){
    console.log("1 subling!");
}
else if(siblings>1){
    console.log("more than 1 sibling");
}
else{ console.log("no siblings");}
// triple === also checks for the type of it should use always - else it will give us true for not the same type vars