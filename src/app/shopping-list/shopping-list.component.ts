import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../_shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingridient[] = [];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingridient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  // onIngredientAdded(ingredient: Ingridient){
  //   this.ingredients.push(ingredient);
  // }

 
}
