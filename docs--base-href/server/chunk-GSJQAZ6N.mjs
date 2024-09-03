import './polyfills.server.mjs';
import{a as I}from"./chunk-4Z7KVGEI.mjs";import{a as P}from"./chunk-4JOTGNO5.mjs";import"./chunk-GTSSCL6B.mjs";import"./chunk-WVUI6REW.mjs";import{e as E}from"./chunk-T6LSPTFU.mjs";import"./chunk-2TP74RLZ.mjs";import{$ as x,Fb as s,Gc as F,Hb as u,La as h,Nb as y,Pa as l,Pb as k,Tb as w,Vb as T,X as f,gb as v,ja as p,ka as _,mb as b,nb as S,ob as r,pb as n,qb as m,tb as g,vb as d,wb as C}from"./chunk-DMXLVJ6G.mjs";import"./chunk-VVCT4QZE.mjs";var D=(a,o)=>o.product.id,V=a=>["/orders",a];function $(a,o){if(a&1){let c=g();r(0,"div",5)(1,"div",7)(2,"div"),m(3,"img",8),n()(),r(4,"div",9)(5,"div")(6,"h3",10),s(7),n(),r(8,"p",11),s(9),n(),r(10,"button",12),d("click",function(){let e=p(c).$implicit,i=C();return _(i.removeItem(e.product.id))}),m(11,"i",13),s(12," Remove"),n()(),r(13,"div",14)(14,"span",15),d("click",function(){let e=p(c).$implicit,i=C();return _(i.updateCount(e.product.id,e.count+1))}),m(15,"i",16),n(),r(16,"span"),s(17),n(),r(18,"span",15),d("click",function(){let e=p(c).$implicit,i=C();return _(i.updateCount(e.product.id,e.count-1))}),m(19,"i",17),n()()()()}if(a&2){let c=o.$implicit;l(3),v("src",c.product.imageCover,h)("alt",c.product.title),l(4),u(" ",c.product.title," "),l(2),u("Price: ",c.price," "),l(8),u(" ",c.count," ")}}var G=(()=>{let o=class o{constructor(){this._CartService=f(I),this._ToastrService=f(P),this.cartDetails={}}ngOnInit(){this._CartService.getProductsCart().subscribe({next:t=>{console.log(t.data),this.cartDetails=t.data},error:t=>{console.log(t)}})}removeItem(t){this._CartService.deleteSpecificCartItem(t).subscribe({next:e=>{console.log(e),this.cartDetails=e.data,this._ToastrService.success("Product removed successfully from your cart","FrechCart"),this._CartService.cartNumber.set(e.numOfCartItems)},error:e=>{this._ToastrService.error("Product not removed from your cart.  Please try again.","FrechCart"),console.log(e)}})}updateCount(t,e){this._CartService.updateProductQuantity(t,e).subscribe({next:i=>{console.log(i),this.cartDetails=i.data},error:i=>{console.log(i)}})}clearItems(){this._CartService.clearCart().subscribe({next:t=>{console.log(t),t.message=="success"&&(this.cartDetails={},this._CartService.cartNumber.set(0)),this._ToastrService.success("Your cart has been cleared.","FrechCart")},error:t=>{console.log(t),this._ToastrService.error("Failed to clear the cart. Please try again.","FrechCart")}})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=x({type:o,selectors:[["app-cart"]],standalone:!0,features:[y],decls:13,vars:7,consts:[[1,"bg-main-light","rounded-4","shadow","p-4","my-2","w-75","mx-auto"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"text-main"],[1,"row","mb-1","border-bottom"],[1,"btn","btn-main",3,"routerLink"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"h5"],[1,"m-0","text-main"],[1,"text-danger","cursor-pointer","p-0","btn",3,"click"],[1,"fa-solid","fa-trash"],[1,"d-flex","align-items-center","gap-2"],[1,"text-main","cursor-pointer",3,"click"],[1,"fa-solid","fa-circle-plus","fa-2xl"],[1,"fa-solid","fa-circle-minus","fa-2xl"]],template:function(e,i){e&1&&(r(0,"section",0)(1,"div",1)(2,"h1",2),s(3,"Shop Cart"),n(),r(4,"button",3),d("click",function(){return i.clearItems()}),s(5,"Clear Cart"),n()(),r(6,"p",4),s(7),w(8,"currency"),n(),b(9,$,20,5,"div",5,D),r(11,"button",6),s(12,"Orders"),n()()),e&2&&(l(7),u("Total Cart Price: ",T(8,2,i.cartDetails.totalCartPrice,"GBP")," "),l(2),S(i.cartDetails.products),l(2),v("routerLink",k(5,V,i.cartDetails._id)))},dependencies:[F,E]});let a=o;return a})();export{G as CartComponent};
