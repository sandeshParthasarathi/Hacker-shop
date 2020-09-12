import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, UpdateMode} from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {}

  addToCart(item){
    item.cartQuantity = 1
    this.onAddToCart.emit(item)
    console.log(item)
  }

  addItemToCart(item){
    item.cartQuantity = item.cartQuantity + 1;
    this.onQuantityUpdate.emit(item)
  }

  removeItemToCart(item){
    item.cartQuantity = item.cartQuantity - 1;
    this.onQuantityUpdate.emit(item)
  }
}


