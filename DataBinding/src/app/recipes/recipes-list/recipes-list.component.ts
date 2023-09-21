import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'),
    new Recipe('Test Recipe 2', 'This is another test', 'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
