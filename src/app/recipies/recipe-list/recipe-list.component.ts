import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply test','https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
    new Recipe('A Test Recipe 1','This is simply test 2','https://i.pinimg.com/originals/3e/25/98/3e25980769e2b38744f2b864b03f6d88.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
