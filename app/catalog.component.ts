import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import {ArtistPipe} from './artist.pipe';

@Component ({
  selector: 'catalog',
  inputs: ['albumList'],
  outputs: ['addedAlbums'],
  pipes: [ArtistPipe],
  template: `
      <h1>Music Store</h1>
      <form class="form">
      <input #findArtist>
      <button (click)="setFilter(findArtist.value)">search</button>
      </form>
    <div class='catalog'>
      <div class="album" *ngFor="#currentAlbum of albumList | artist:artistFilter" >
        <h2> {{currentAlbum.name}}</h2>
        <h3> {{currentAlbum.artist}}</h3>
        <h4> \${{currentAlbum.price}}</h4>
        <h4> {{currentAlbum.genre}}</h4>
        <h4>In stock: {{currentAlbum.copies.length-1}}</h4>
        <form>
        <select #copies>
        <option *ngFor="#n of currentAlbum.copies">{{n}}</option>
        </select>
        <button (click)="addToCart(currentAlbum, copies.value)">Add To Cart</button>
        </form>
      </div>
    </div>
  `
})


export class CatalogComponent {
addedAlbums: EventEmitter<Album>;
albumList: Album [];
artistFilter: string = '';
  constructor(){
    this.addedAlbums = new EventEmitter();
  }
  setFilter(input: string) {
    this.artistFilter = input;
  }
  addToCart(album: Album, copies){
    for(var i=0; i<copies; i++){
      album.removeCopy();
      this.addedAlbums.emit(album);
    }
  }
}
