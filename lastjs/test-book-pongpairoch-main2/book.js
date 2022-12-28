const { template } = require('@babel/core')
//your student id 64130500053, pongpairoch, and suphaphon here

class Book {
    constructor(isbn, title="untitled", ebook=false){
        this.isbn=isbn
        this.title=title
        this.ebook=ebook
        this.authors=[]
    }
    addAuthor(fn, ln){
        return this.authors.push({ firstname:fn,lastname:ln})
    }
    getFirstAuthor() {
        return this.authors.length === 0?undefined:this.authors[0]
    }
    getCoAuthors(){
        return this.authors.length === 0?this.authors:this.authors.slice(1)
    }
    findAuthor(firstname, lastname){
        for (let index = 0; index < this.authors.length; index++) {
            if (this.authors[index].firstname.toLowerCase() == firstname.toLowerCase() && this.authors[index].lastname.toLowerCase() == lastname.toLowerCase()) {
                return this.authors[index]
            }
        }
    }
    hasEbook() {
        return this.ebook
    }
}


module.exports = Book
