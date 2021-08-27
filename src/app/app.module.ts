import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/itemList/itemList.component';
import { ItemComponent } from './components/Item/Item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemCountComponent } from './components/item-count/item-count.component';

@NgModule({
  declarations: [					
    AppComponent,
      ItemListComponent,
      ItemComponent,
      ItemDetailComponent,
      CartComponent,
      ItemCountComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent },
      {path: 'product/:idProduct', component: ItemDetailComponent },
      {path: 'cart', component: CartComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
