import { Component} from 'angular2/core';
import { Album } from './album.model';
import { CatalogComponent } from './catalog.component';


@Component({
  selector: 'shop-cart',
  inputs: ['cart', 'totalPrice'],
  template: `
   <h1>Shop Cart</h1>
    <div class="cart-item" *ngFor="#album of cart" >
      <p>{{album.name}}, {{ album.artist}} : <span class="price "> \${{album.price}}</span> </p>
      <button (click)="removePurchase(album)">X</button>
    </div>
    <hr>
    <h4> total: \${{ totalPrice }} </h4>
  `
})


export class ShopCartComponent {
  cart: Album[];
  totalPrice: number;

  removePurchase(album: Album) {
    this.cart.splice(this.cart.indexOf(album), 1);
    album.addCopies();
    this.totalPrice -= album.price;
  }

}
