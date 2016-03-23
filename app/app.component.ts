import { Component } from 'angular2/core';
import { CatalogComponent } from './catalog.component';
import { Album } from './album.model';

@Component ({
  selector: 'my-app',
  directives: [CatalogComponent],
  template: `
    <h1>Music Store</h1>
    <catalog [albumList]="catalog"></catalog>
  `
})

export class AppComponent {
  public catalog: Album[] = [];
  constructor(){
    this.catalog.push(
      new Album('album0', 'artist0', 0, 'genre0'),
      new Album('album1', 'artist1', 1, 'genre1'),
      new Album('album2', 'artist2', 2, 'genre2'),
      new Album('album3', 'artist3', 0, 'genre3'),
      new Album('album4', 'artist4', 0, 'genre4'),
      new Album('album5', 'artist5', 0, 'genre5'),
      new Album('album6', 'artist6', 0, 'genre6'),
      new Album('album7', 'artist7', 0, 'genre7'),
      new Album('album8', 'artist8', 0, 'genre8')
    );
  }
}
