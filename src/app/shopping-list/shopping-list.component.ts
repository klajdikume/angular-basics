import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../_shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingridient){
    this.ingredients.push(ingredient);
  }

}
