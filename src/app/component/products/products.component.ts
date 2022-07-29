import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public productlist: any;
  constructor(private api: ApiService, private CartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productlist = res;
      })
  }
  addtocart(item: any) {
    this.CartService.addtoCart(item);
  }
}
