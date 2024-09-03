import{a as A}from"./chunk-LTH2XR2T.js";import{a as w}from"./chunk-IEDRN2C6.js";import"./chunk-MMKAGRZ3.js";import"./chunk-OTHD5K73.js";import"./chunk-5RERRQ3R.js";import{Db as x,Eb as t,Fb as m,Gb as s,Hb as f,Ka as O,Mb as h,Oa as o,Sb as u,Ub as v,Vb as y,_ as p,ba as _,db as l,fb as c,nb as r,ob as e,pb as C,rc as S,sc as E,tc as I,vb as P,wc as b,yb as M}from"./chunk-QOXXASHQ.js";function F(i,d){if(i&1&&(r(0,"div",16),C(1,"img",17),r(2,"div",18)(3,"p",19),t(4),e(),r(5,"p",20),t(6),e(),r(7,"p",21),t(8),e()()()),i&2){let n=d.$implicit;o(),M("alt",n.product.title),c("src",n.product.imageCover,O),o(3),m(n.product.title),o(2),s("Price: $",n.price,""),o(2),s("Quantity: ",n.count,"")}}function T(i,d){if(i&1&&(r(0,"div",5)(1,"div",6)(2,"h3",7),t(3),e(),r(4,"span",8),t(5),u(6,"date"),e()(),r(7,"div",9)(8,"div",10)(9,"p")(10,"strong"),t(11,"Total Price:"),e(),t(12),e(),r(13,"p")(14,"strong"),t(15,"Payment:"),e(),t(16),e(),r(17,"p")(18,"strong"),t(19,"Paid:"),e(),r(20,"span",11),t(21),e()(),r(22,"p")(23,"strong"),t(24,"Delivered:"),e(),r(25,"span",11),t(26),e()()(),r(27,"div",12)(28,"h4"),t(29,"Shipping Address"),e(),r(30,"p"),t(31),e(),r(32,"p")(33,"strong"),t(34,"Phone:"),e(),t(35),e()()(),r(36,"h4",13),t(37,"Items in this Order"),e(),r(38,"div",14),l(39,F,9,5,"div",15),e()()),i&2){let n=d.$implicit;o(3),s("Order ID: ",n._id,""),o(2),m(v(6,12,n.createdAt,"mediumDate")),o(7),s(" $",n.totalOrderPrice,""),o(4),s(" ",n.paymentMethodType,""),o(4),c("ngClass",n.isPaid?"status-paid":"status-unpaid"),o(),m(n.isPaid?"Yes":"No"),o(4),c("ngClass",n.isDelivered?"status-delivered":"status-pending"),o(),m(n.isDelivered?"Yes":"No"),o(5),f("",n.shippingAddress.details,", ",n.shippingAddress.city,""),o(4),s(" ",n.shippingAddress.phone,""),o(4),c("ngForOf",n.cartItems)}}function U(i,d){if(i&1&&(r(0,"div",2)(1,"h2",3),t(2,"Your Orders"),e(),l(3,T,40,15,"div",4),e()),i&2){let n=P();o(3),c("ngForOf",n.orders)}}function N(i,d){i&1&&(r(0,"p",22),t(1,"You have no orders yet."),e())}var Q=(()=>{let d=class d{constructor(){this._OrderService=p(A),this._AuthService=p(w),this.orders=[]}getUserInfo(g){this._OrderService.getUserOrders(g).subscribe({next:a=>{this.orders=a,console.log(this.orders)},error:a=>{console.log(a)}})}ngOnInit(){this._AuthService.saveUserData();let g=this._AuthService.userData?.id;g?this.getUserInfo(g):console.log("User ID not found")}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=_({type:d,selectors:[["app-all-orders"]],standalone:!0,features:[h],decls:3,vars:2,consts:[["noOrders",""],["class","orders-container",4,"ngIf","ngIfElse"],[1,"orders-container"],[1,"orders-header"],["class","order-card",4,"ngFor","ngForOf"],[1,"order-card"],[1,"order-header"],[1,"order-id"],[1,"order-date"],[1,"order-details"],[1,"order-summary"],[3,"ngClass"],[1,"shipping-info"],[1,"items-header"],[1,"order-items"],["class","order-item",4,"ngFor","ngForOf"],[1,"order-item"],[1,"product-image",3,"src","alt"],[1,"item-details"],[1,"item-title"],[1,"item-price"],[1,"item-quantity"],[1,"no-orders"]],template:function(a,z){if(a&1&&l(0,U,4,1,"div",1)(1,N,2,0,"ng-template",null,0,y),a&2){let D=x(2);c("ngIf",z.orders.length>0)("ngIfElse",D)}},dependencies:[E,I,S,b],styles:[".orders-container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px;font-family:Arial,sans-serif}.orders-container[_ngcontent-%COMP%]   .orders-header[_ngcontent-%COMP%]{font-size:2rem;color:#333;text-align:center;margin-bottom:30px}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:20px;margin-bottom:20px;box-shadow:0 2px 10px #0000001a}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-header[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%]{font-size:1.2rem;color:#007bff}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-header[_ngcontent-%COMP%]   .order-date[_ngcontent-%COMP%]{font-size:.9rem;color:#666}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]{flex:1;margin-right:20px}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:.9rem}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .status-paid[_ngcontent-%COMP%]{color:green;font-weight:700}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .status-unpaid[_ngcontent-%COMP%]{color:red;font-weight:700}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .status-delivered[_ngcontent-%COMP%]{color:green;font-weight:700}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .status-pending[_ngcontent-%COMP%]{color:orange;font-weight:700}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]{flex:1}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1rem;color:#333}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:.9rem}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .items-header[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:10px;color:#333}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;align-items:center;background:#f9f9f9;border-radius:8px;margin-bottom:10px;padding:10px;width:100%}@media (min-width: 576px){.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{width:48%;margin-right:2%}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]:nth-child(2n){margin-right:0}}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:5px;margin-right:15px;object-fit:cover}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:5px;font-weight:700;color:#333}.orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%], .orders-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-quantity[_ngcontent-%COMP%]{font-size:.9rem;color:#666;margin:2px 0}.orders-container[_ngcontent-%COMP%]   .no-orders[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem;color:#666;margin-top:50px}"]});let i=d;return i})();export{Q as AllOrdersComponent};
