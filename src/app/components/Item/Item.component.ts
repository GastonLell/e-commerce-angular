import { Component, Input, OnInit } from '@angular/core';
import {IProduct} from '../../models/Product';

@Component({
  selector: 'app-Item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit() {
  }

}
