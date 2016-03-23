import { Component } from 'angular2/core';
import { Album } from './album.model';
import {ArtistPipe} from './artist.pipe';

@Component ({
  selector: 'catalog',
  inputs: ['albumList'],
  pipes: [ArtistPipe],
  template: `
    <div class='catalog'>
      <div class="album" *ngFor="#currentAlbum of albumList | artist:artistFilter" >
      <h2> {{currentAlbum.name}}</h2>
      <h3> {{currentAlbum.artist}}</h3>
      <h4> \${{currentAlbum.price}}</h4>
      <h4> {{currentAlbum.genre}}</h4>
      </div>
    </div>


  `
})


export class CatalogComponent {
albumList: Album [];
artistFilter: string = '2';
  constructor(){}
}
