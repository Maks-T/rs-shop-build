(self.webpackChunkrsshop=self.webpackChunkrsshop||[]).push([[291],{9291:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CartModule:()=>T});var r=n(8583),o=n(665),a=n(7716),c=n(8386),i=n(8952),g=n(4128),p=n(1841);let s=(()=>{class t{constructor(t,e){this.http=t,this.userService=e}addOrder(t){const e=new p.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.userService.getToken}`});return this.http.post("http://localhost:3004/users/order",t,{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(p.eN),a.LFG(c.K))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n(8295),_=n(1809);function m(t,e){1&t&&(a.TgZ(0,"div",6),a._uU(1," \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 :-( "),a.qZA())}function l(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"div",12),a._UZ(3,"img",13),a.TgZ(4,"div",14),a._uU(5),a.qZA(),a.qZA(),a.TgZ(6,"a",15),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw(2).deleteFoodFromCart(e.id)}),a._uU(7,"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"),a.qZA(),a.qZA(),a.TgZ(8,"td"),a.TgZ(9,"div",16),a._uU(10),a.qZA(),a.qZA(),a.TgZ(11,"td"),a.TgZ(12,"div",17),a.TgZ(13,"button",18),a.NdJ("click",function(){const e=a.CHM(t).index;return a.oxw(2).decreaseCountFood(e)}),a._uU(14,"-"),a.qZA(),a._UZ(15,"input",19),a.TgZ(16,"button",18),a.NdJ("click",function(){const e=a.CHM(t).index;return a.oxw(2).increaseCountFood(e)}),a._uU(17,"+"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"td"),a.TgZ(19,"div",20),a._uU(20),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit,n=e.index,r=a.oxw(2);a.xp6(3),a.Q6J("src",t.imageUrls[0],a.LSH),a.xp6(2),a.Oqu(t.name),a.xp6(5),a.Oqu(t.description),a.xp6(5),a.s9C("value",r.items[n].amount),a.xp6(5),a.hij(" ",t.price*r.items[n].amount," \u0440\u0443\u0431. ")}}function f(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",21),a.NdJ("click",function(){a.CHM(t);const e=a.oxw(2);return e.isShowFormOrder=!e.isShowFormOrder,e.isShowBtnCheckOrder=!e.isShowBtnCheckOrder}),a._uU(1," \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 "),a.qZA()}}function u(t,e){if(1&t&&(a.TgZ(0,"div",7),a.TgZ(1,"div",8),a._uU(2,"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"),a.qZA(),a.TgZ(3,"div",9),a._uU(4,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),a.qZA(),a._UZ(5,"hr"),a.TgZ(6,"table"),a.TgZ(7,"tr"),a.TgZ(8,"th"),a._uU(9,"\u0422\u043e\u0432\u0430\u0440"),a.qZA(),a.TgZ(10,"th"),a._uU(11,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),a.qZA(),a.TgZ(12,"th"),a._uU(13,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),a.qZA(),a.TgZ(14,"th"),a._uU(15,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"),a.qZA(),a.qZA(),a.YNc(16,l,21,5,"tr",10),a.qZA(),a.YNc(17,f,2,0,"button",11),a.qZA()),2&t){const t=a.oxw();a.xp6(16),a.Q6J("ngForOf",t.foods),a.xp6(1),a.Q6J("ngIf",t.isShowBtnCheckOrder)}}function h(t,e){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getErrorMessage())}}function O(t,e){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getErrorMessage())}}function Z(t,e){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getErrorMessage())}}function C(t,e){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getErrorMessage())}}function x(t,e){if(1&t&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&t){const t=a.oxw(2);a.xp6(1),a.Oqu(t.getErrorMessage())}}function M(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"form",22),a.NdJ("ngSubmit",function(){return a.CHM(t),a.oxw().onSubmit()}),a.TgZ(1,"h2"),a._uU(2,"\u0424\u043e\u0440\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),a.qZA(),a._UZ(3,"hr"),a.TgZ(4,"mat-form-field",23),a.TgZ(5,"mat-label"),a._uU(6,"\u0424\u0418\u041e"),a.qZA(),a._UZ(7,"input",24),a.YNc(8,h,2,1,"mat-error",25),a.qZA(),a._UZ(9,"br"),a.TgZ(10,"mat-form-field",23),a.TgZ(11,"mat-label"),a._uU(12,"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),a.qZA(),a._UZ(13,"input",26),a.YNc(14,O,2,1,"mat-error",25),a.qZA(),a._UZ(15,"br"),a.TgZ(16,"mat-form-field",23),a.TgZ(17,"mat-label"),a._uU(18,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),a.qZA(),a._UZ(19,"input",27),a.YNc(20,Z,2,1,"mat-error",25),a.qZA(),a._UZ(21,"br"),a.TgZ(22,"mat-form-field",23),a.TgZ(23,"mat-label"),a._uU(24,"\u0416\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),a.qZA(),a._UZ(25,"input",28),a.YNc(26,C,2,1,"mat-error",25),a.qZA(),a._UZ(27,"br"),a.TgZ(28,"mat-form-field",23),a.TgZ(29,"mat-label"),a._uU(30,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"),a.qZA(),a._UZ(31,"input",29),a.YNc(32,x,2,1,"mat-error",25),a.qZA(),a._UZ(33,"br"),a.TgZ(34,"div"),a.TgZ(35,"button",30),a._uU(36," \u041f\u043e\u0434\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 "),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=a.oxw();a.Q6J("formGroup",t.form),a.xp6(8),a.Q6J("ngIf",t.name.invalid),a.xp6(6),a.Q6J("ngIf",t.address.invalid),a.xp6(6),a.Q6J("ngIf",t.phone.invalid),a.xp6(6),a.Q6J("ngIf",t.timeToDeliver.invalid),a.xp6(6),a.Q6J("ngIf",t.comment.invalid),a.xp6(3),a.Q6J("disabled",t.form.invalid)}}function w(t,e){if(1&t&&(a.TgZ(0,"div",31),a.TgZ(1,"h3"),a._uU(2,"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e, \u043e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"),a.qZA(),a.TgZ(3,"div"),a._uU(4),a.qZA(),a.TgZ(5,"div"),a._uU(6),a.qZA(),a.TgZ(7,"div"),a._uU(8),a.qZA(),a.TgZ(9,"div"),a._uU(10),a.qZA(),a.TgZ(11,"div"),a._uU(12),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(4),a.hij("\u0424\u0418\u041e : ",t.detailsOrder.name,""),a.xp6(2),a.hij("\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 : ",t.detailsOrder.address,""),a.xp6(2),a.hij("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 : ",t.detailsOrder.phone,""),a.xp6(2),a.hij("\u0416\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 : ",t.detailsOrder.timeToDeliver,""),a.xp6(2),a.hij("\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443 : ",t.detailsOrder.comment,"")}}let P=(()=>{class t{constructor(t,e,n,r){this.userService=t,this.catalogService=e,this.cartService=n,this.orderService=r,this.foods=[],this.items=[],this.isShowBtnCheckOrder=!0,this.isShowFormOrder=!1,this.isShowMessageOrder=!1,this.name=new o.NI("",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(50)]),this.address=new o.NI("",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(250)]),this.phone=new o.NI("",[o.kI.required,o.kI.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")]),this.timeToDeliver=new o.NI("",[o.kI.required]),this.comment=new o.NI("",[o.kI.maxLength(250)])}ngOnInit(){this.userService.getUserInfo().subscribe(t=>{this.userInfo=t,console.log(" this.userInfo  ",this.userInfo),t.cart.forEach(t=>{this.catalogService.fetchFoodById(t).subscribe(e=>{this.items.push({id:t,amount:1}),this.foods.push(e)})})}),this.form=new o.cw({name:this.name,address:this.address,phone:this.phone,timeToDeliver:this.timeToDeliver,comment:this.comment})}decreaseCountFood(t){this.items[t].amount>1&&(this.items[t].amount-=1)}increaseCountFood(t){console.log("\u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435 - ",this.foods[t].availableAmount),this.items[t].amount<Number(this.foods[t].availableAmount)?this.items[t].amount+=1:alert("\u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435")}getErrorMessage(){return"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}onSubmit(){if(this.form.valid){const t=this.form.value;this.detailsOrder=t,console.log("formData",t);const e={items:this.items,details:this.detailsOrder};console.log("orderData ",e),this.orderService.addOrder(e).subscribe(t=>console.log(t)),this.isShowFormOrder=!1,this.isShowMessageOrder=!0,this.foods=[],this.items=[]}}deleteFoodFromCart(t){this.cartService.deleteFoodFromCart(t).subscribe(()=>{const e=this.foods.findIndex(e=>e.id===t);this.foods.splice(e,1)})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.K),a.Y36(i.a),a.Y36(g.N),a.Y36(s))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-cart-page"]],decls:6,vars:4,consts:[[1,"cart-page"],[1,"cart-page__wrapper"],["class","cart-page__message-empty-cart",4,"ngIf"],["class","cart-page__wrapper-check-order",4,"ngIf"],["class","order-form",3,"formGroup","ngSubmit",4,"ngIf"],["class","cart-page__order-message",4,"ngIf"],[1,"cart-page__message-empty-cart"],[1,"cart-page__wrapper-check-order"],[1,"cart-page__title"],[1,"cart-page__title-list"],[4,"ngFor","ngForOf"],["class","btn-ckeck-order",3,"click",4,"ngIf"],[1,"table__food-info"],[1,"table__food-img",3,"src"],[1,"table__food-name"],[1,"btn-delete-in-cart",3,"click"],[1,"table__food-desc"],[1,"table__food-count"],[3,"click"],["type","text","readonly","",3,"value"],[1,"table__food-cost"],[1,"btn-ckeck-order",3,"click"],[1,"order-form",3,"formGroup","ngSubmit"],["appearance","fill"],["name","name","matInput","","type","text","required","","autofocus","","formControlName","name"],[4,"ngIf"],["name","address","matInput","","type","text","required","","formControlName","address"],["name","phone","matInput","","type","text","required","","formControlName","phone"],["name","timeToDeliver","matInput","","type","datetime-local","required","","formControlName","timeToDeliver"],["name","comment","matInput","","type","text","formControlName","comment"],["type","submit",1,"btn-confirm-order",3,"disabled"],[1,"cart-page__order-message"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.YNc(2,m,2,0,"div",2),a.YNc(3,u,18,2,"div",3),a.YNc(4,M,37,7,"form",4),a.YNc(5,w,13,5,"div",5),a.qZA(),a.qZA()),2&t&&(a.xp6(2),a.Q6J("ngIf",!e.foods.length),a.xp6(1),a.Q6J("ngIf",e.foods.length),a.xp6(1),a.Q6J("ngIf",e.isShowFormOrder),a.xp6(1),a.Q6J("ngIf",e.isShowMessageOrder))},directives:[r.O5,r.sg,o._Y,o.JL,o.sg,d.KE,d.hX,_.Nt,o.Fj,o.Q7,o.JJ,o.u,d.TO],styles:[".cart-page[_ngcontent-%COMP%]{flex-direction:row;width:100%;padding-top:60px;border-bottom:1px solid #d5d7db66}.cart-page[_ngcontent-%COMP%], .cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]{flex-direction:column;flex-wrap:nowrap;height:600px;min-width:941px;max-width:1090px;margin:0 auto;padding:0 2.2%}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .cart-page__message-empty-cart[_ngcontent-%COMP%]{font-size:42px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .cart-page__title[_ngcontent-%COMP%]{font-size:34px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .cart-page__title-list[_ngcontent-%COMP%]{font-size:18px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:contain}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-desc[_ngcontent-%COMP%], .cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-name[_ngcontent-%COMP%]{font-size:14px;padding:10px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px dashed #dc354673;padding:10px 0}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-count[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;padding:10px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .table__food-cost[_ngcontent-%COMP%]{font-size:16px;font-weight:bolder;padding:15px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30px;height:30px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:40px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-delete-in-cart[_ngcontent-%COMP%]{color:#dc3545;text-decoration:underline;cursor:pointer}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-ckeck-order[_ngcontent-%COMP%], .cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-confirm-order[_ngcontent-%COMP%]{display:inline-block;align-self:flex-end;width:173px;height:40px;margin-top:30px;margin-left:30px;line-height:40px;background:#0072bc;font-weight:500;font-size:16px;border-radius:4px;color:#fff;text-align:center;text-decoration:none;cursor:pointer;outline:none;border:0;transition:.2s ease}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-ckeck-order[_ngcontent-%COMP%]:hover, .cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-confirm-order[_ngcontent-%COMP%]:hover{background-color:#c90570}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-ckeck-order[_ngcontent-%COMP%]:active, .cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .btn-confirm-order[_ngcontent-%COMP%]:active{transform:translate(1px,1px)}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .order-form[_ngcontent-%COMP%]{width:70%;margin:20px 0}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .order-form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{font-size:14px;color:#4169e1}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .order-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{height:60px;width:75%;margin-top:20px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .order-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #3717eb80;line-height:30px;width:100%}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .order-form[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:20px}.cart-page[_ngcontent-%COMP%]   .cart-page__wrapper[_ngcontent-%COMP%]   .cart-page__order-message[_ngcontent-%COMP%]{width:70%;margin:20px 0}"]}),t})();var b=n(4330),q=n(4466);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.ez,b.Bz.forChild([{path:"",component:P}]),q.m],b.Bz]}),t})()}}]);