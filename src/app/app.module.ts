import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './_shared/dropdown.directive';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipiesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      ShoppingListComponent,
      RecipeItemComponent,
      ShoppingEditComponent,
      DropdownDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
