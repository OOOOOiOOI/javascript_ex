const { template } = require('@babel/core')
//your student id, firstname, and lastname here
// 64130500053
class BookStore {
  //write code here
  constructor(){
    this.stores =[]
  }
  findBookIndex(isbn){
    return this.stores?.findIndex(e => e.isbn === isbn)//ค้นหาตำแหน่งที่หนังสือตรงกับชื่อ
  }
  addNewBook(isbn, stocks){
    //1 เช็คชื่อ stores เก็บข้อมูล ที่มีชื่อซ้ำมั้ย
    let status = stocks ;
    this.stores?.findIndex(e => e.isbn === isbn)=== -1?this.stores.push({isbn:isbn,stocks:stocks}):status = -1
   return status
  }
  sellBook(isbn, quantity){
    let status = quantity;
    if (this.stores?.findIndex(e => e.isbn === isbn)=== -1) {
      return -1
    }
    else{
     let indexOfstocks = this.stores.findIndex(x => x.isbn === isbn) 
      this.stores[indexOfstocks].stocks < quantity? status = 0: this.stores[indexOfstocks].stocks -= quantity 
    }
    return status
  }
}
// let a =new BookStore
// a.stores = [{ isbn: '978-5-028-18098-2', stocks: 10 }]
// console.log(a.findBookIndex("123"));
// console.log(a.addNewBook('978-5-028-18098-0',10));
// console.log(a.addNewBook('978-5-028-18098-0',10));
// console.log(a.addNewBook('978-5-028-18098-7',100));
// console.log(a.addNewBook('978-5-028-18098-7',100));
// console.log(a.stores);
// console.log(a.sellBook('978-5-028-18098-2', 11));

module.exports = BookStore
