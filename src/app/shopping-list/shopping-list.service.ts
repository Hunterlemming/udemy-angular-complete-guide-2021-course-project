import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients.slice()[index];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(currentIndex: number, newIngredient: Ingredient): void {
    // const myNewIngredients = [...this.ingredients];
    // myNewIngredients[currentIndex] = newIngredient;
    //
    // const myNewIngredients2 = this.ingredients.map(
    //   (ingredient, i) => {
    //     if (i === currentIndex) {
    //       return newIngredient;
    //     }
    //     return ingredient;
    //   }
    // );

    this.ingredients[currentIndex] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients());
  }
}
