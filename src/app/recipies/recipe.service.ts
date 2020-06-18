import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingridient } from '../_shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test',
      'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg',
      [
        new Ingridient('Meat', 1),
        new Ingridient('Fires', 20)
      ]),
    new Recipe(
      'A Test Recipe 1',
      'This is simply test 2',
      'https://i.pinimg.com/originals/3e/25/98/3e25980769e2b38744f2b864b03f6d88.jpg',
      [
        new Ingridient('Milk', 0.5),
        new Ingridient('Fires', 20)
      ])
  ];

  constructor(private slService: ShoppingListService) { }
  
  getRecipes(){
    return this.recipes.slice(); //return new array exact copy 
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingridient[]){
    this.slService;
  }

}
