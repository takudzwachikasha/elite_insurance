"use strict";(self.webpackChunkSample=self.webpackChunkSample||[]).push([[996],{8996:(_e,v,l)=>{l.r(v),l.d(v,{MainModule:()=>me});var p=l(6895),U=l(3190),h=l(4070),e=l(4650),b=l(6352),d=l(7351),u=l(4346),m=l(2111),_=l(548),g=l(7509);function k(o,r){1&o&&(e.TgZ(0,"p",5),e._uU(1," Please add Company Details in the Admin Section to preview, download and print invoice or delivery note\n"),e.qZA())}function w(o,r){if(1&o&&(e.TgZ(0,"div",13),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij("Products for ",t.customer.name," Invoice ")}}function I(o,r){1&o&&(e.TgZ(0,"tr")(1,"th",14),e._uU(2,"QUANTITY"),e.qZA(),e.TgZ(3,"th",14),e._uU(4,"DESCRIPTION"),e.qZA(),e.TgZ(5,"th",14),e._uU(6,"PACK SIZE"),e.qZA(),e.TgZ(7,"th",14),e._uU(8,"UNIT PRICE"),e.qZA(),e.TgZ(9,"th",14),e._uU(10,"TOTAL AMOUNT"),e.qZA()())}function F(o,r){if(1&o&&(e.TgZ(0,"tr")(1,"td",14)(2,"div",15),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA()()),2&o){const t=r.$implicit;e.xp6(3),e.Oqu(t.quantity),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.pack_size),e.xp6(2),e.Oqu(t.price),e.xp6(2),e.Oqu(t.total_amount)}}function N(o,r){if(1&o&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" In total there are ",t.invoice_products?t.invoice_products.length:0," products ")}}const D=function(){return[50,100,150]};function M(o,r){if(1&o&&(e.TgZ(0,"p-accordionTab")(1,"div",6)(2,"p-table",7,8),e.YNc(5,w,2,1,"ng-template",9),e.YNc(6,I,11,0,"ng-template",10),e.YNc(7,F,12,5,"ng-template",11),e.YNc(8,N,2,1,"ng-template",12),e.qZA()()()),2&o){const t=r.$implicit;e.xp6(2),e.Q6J("paginator",!0)("autoLayout",!0)("rows",50)("showCurrentPageReport",!0)("columnResizeMode","fit")("rowsPerPageOptions",e.DdM(9,D))("scrollable",!0)("value",t.invoice_products)("responsive",!0)}}let J=(()=>{class o{constructor(t,n,c){this.invoice_service=t,this.alert=n,this.pref_service=c}ngOnInit(){}exportPDF(t){this.invoice_service.createPDF(t,"download")}previewPDF(t){this.invoice_service.createPDF(t,"open")}printPDF(t){this.invoice_service.createPDF(t,"print")}downloadDeliveryNote(t){this.invoice_service.createDeliveryPDF(t,"open")}downloadQuotation(t){this.invoice_service.createQuotation(t,"open")}deleteInvoice(t){this.alert.confirm("Are you sure you want to delete this invoice?","Yes").then(n=>{n.isConfirmed&&this.invoice_service.deleteInvoice(t).subscribe(c=>{this.alert.success("Invoice deleted"),this.invoice_service.setInvoices()})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.q),e.Y36(d.T),e.Y36(u.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-invoice"]],decls:7,vars:2,consts:[[1,"text-center","h3","font-weight-bolder","white-text"],[1,"d-flex","flex-row","justify-content-center"],["class","white-text bg-danger text-center py-3 px-2 rounded animate__pulse",4,"ngIf"],[1,"d-flex","flex-row","justify-content-center","p-3"],[4,"ngFor","ngForOf"],[1,"white-text","bg-danger","text-center","py-3","px-2","rounded","animate__pulse"],[1,"w-75d","p-2"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","responsiveLayout","scroll","scrollHeight","400px","selectionMode","single","styleClass","p-datatable-gridlines\n    p-datatable-striped p-datatable-sm",3,"paginator","autoLayout","rows","showCurrentPageReport","columnResizeMode","rowsPerPageOptions","scrollable","value","responsive"],["ptable","","ptableInvoice",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[1,"text-center","h4"],[1,""],[1,"3"],[1,"p-d-flex","p-ai-center","p-jc-between"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._uU(1,"INVOICES"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,k,2,0,"p",2),e.qZA(),e.TgZ(4,"div",3)(5,"p-accordion"),e.YNc(6,M,9,10,"p-accordionTab",4),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",!n.pref_service.getCompany()),e.xp6(3),e.Q6J("ngForOf",n.invoice_service.getInvoices()))},dependencies:[p.sg,p.O5,m.jx,_.UQ,_.US,g.iA]}),o})();var i=l(433);let Y=(()=>{class o{constructor(t,n){this.fb=t,this.pref_service=n}ngOnInit(){this.bankDetailForm=this.fb.group({account_name:[null,[i.kI.required]],bank_name:[null,[i.kI.required]],branch:[null,[i.kI.required]],account_no:[null,[i.kI.required]],bank_code:[null,[i.kI.required]]}),this.setBankDetail(),this.bankDetailForm.disable()}setBankDetail(){this.bankDetailForm.get("account_name").setValue(this.bankDetails.account_name),this.bankDetailForm.get("bank_name").setValue(this.bankDetails.bank_name),this.bankDetailForm.get("branch").setValue(this.bankDetails.branch),this.bankDetailForm.get("account_no").setValue(this.bankDetails.account_no),this.bankDetailForm.get("bank_code").setValue(this.bankDetails.bank_code)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(u.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-bank-detail"]],inputs:{bankDetails:"bankDetails"},decls:25,vars:1,consts:[[1,"text-center","border","border-light","p-1",3,"formGroup"],[1,"form-row","mb-3"],[1,"col"],["for","account_name"],["type","text","id","account_name","formControlName","account_name",1,"form-control"],["for","bank_name"],["type","text","id","bank_name","formControlName","bank_name",1,"form-control"],["for","account_no"],["type","text","id","account_no","formControlName","account_no",1,"form-control"],["for","branch"],["type","text","id","branch","formControlName","branch",1,"form-control"],[1,"d-flex","flex-row","justify-content-center"],[1,"mt-2"],["for","bank_code"],["type","text","id","bank_code","formControlName","bank_code",1,"form-control"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Account Name"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2)(7,"label",5),e._uU(8,"Bank Name"),e.qZA(),e._UZ(9,"input",6),e.qZA()(),e.TgZ(10,"div",1)(11,"div",2)(12,"label",7),e._uU(13,"Account Number"),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"div",2)(16,"label",9),e._uU(17,"Branch"),e.qZA(),e._UZ(18,"input",10),e.qZA()(),e.TgZ(19,"div",11)(20,"div",12)(21,"label",13),e._uU(22,"Bank Code"),e.qZA(),e._UZ(23,"input",14),e.qZA()(),e._UZ(24,"hr"),e.qZA()),2&t&&e.Q6J("formGroup",n.bankDetailForm)},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),o})();function O(o,r){if(1&o&&(e.TgZ(0,"div",25)(1,"div",26),e._uU(2),e.qZA(),e.TgZ(3,"div",26),e._uU(4),e.qZA(),e.TgZ(5,"div",26),e._uU(6),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.bank_name," "),e.xp6(2),e.hij(" ",t.branch," "),e.xp6(2),e.hij(" ",t.account_no," ")}}function Q(o,r){if(1&o&&e._UZ(0,"app-bank-detail",27),2&o){const t=e.oxw().$implicit;e.Q6J("bankDetails",t)}}function G(o,r){1&o&&(e.TgZ(0,"p-accordionTab"),e.YNc(1,O,7,3,"ng-template",23),e.YNc(2,Q,1,1,"ng-template",24),e.qZA())}let R=(()=>{class o{constructor(t,n){this.fb=t,this.pref_service=n,this.addDialog=!1}ngOnInit(){this.companyForm=this.fb.group({name:[null,[i.kI.required]],email:[null,[i.kI.required]],address:[null,[i.kI.required]],cell:[null,[i.kI.required]],telefax:[null,[i.kI.required]]}),this.setCompany(),this.companyForm.disable()}setCompany(){try{this.companyForm.get("name").setValue(this.pref_service.getCompany().name),this.companyForm.get("address").setValue(this.pref_service.getCompany().address),this.companyForm.get("cell").setValue(this.pref_service.getCompany().cell),this.companyForm.get("email").setValue(this.pref_service.getCompany().email),this.companyForm.get("telefax").setValue(this.pref_service.getCompany().telefax)}catch{console.log("Failed to load company-------\x3e")}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(u.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-preferences"]],decls:34,vars:2,consts:[[1,"mb-3","white-text"],[1,"h3","text-center"],[1,"text-center"],[1,"fa","fa-info-circle","px-1"],[1,"row","px-5"],[1,"col-5"],[1,"border","border-light","bg-light","rounded","p-3",3,"formGroup"],[1,"h4","text-center","py-2","font-weight-bold"],[1,"form-row","mb-1"],[1,"col"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control","mb-2"],["for","price"],["formControlName","email","type","text","id","email",1,"form-control","mb-1"],["for","description",1,"mt-2"],["formControlName","address","type","text","id","address",1,"form-control","mb-1"],["for","cell",1,"mt-2"],["formControlName","cell","type","text","id","cell",1,"form-control","mb-1"],["for","telefax",1,"mt-2"],["formControlName","telefax","type","text","id","telefax",1,"form-control","mb-1"],[1,"border","border-light","bg-light","rounded","mx-3","red","flex-fill"],[1,"d-flex","flex-row","justify-content-center"],[4,"ngFor","ngForOf"],["pTemplate","header"],["pTemplate","content"],[1,"d-flex","flex-row","justify-content-between","flex-fill"],[1,"px-2"],[3,"bankDetails"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Your Preferences"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"i",3),e._uU(5,"Note: you can only change these in the admin section "),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"form",6)(9,"div",7),e._uU(10,"Company Details"),e.qZA(),e.TgZ(11,"div",8)(12,"div",9)(13,"label",10),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",11),e.TgZ(16,"label",12),e._uU(17,"Email"),e.qZA(),e._UZ(18,"input",13),e.TgZ(19,"label",14),e._uU(20,"Address"),e.qZA(),e._UZ(21,"input",15),e.TgZ(22,"label",16),e._uU(23,"Cell"),e.qZA(),e._UZ(24,"input",17),e.TgZ(25,"label",18),e._uU(26,"Telefax"),e.qZA(),e._UZ(27,"input",19),e.qZA()()()(),e.TgZ(28,"div",20)(29,"div",21)(30,"div",7),e._uU(31,"Bank Details"),e.qZA()(),e.TgZ(32,"p-accordion"),e.YNc(33,G,3,0,"p-accordionTab",22),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("formGroup",n.companyForm),e.xp6(25),e.Q6J("ngForOf",n.pref_service.getBankDetails()))},dependencies:[p.sg,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.jx,_.UQ,_.US,Y]}),o})();class S{constructor(){this.invoice_products=[]}}var f=l(8341),j=l(16),Z=l(8611),L=l(4642),x=l(9219);const B=function(){return{width:"100px",margi:"4px"}};let V=(()=>{class o{constructor(t,n,c){this.fb=t,this.product_service=n,this.alert=c,this.headerText="Add Product",this.isUpdate=!1}ngOnInit(){this.addProductForm=this.fb.group({name:[null,[i.kI.required]],price:[null,[i.kI.required]],description:[null,[i.kI.required]],category:[null,[i.kI.required]]}),this.product&&(this.isUpdate=!0,this.addProductForm.get("name").setValue(this.product.name),this.addProductForm.get("price").setValue(this.product.price),this.addProductForm.get("description").setValue(this.product.description),this.addProductForm.get("category").setValue(this.product.category.id),console.log("Editing product",this.product))}SaveProduct(){if(this.isUpdate){console.log("Is updating");let t=this.addProductForm.value;t.id=this.product.id,this.product_service.updateProduct(t).subscribe(n=>{this.alert.success("Product Updated"),this.product_service.setProducts(),this.product_service.updateDialog=!1})}else this.product_service.saveProduct(this.addProductForm.value).subscribe(t=>{this.alert.success("Product Saved"),this.product_service.setProducts(),this.product_service.addDialog=!1})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(f.s),e.Y36(d.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-product"]],inputs:{product:"product"},decls:18,vars:7,consts:[[1,"border","border-light",3,"formGroup"],[1,"form-row","mb-1"],[1,"col"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control","mb-2"],["for","price"],["formControlName","price","type","number","id","price",1,"form-control","mb-1"],["for","category"],["formControlName","category","optionLabel","name","optionValue","id","styleClass","w-100","placeholder","choose category","name","category",3,"options","filter","showClear"],["for","description",1,"mt-2"],["formControlName","description","type","text","id","description",1,"form-control","mb-1"],[1,"d-flex","justify-content-center"],["pButton","","pRipple","","type","button","data-target","#addRecordModal2","data-toggle","modal",1,"p-button-rounde","p-button-primary","px-5","p-button-outlined",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Name"),e.qZA(),e._UZ(5,"input",4),e.TgZ(6,"label",5),e._uU(7,"Price"),e.qZA(),e._UZ(8,"input",6),e.TgZ(9,"label",7),e._uU(10,"Category"),e.qZA(),e._UZ(11,"p-dropdown",8),e.TgZ(12,"label",9),e._uU(13,"Description"),e.qZA(),e._UZ(14,"input",10),e.qZA()(),e.TgZ(15,"div",11)(16,"button",12),e.NdJ("click",function(){return n.SaveProduct()}),e._uU(17,"SAVE"),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.addProductForm),e.xp6(11),e.Akn(e.DdM(6,B)),e.Q6J("options",n.product_service.getCategories())("filter",!1)("showClear",!1))},dependencies:[i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,x.Lt,Z.Hq]}),o})();function H(o,r){1&o&&(e.TgZ(0,"p",33),e._uU(1,"Please fill all Invoice form fields to Save or Preview! "),e.qZA())}function K(o,r){if(1&o&&(e.TgZ(0,"div",34)(1,"div",35),e._uU(2),e.qZA(),e.TgZ(3,"div",35),e._uU(4),e.qZA(),e.TgZ(5,"div",35),e._uU(6),e.qZA()()),2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.bank_name),e.xp6(2),e.Oqu(t.account_no),e.xp6(2),e.Oqu(t.branch)}}const C=function(){return{width:"100px",margi:"4px"}};let z=(()=>{class o{constructor(t,n,c,a,s){this.invoice_service=t,this.fb=n,this.alert=c,this.products_service=a,this.pref_service=s,this.currencies=[{name:"USD"},{name:"RTGS"},{name:"ZWD CASH"}]}ngOnInit(){this.invoiceForm=this.fb.group({customer:this.fb.group({name:[null,[i.kI.required]],address:[null,[i.kI.required]],city:[null,[i.kI.required]],phone:[null,[i.kI.required]]}),ref:[null,[i.kI.required]],number:[null,[i.kI.required]],regards:[null,[i.kI.required]],bank_details:[1,[i.kI.required]],currency:[null,[i.kI.required]]})}setFillInvoice(){this.invoice_in.customer={address:this.invoiceForm.get("customer").get("address").value,city:this.invoiceForm.get("customer").get("city").value,phone:this.invoiceForm.get("customer").get("phone").value,name:this.invoiceForm.get("customer").get("name").value},this.invoice_in.ref=this.invoiceForm.get("ref").value,this.invoice_in.number=this.invoiceForm.get("number").value,this.invoice_in.regards=this.invoiceForm.get("regards").value,this.invoice_in.currency=this.invoiceForm.get("currency").value}SaveInvoice(){this.setFillInvoice();let t=this.invoiceForm.value;t.invoice_products=this.invoice_in.invoice_products,console.log(t),this.invoice_service.saveInvoice(t).subscribe(n=>{this.alert.success("Invoice Saved"),this.invoice_service.setInvoices(),this.products_service.invoiceDialog=!1},n=>{console.log(n.error),this.alert.error(n.error)})}previewInvoice(){this.setFillInvoice();let t=this.invoice_in;this.pref_service.getBankDetails().find(n=>n.id===this.invoiceForm.get("bank_details").value?(t.bank_details=n,n):-1),this.invoice_service.createPDF(t,"open")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.q),e.Y36(i.qu),e.Y36(d.T),e.Y36(f.s),e.Y36(u.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-generate-invoice"]],inputs:{invoice_in:"invoice_in"},decls:52,vars:16,consts:[[1,"d-flex","flex-column"],[1,"btn","btn-primary","rounded-pill",3,"disabled","click"],[1,"d-flex","flex-center","mt-1","mb-3"],[1,"border","border-light","col-8","border-dark","z-depth-2","rounded",3,"formGroup"],[1,"text-center","h4"],["class","text-center text-danger",4,"ngIf"],[1,"p-2","text-center","d-flex","flex-row"],[1,"fa","fa-info-circle","fa-2x","px-1"],[1,"form-row","mb-1"],[1,"col"],["for","number",1,"mt-2"],["formControlName","number","type","text","id","number",1,"form-control","mb-1"],["for","bank_details",1,"mt-2"],["formControlName","currency","optionLabel","name","optionValue","name","styleClass","w-100","placeholder","Choose Currency","name","currency",1,"mb-1",3,"options","filter","showClear"],["formControlName","bank_details","optionLabel","bank_name","optionValue","id","styleClass","w-100","placeholder","Choose Bank Details","name","movement",1,"mb-1",3,"options","filter","showClear"],["pTemplate","items"],["for","ref",1,"mt-2"],["formControlName","ref","type","text","id","ref",1,"form-control","mb-1"],[1,"fa","fa-info-circle","px-1"],["formControlName","regards","type","text","id","regards",1,"form-control","mb-1"],[1,"border-dark"],["formGroupName","customer",1,"px-3","pb-3","border-light","z-depth-1"],[1,"text-center","font-weight-bold","my-2"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control","mb-2"],["for","price"],["formControlName","address","type","text","id","address",1,"form-control","mb-1"],["for","description",1,"mt-2"],["formControlName","city","type","text","id","city",1,"form-control","mb-1"],["for","phone",1,"mt-2"],["formControlName","phone","type","text","id","phone",1,"form-control","mb-1"],[1,"d-flex","flex-row","justify-content-center"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"text-center","text-danger"],[1,"d-flex","flex-row"],[1,"px-2"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"button",1),e.NdJ("click",function(){return n.previewInvoice()}),e._uU(3,"Preview"),e.qZA()()(),e.TgZ(4,"div",2)(5,"form",3)(6,"h6",4),e._uU(7,"Add invoice Details"),e.qZA(),e.YNc(8,H,2,0,"p",5),e.TgZ(9,"p",6),e._UZ(10,"i",7),e._uU(11," First save the invoice and go to the invoices section to download or print the invoice "),e.qZA(),e.TgZ(12,"div",8)(13,"div",9)(14,"section")(15,"label",10),e._uU(16,"Invoice Number"),e.qZA(),e._UZ(17,"input",11),e.TgZ(18,"label",12),e._uU(19,"Currency"),e.qZA(),e._UZ(20,"p-dropdown",13),e.TgZ(21,"label",12),e._uU(22,"Bank Details"),e.qZA(),e.TgZ(23,"p-dropdown",14),e.YNc(24,K,7,3,"ng-template",15),e.qZA(),e.TgZ(25,"label",16),e._uU(26,"Reference"),e.qZA(),e._UZ(27,"input",17),e.TgZ(28,"label",10),e._uU(29,"Regards("),e._UZ(30,"i",18),e._uU(31,"who is signing the invoice)"),e.qZA(),e._UZ(32,"input",19),e.qZA(),e._UZ(33,"hr",20),e.TgZ(34,"div",21)(35,"div",22),e._uU(36,"Customer Details"),e.qZA(),e.TgZ(37,"label",23),e._uU(38,"Name"),e.qZA(),e._UZ(39,"input",24),e.TgZ(40,"label",25),e._uU(41,"Address"),e.qZA(),e._UZ(42,"input",26),e.TgZ(43,"label",27),e._uU(44,"City"),e.qZA(),e._UZ(45,"input",28),e.TgZ(46,"label",29),e._uU(47,"Phone"),e.qZA(),e._UZ(48,"input",30),e.qZA()()(),e.TgZ(49,"div",31)(50,"button",32),e.NdJ("click",function(){return n.SaveInvoice()}),e._uU(51,"SAVE"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("disabled",n.invoiceForm.invalid),e.xp6(3),e.Q6J("formGroup",n.invoiceForm),e.xp6(3),e.Q6J("ngIf",n.invoiceForm.invalid),e.xp6(12),e.Akn(e.DdM(14,C)),e.Q6J("options",n.currencies)("filter",!1)("showClear",!1),e.xp6(3),e.Akn(e.DdM(15,C)),e.Q6J("options",n.pref_service.getBankDetails())("filter",!1)("showClear",!1),e.xp6(27),e.Q6J("disabled",n.invoiceForm.invalid))},dependencies:[p.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,m.jx,x.Lt]}),o})();function E(o,r){1&o&&(e.TgZ(0,"div",14)(1,"div",15),e._uU(2,"Add Product"),e.qZA()())}function $(o,r){1&o&&e._UZ(0,"app-add-product")}function X(o,r){1&o&&(e.TgZ(0,"div",14)(1,"div",15),e._uU(2,"Update Product"),e.qZA()())}function W(o,r){if(1&o&&e._UZ(0,"app-add-product",16),2&o){const t=e.oxw();e.Q6J("product",t.toUpdateProduct)}}function ee(o,r){1&o&&(e.TgZ(0,"div",14)(1,"div",15),e._uU(2,"Generate Invoice "),e._UZ(3,"i",17),e.qZA()())}function te(o,r){if(1&o&&e._UZ(0,"app-generate-invoice",18),2&o){const t=e.oxw();e.Q6J("invoice_in",t.invoice)}}function oe(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",19),e._uU(1,"Products"),e.qZA(),e.TgZ(2,"div",20),e._UZ(3,"i",21),e._uU(4,"Select products to add them to invoice list"),e.qZA(),e.TgZ(5,"div",22)(6,"p-autoComplete",23),e.NdJ("input",function(c){e.CHM(t),e.oxw();const a=e.MAs(12);return e.KtG(a.filterGlobal(c.target.value,"contains"))})("completeMethod",function(c){e.CHM(t);const a=e.oxw();return e.KtG(a.filterProd(c))}),e.qZA(),e.TgZ(7,"button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return c.products_service.addDialog=!0,e.KtG(c.headerText="Add Product")}),e._uU(8,"Add Product"),e._UZ(9,"i",25),e.qZA(),e.TgZ(10,"button",26),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.toInvoiceList())}),e._uU(11,"Add to invoice list"),e._UZ(12,"i",27),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("showEmptyMessage",!0)("suggestions",t.productSuggestions)("minLength",1),e.xp6(4),e.Q6J("disabled",t.selectedProducts.length<1)}}function ne(o,r){1&o&&(e.TgZ(0,"tr")(1,"th",28),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",29),e._uU(4,"Name"),e.qZA(),e.TgZ(5,"th",29),e._uU(6,"Price"),e.qZA(),e.TgZ(7,"th",29),e._uU(8,"Category"),e.qZA(),e.TgZ(9,"th",29),e._uU(10,"Description"),e.qZA(),e.TgZ(11,"th",29),e._uU(12,"Update/Delete"),e.qZA()(),e.TgZ(13,"tr"),e._UZ(14,"th")(15,"th")(16,"th"),e.qZA())}function ie(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",30),e._UZ(2,"p-tableCheckbox",31),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",32),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",33),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.updateProduct(a))}),e.qZA(),e.TgZ(13,"button",34),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.deleteProduct(a.id))}),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(2),e.Q6J("value",t),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.price),e.xp6(2),e.Oqu(t.category.name),e.xp6(2),e.Oqu(t.description)}}function re(o,r){if(1&o&&(e.TgZ(0,"div",35),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" In total there are ",t.products_service.getProducts()?t.products_service.getProducts().length:0," products ")}}function ce(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"h3",36),e._uU(1,"Invoice List"),e.qZA(),e.TgZ(2,"div",37)(3,"p-autoComplete",38),e.NdJ("input",function(c){e.CHM(t);const a=e.oxw();return e.MAs(19).filterGlobal(c.target.value,"contains"),e.KtG(a.fifi(c.target.value))}),e.qZA(),e.TgZ(4,"button",39),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.removeFromInvoiceList())}),e.TgZ(5,"small",40),e._uU(6,"Removed selected"),e.qZA(),e._UZ(7,"i",41),e.qZA(),e.TgZ(8,"button",26),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.generateInvoice())}),e.TgZ(9,"small",40),e._uU(10,"Generate Invoice"),e.qZA(),e._UZ(11,"i",42),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(8),e.Q6J("disabled",t.error_invoice_pack||t.invoice.invoice_products.length<1)}}function ae(o,r){1&o&&(e.TgZ(0,"tr")(1,"th",30),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",29),e._uU(4,"Quantity"),e.qZA(),e.TgZ(5,"th",29),e._uU(6,"Description"),e.qZA(),e.TgZ(7,"th",29),e._uU(8,"Pack Size"),e.qZA(),e.TgZ(9,"th",29),e._uU(10,"Unit Price"),e.qZA(),e.TgZ(11,"th",29),e._uU(12,"Total Amount"),e.qZA()())}const T=function(){return{standalone:!0}},q=function(o){return{"is-invalid":o}};function se(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",30),e._UZ(2,"p-tableCheckbox",31),e.qZA(),e.TgZ(3,"td")(4,"div",43)(5,"button",44),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.subtractQuantity(a))}),e.qZA(),e.TgZ(6,"div",45)(7,"div",46),e._uU(8),e.qZA()(),e.TgZ(9,"button",47),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.addQuantity(a))}),e.qZA()()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"input",48),e.NdJ("ngModelChange",function(c){const s=e.CHM(t).$implicit;return e.KtG(s.pack_size=c)}),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"input",49),e.NdJ("ngModelChange",function(c){const s=e.CHM(t).$implicit;return e.KtG(s.price=c)})("input",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.setInvoiceProductPrice(a))}),e.qZA()(),e.TgZ(17,"td"),e._uU(18),e.qZA()()}if(2&o){const t=r.$implicit,n=e.oxw();e.xp6(2),e.Q6J("value",t),e.xp6(3),e.Q6J("disabled",1===t.quantity),e.xp6(3),e.Oqu(t.quantity),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngModelOptions",e.DdM(12,T))("ngClass",e.VKq(13,q,!t.pack_size))("ngModel",t.pack_size),e.xp6(1),e.hij(" ",n.setErrorInvoicePack(!t.pack_size)," "),e.xp6(2),e.Q6J("ngModelOptions",e.DdM(15,T))("ngClass",e.VKq(16,q,!t.price))("ngModel",t.price),e.xp6(2),e.Oqu(t.total_amount)}}function le(o,r){if(1&o&&(e.TgZ(0,"div",35),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" In total there are ",t.invoice.invoice_products?t.invoice.invoice_products.length:0," products ")}}const y=function(){return{width:"450px"}},pe=function(){return{width:"850px"}},A=function(){return["name"]},P=function(){return[50,100,150]},de=[{path:"",pathMatch:"full",redirectTo:"products"},{path:"preferences",component:R},{path:"products",component:(()=>{class o{constructor(t,n){this.products_service=t,this.alert=n,this.headerText="Add Product",this.toInvoiceProducts=[],this.selectedProducts=[],this.invoice=new S,this.selectedInvoices=[],this.error_invoice_pack=!1,this.productSuggestions=[{name:"Kundai"},{name:"Katsande"}]}ngOnInit(){console.log(this.products_service.getCategories())}fifi(t){console.log(t)}updateProduct(t){this.headerText="Update Product",this.toUpdateProduct=t,this.products_service.updateDialog=!0}filterProd(t){let n=[],c=t.query;for(let a=0;a<this.products_service.getProducts().length;a++){let s=this.products_service.getProducts()[a];0==s.name.toLowerCase().indexOf(c.toLowerCase())&&n.push(s)}this.productSuggestions=n}toInvoiceList(){let t=[];this.invoice.invoice_products.forEach(n=>t.push(n.id)),this.selectedProducts.forEach(n=>{t.includes(n.id)?this.alert.info2("Some products already existed in the invoice list"):this.invoice.invoice_products=this.invoice.invoice_products.concat({id:n.id,description:n.description,name:n.name,quantity:1,pack_size:"B1",price:n.price,total_amount:n.price})}),this.selectedProducts=[]}removeFromInvoiceList(){console.log("Removing items"),this.invoice.invoice_products=this.invoice.invoice_products.filter(t=>this.selectedInvoices.findIndex(n=>t.id===n.id)<0),console.log(this.invoice)}addQuantity(t){t.quantity+=1,t.total_amount=t.quantity*t.price}subtractQuantity(t){t.quantity-=1,t.total_amount=t.quantity*t.price}setInvoiceProductPrice(t){t.total_amount=t.quantity*t.price}generateInvoice(){console.log(this.invoice),this.products_service.invoiceDialog=!0}setErrorInvoicePack(t){this.error_invoice_pack=t}deleteProduct(t){this.alert.confirm("Are you sure you want to delete this product?","OK").then(n=>{n.isConfirmed&&this.products_service.deleteProduct(t).subscribe(c=>{this.alert.success("Product Deleted"),this.products_service.setProducts()})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.s),e.Y36(d.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-products"]],decls:24,vars:48,consts:[["styleClass","p-fluid",3,"autoZIndex","baseZIndex","visible","modal","visibleChange"],["pTemplate","header"],["pTemplate","content"],["styleClass","p-fluid",3,"autoZIndex","baseZIndex","header","visible","modal","visibleChange"],[1,"d-flex","mx-2","flex-row","flex-fill"],[1,"w-75d","p-2"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","responsiveLayout","scroll","scrollHeight","400px","selectionMode","single","styleClass","p-datatable-gridlines\n      \n    p-datatable-striped p-datatable-sm",3,"paginator","autoLayout","rows","showCurrentPageReport","globalFilterFields","selection","columnResizeMode","rowsPerPageOptions","scrollable","value","responsive","selectionChange"],["ptable",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","summary"],[1,"flex-shrink-1","p-2","mr-2"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","responsiveLayout","scroll","scrollHeight","400px","selectionMode","single","styleClass","p-datatable-gridlines\n    p-datatable-striped p-datatable-sm",3,"paginator","autoLayout","rows","showCurrentPageReport","globalFilterFields","selection","columnResizeMode","rowsPerPageOptions","scrollable","value","responsive","selectionChange"],["ptableInvoice",""],[1,"d-flex","flex-row","flex-fill","justify-content-center"],[1,"h4","text-center","font-weight-bold"],[3,"product"],[1,"fa","fa-gears","fa-spin"],[3,"invoice_in"],[1,"text-center","h3","font-weight-bold"],["text-center","",1,"py-2","text-center"],[1,"fa","fa-info-circle"],[1,"d-flex","justify-content-between"],["placeholder","Search keyword","field","name",3,"showEmptyMessage","suggestions","minLength","input","completeMethod"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus-circle","mx-1"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-arrow-alt-circle-right","mx-1"],[1,"",2,"width","7%"],[1,""],[2,"width","7%"],[3,"value"],[2,"width","auto"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"text-center"],[1,"d-flex","flex-row","justify-content-between"],["placeholder","Search keyword",1,"mt-1",3,"input"],["type","button",1,"btn","btn-danger",3,"click"],[1,"font-weight-bold"],[1,"fa","fa-minus-circle","mx-1","mx-1"],[1,"fa","fa-gears","fa-spin","pl-1"],[1,"d-flex","flex-row","align-items-stretchf","redf"],["pButton","","pRipple","","icon","pi pi-minus",1,"p-button-roundeds","btn-block","p-button-danger","p-button-sm",3,"disabled","click"],[1,"badge","badge-light","mx-1s","btn-block","sm","align-content-centesr"],[1,"mt-3","h6"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-roundedd","p-button-success","p-button-sm","btn-block","mb-1",3,"click"],["type","text",1,"form-control","mb-1",3,"ngModelOptions","ngClass","ngModel","ngModelChange"],["type","number",1,"form-control","mb-1",3,"ngModelOptions","ngClass","ngModel","ngModelChange","input"]],template:function(t,n){1&t&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(a){return n.products_service.addDialog=a}),e.YNc(1,E,3,0,"ng-template",1),e.YNc(2,$,1,0,"ng-template",2),e.qZA(),e.TgZ(3,"p-dialog",0),e.NdJ("visibleChange",function(a){return n.products_service.updateDialog=a}),e.YNc(4,X,3,0,"ng-template",1),e.YNc(5,W,1,1,"ng-template",2),e.qZA(),e.TgZ(6,"p-dialog",3),e.NdJ("visibleChange",function(a){return n.products_service.invoiceDialog=a}),e.YNc(7,ee,4,0,"ng-template",1),e.YNc(8,te,1,1,"ng-template",2),e.qZA(),e.TgZ(9,"div",4)(10,"div",5)(11,"p-table",6,7),e.NdJ("selectionChange",function(a){return n.selectedProducts=a}),e.YNc(13,oe,13,4,"ng-template",8),e.YNc(14,ne,17,0,"ng-template",1),e.YNc(15,ie,14,5,"ng-template",9),e.YNc(16,re,2,1,"ng-template",10),e.qZA()(),e.TgZ(17,"div",11)(18,"p-table",12,13),e.NdJ("selectionChange",function(a){return n.selectedInvoices=a}),e.YNc(20,ce,12,1,"ng-template",8),e.YNc(21,ae,13,0,"ng-template",1),e.YNc(22,se,19,18,"ng-template",9),e.YNc(23,le,2,1,"ng-template",10),e.qZA()()()),2&t&&(e.Akn(e.DdM(41,y)),e.Q6J("autoZIndex",!0)("baseZIndex",8)("visible",n.products_service.addDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(42,y)),e.Q6J("autoZIndex",!0)("baseZIndex",8)("visible",n.products_service.updateDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(43,pe)),e.Q6J("autoZIndex",!0)("baseZIndex",8)("header","Invoice")("visible",n.products_service.invoiceDialog)("modal",!0),e.xp6(5),e.Q6J("paginator",!0)("autoLayout",!0)("rows",50)("showCurrentPageReport",!0)("globalFilterFields",e.DdM(44,A))("selection",n.selectedProducts)("columnResizeMode","fit")("rowsPerPageOptions",e.DdM(45,P))("scrollable",!0)("value",n.products_service.getProducts())("responsive",!0),e.xp6(7),e.Q6J("paginator",!0)("autoLayout",!0)("rows",50)("showCurrentPageReport",!0)("globalFilterFields",e.DdM(46,A))("selection",n.selectedInvoices)("columnResizeMode","fit")("rowsPerPageOptions",e.DdM(47,P))("scrollable",!0)("value",n.invoice?n.invoice.invoice_products:null)("responsive",!0))},dependencies:[p.mk,i.Fj,i.wV,i.JJ,i.On,j.Qc,m.jx,Z.Hq,L.V,g.iA,g.UA,g.Mo,V,z]}),o})()},{path:"invoice",component:J}];let ue=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(de),h.Bz]}),o})(),me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,U.m,ue]}),o})()}}]);