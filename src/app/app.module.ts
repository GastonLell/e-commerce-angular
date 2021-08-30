import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/itemList/itemList.component';
import { ItemComponent } from './components/Item/Item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemCountComponent } from './components/item-count/item-count.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
@NgModule({
  declarations: [					
    AppComponent,
      ItemListComponent,
      ItemComponent,
      ItemDetailComponent,
      CartComponent,
      ItemCountComponent,
      NavbarComponent,
      CheckoutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent },
      {path: 'category/:idCategory', component: ItemListComponent},
      {path: 'product/:idProduct', component: ItemDetailComponent },
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
