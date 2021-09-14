let book={
    pages:100,
    name:"raed",
    price:300,
    age:"5+",
    author:"sharon"
}
let printBook=book=>{
    console.log(`The book ${book.name} was written by ${book.author} and its for ${book.age} y.o`);
}
printBook(book);