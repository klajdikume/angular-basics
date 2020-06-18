import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../_shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingridient[] = [];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) { }
  
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
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
