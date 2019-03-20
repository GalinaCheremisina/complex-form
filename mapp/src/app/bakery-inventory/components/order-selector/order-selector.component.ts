import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Cakes } from '../../models/cakes.interface';

@Component({
  selector: 'app-order-selector',
  templateUrl: './order-selector.component.html',
  styleUrls: ['./order-selector.component.css']
})
export class OrderSelectorComponent{

  @Input() 
  parent: FormGroup;

  @Input() 
  cakes: Cakes[];

  @Output()
  added = new EventEmitter<any>();

  quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sizes: string[] = ['small', 'medium', 'large'];

  get selectorEmpty(){
    return this.parent.get('selector.product_id').value;
  }

  onAdd(){
    this.added.next(this.parent.get('selector').value);
    this.parent.get('selector').reset({
      product_id: '',
      quantity: 1,
      quantitySize: ''
    })
  }
}