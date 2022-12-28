const { template } = require('@babel/core')
//write your student id, firstname, and lastname here 6413050053 pongpairoch suphaphon
class BookMark {
    constructor(isbn,totalPages=0){
      this.isbn=isbn
      this.totalPages=totalPages
      this.bookMarks=[]
    }
    addBookMark(pageNumber){
      if (pageNumber <= 256 && pageNumber >0) {
        this.bookMarks.push(pageNumber)
      }
     if (pageNumber < this.totalPages || pageNumber> this.totalPages) {
      return this.bookMarks.length
     }
    }
    removeBookMark(pageNumber){
      let before = this.bookMarks.length // 10
      this.bookMarks = this.bookMarks.filter(x => x !== pageNumber)// 
     return before === this.bookMarks.length ? undefined : pageNumber
    }
    goToFirstBookMark(){
      return this.bookMarks.length !== 0?this.bookMarks[0]:undefined
    }
    goToLastBookMark(){
      let last = this.bookMarks.length-1
      return this.bookMarks.length !== 0? this.bookMarks[last]: undefined
    }
    getBookMarks() {
      return this.bookMarks
    }
}

//let a = new BookMark('978-7-222-64532-2', 256)
// console.log();
// console.log(a.addBookMark(2));
//a.addBookMark(1)
//a.addBookMark(2)
// console.log(a.removeBookMark(1));
//console.log(a.bookMarks);
// console.log(a.removeBookMark(1));
// console.log(a.goToFirstBookMark());
//console.log(a.goToLastBookMark());
module.exports = BookMark
