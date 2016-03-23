import { Component } from 'angular2/core';
import { CatalogComponent } from './catalog.component';
import { ShopCartComponent } from './shop-cart.component';
import { Album } from './album.model';

@Component ({
  selector: 'my-app',
  directives: [CatalogComponent, ShopCartComponent],
  template: `
    <div class="container">
      <catalog (addedAlbums)="sendToCart($event)" [albumList]="catalog"></catalog>
      <shop-cart class="cart" [cart]="shoppingCart" [totalPrice]="counter">
      </shop-cart>
    </div>
  `
})

export class AppComponent {
  catalog: Album[] = [];
  shoppingCart: Album[] = [];
  counter: number = 0;
  constructor(){
    this.catalog.push(
      new Album('album0', 'artist0', 0, 'rock'),
      new Album('album1', 'artist1', 1, 'synth pop'),
      new Album('album2', 'artist2', 2, 'world'),
      new Album('album3', 'artist3', 0, 'cascadian black metal'),
      new Album('album4', 'artist4', 0, 'country'),
      new Album('album5', 'artist5', 0, 'country'),
      new Album('album6', 'artist6', 0, 'synth pop'),
      new Album('album7', 'artist7', 0, 'techno'),
      new Album('album8', 'artist8', 0, 'hip hop')
    );
  }
  sendToCart(album: Album){
    this.shoppingCart.push(album);
    this.counter+=album.price;
  }
}
