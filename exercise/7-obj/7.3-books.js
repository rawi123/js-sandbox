const book1={
    name:"rich dad poor dad",
    author:"robert",
    year:1999
}
const book2={
    name:"harry poter",
    author:"jk rolling",
    year:1998
}
const bookUtils={}
bookUtils.getFirstPublished=function(book1,book2){
    return Math.min(book1.year,book2.year);
}
bookUtils.setNewEdition=function(book,editionYear){
    book.latestEdition=editionYear;
}
bookUtils.setLanguage=function(book,lang){
    book.lang=lang;
}
bookUtils.setLanguage=function(book,lang,trans){
    book.translation={language:lang,translator:trans}
}
bookUtils.setPublisher=function(book,name,location){
    book.publisher={
        publisherName:name,
        publishLocation:location
    }
}
bookUtils.isSamePublisher=function(book1,book2){
    return (book1.publisher.publishLocation===book2.publisher.publishLocation && book1.publisher.publisherName===book2.publisher.publisherName)
}


console.log(bookUtils.getFirstPublished(book1,book2));
bookUtils.setNewEdition(book1,2014);
bookUtils.setLanguage(book1,"eng");
bookUtils.setLanguage(book1,"hebrew","rawi");
bookUtils.setPublisher(book1,"samer","israel");
bookUtils.setPublisher(book2,"samer","israel");
console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1,book2));