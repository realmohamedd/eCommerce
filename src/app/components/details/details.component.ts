import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/service/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule, CurrencyPipe,NgFor,NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy{

  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService =inject(CartService)
  private readonly _ToastrService =inject(ToastrService)

  _getSpecificProducts !:Subscription;
  detailsProduct:Iproduct | null  = null;

  customOptionsDetails: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true, // when open site slider animate
    autoplayTimeout:2000, // animate every 3s
    autoplayHoverPause:true, // when hover by mouse slider stop 
    dots: false,
    navSpeed: 700,
    navText: [`<i class="fa-solid fa-chevron-left text-main"></i>`, `<i class="fa-solid fa-chevron-right text-main"></i>`],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
 
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(p)=>{
          let idProduct = p.get('id');


          // logic api --- call Api Specific -- getSpecificProducts
          this._getSpecificProducts = this._ProductsService.getSpecificProducts(idProduct).subscribe({
            next:(res)=>{
              console.log(res.data)
              this.detailsProduct = res.data;
            },
            error:(err)=>{
              console.log(err)
            }
          })

          console.log(p.get('id'))
        }
      })
  }


  ngOnDestroy(): void {
      this._getSpecificProducts?.unsubscribe();
  }

  isLoading: { [productId: string]: boolean } = {};  

addCart(id: string): void {
  if (!this.isLoading[id]) {  
    this.isLoading[id] = true; 

    this._CartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading[id] = false;  
        this._ToastrService.success(res.message, 'FrechCart')
        this._CartService.cartNumber.set(res.numOfCartItems)
      }

      
    });
  }
}
}
