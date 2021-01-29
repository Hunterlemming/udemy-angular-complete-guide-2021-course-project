import {Ingredient} from '../shared/ingredient.model';

export  class Recipe {

  public recName: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(recName: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.recName = recName;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

}
