// Box Class ---> numOfBooks it is function
function Box(height, width, volume, metaril) {
  this.Height = height;
  this.Width = width;
  this.Volume = volume;
  this.Metaril = metaril;
  this.Content = [];
  this.numOfbooks = 0;
}
// len of array content
Box.prototype.getNumBooks = function () {
  return this.Content.length;
};

//delete book
Box.prototype.deleteBook = function (nameOfBook) {
  var getIndex = 0;
  // this.Content.forEach(function(obj , index){
  //    if( obj.name == nameOfBook)
  //    {
  //     getIndex = index;
  //    }
  // });
  for (var i = 0; i < this.Content.length; i++) {
    if (this.Content[i].Title == nameOfBook) {
      getIndex = i;
      this.numOfbooks = this.Content.length;
      break;
    }
  }

  this.Content.splice(getIndex, 1);
};

//add into content
Box.prototype.addBooks = function (Bookobj) {
  this.Content.push(Bookobj);
};

// toString override
Box.prototype.toString = function () {
  return `Height of Box is ${this.Height},
    Width of Box is ${this.Width},
    The Box have ${this.getNumBooks()} Books`;
};

//Value of
Box.prototype.valueOf=function(){
    return this.getNumBooks();
}

//Book class
function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  this.Title = title;
  this.NumofChapters = numofChapters;
  this.Author = author;
  this.NumofPages = numofPages;
  this.Publisher = publisher;
  this.NumofCopies = numofCopies;
}



///////////test//////////////
var book1 = new Book("Tatins", 4, "Jones",125,"HBO",2000);
var book2 = new Book("Dreamers", 6, "Jones",400,"Apple+",4000);
var book3 = new Book("Harry Potter", 9, "Muller",4000,"Unviversal",9000);


var Box1 = new Box(25, 30, 40, "plastic");
var Box2 = new Box(15,30,50,"Wood");

Box1.addBooks(book1);
Box1.addBooks(book2);
Box1.addBooks(book3);
Box2.addBooks(book2);
console.log(Box1.getNumBooks());
Box1.deleteBook("Dreamers");
console.log(Box1.getNumBooks());
console.log(Box2.getNumBooks());
console.log(Box1.toString());
console.log(Box1);
console.log(Box2);
console.log(Box1 + Box2);
document.write(Box1)//1,2,3
