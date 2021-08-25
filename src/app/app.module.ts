import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/itemList/itemList.component';
import { ItemComponent } from './components/Item/Item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [			
    AppComponent,
      ItemListComponent,
      ItemComponent,
      ItemDetailComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent },
      {path: 'product/:idProduct', component: ItemDetailComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
