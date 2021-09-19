var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
];
const canBeRead=libary=>libary.filter(val=>val.readingStatus)
const cbPrint=arr=>{
    arr.forEach(book => {
        console.log(`${book.title} is a book writte by ${book.author} and its avilable to read-readingStatus:${book.readingStatus}\n`);
        
    });
}
cbPrint(canBeRead(library));