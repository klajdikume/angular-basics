import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/_shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef;
  

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingridient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
    
  }

}
