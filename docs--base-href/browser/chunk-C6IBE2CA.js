import{a as T,b,c as I}from"./chunk-Y5MTDJZB.js";import{a as E}from"./chunk-GOWRFH7M.js";import"./chunk-WXI33M2S.js";import"./chunk-MMKAGRZ3.js";import{a as D}from"./chunk-OTHD5K73.js";import"./chunk-5RERRQ3R.js";import{Eb as r,Gb as d,Ka as S,Mb as h,Nb as y,Oa as a,_ as f,ba as P,db as m,fb as v,jb as x,kb as _,lb as g,mb as C,nb as e,ob as o,pb as p,vb as u}from"./chunk-QOXXASHQ.js";var A=()=>[1,2,3,4,5];function w(t,i){if(t&1&&(e(0,"div"),p(1,"img",12),o()),t&2){let n=u().$implicit,l=u(2);a(),v("src",n,S)("alt",l.detailsProduct.title)}}function F(t,i){t&1&&m(0,w,2,2,"ng-template",5)}function M(t,i){t&1&&(e(0,"span"),p(1,"i",13),o())}function O(t,i){t&1&&p(0,"i",10)}function k(t,i){if(t&1&&(e(0,"section",0)(1,"h1",1),r(2,"Details Product"),o(),e(3,"div",2)(4,"div",3)(5,"owl-carousel-o",4),g(6,F,1,0,null,5,_),o()(),e(8,"div",6)(9,"h2"),r(10),o(),e(11,"p",7),r(12),o(),e(13,"h3",8),r(14),o(),e(15,"div",9)(16,"span"),r(17),o(),e(18,"div"),g(19,M,2,0,"span",null,_),m(21,O,1,0,"i",10),e(22,"span",7),r(23),o()()(),e(24,"button",11),r(25,"+Add to Cart"),o()()()()),t&2){let n=u();a(5),v("options",n.customOptionsDetails),a(),C(n.detailsProduct.images),a(4),d(" ",n.detailsProduct.title," "),a(2),d(" ",n.detailsProduct.description," "),a(2),d("",n.detailsProduct.category.name," "),a(3),d("",n.detailsProduct.price," EGP"),a(2),C(y(7,A).slice(0,n.detailsProduct.ratingsAverage)),a(2),x(21,n.detailsProduct.ratingsAverage%1!==0?21:-1),a(2),d(" ",n.detailsProduct.ratingsAverage," ")}}var $=(()=>{let i=class i{constructor(){this._ActivatedRoute=f(D),this._ProductsService=f(E),this.detailsProduct=null,this.customOptionsDetails={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:['<i class="fa-solid fa-chevron-left text-main"></i>','<i class="fa-solid fa-chevron-right text-main"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:6}},nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:l=>{let s=l.get("id");this._getSpecificProducts=this._ProductsService.getSpecificProducts(s).subscribe({next:c=>{console.log(c.data),this.detailsProduct=c.data},error:c=>{console.log(c)}}),console.log(l.get("id"))}})}ngOnDestroy(){this._getSpecificProducts?.unsubscribe()}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=P({type:i,selectors:[["app-details"]],standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"my-2"],[1,"text-center","text-main","my-2"],[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],["carouselSlide",""],[1,"col-md-9"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"btn-main","w-100"],[1,"w-100",3,"src","alt"],[1,"fas","fa-star","rating-color"]],template:function(s,c){s&1&&m(0,k,26,8,"section",0),s&2&&x(0,c.detailsProduct?0:-1)},dependencies:[I,b,T]});let t=i;return t})();export{$ as DetailsComponent};
