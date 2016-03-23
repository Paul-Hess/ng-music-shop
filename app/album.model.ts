
export class Album {
  code: string;
  copies: number[];
  constructor(public name: string, public artist: string, public price: number, public genre: string) {
    this.code = name + '/' + artist + '/' + genre;
    this.copies = new Array(Math.floor(Math.random() * 10))
    .join().split(',')
    .map(function(item, index){ return index++;})
  }
  addCopies(){
    this.copies.push(this.copies.length);
  }
  removeCopy(){
    this.copies.splice(this.copies.length -1 , 1);
  }
}
