import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.recName;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.ingName),
              amount: new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImage),
      description: new FormControl(recipeDescription),
      ingredients: recipeIngredients
    });
  }

  getControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }

  onAddIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
}
