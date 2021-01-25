import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://static.wikia.nocookie.net/shokugekinosoma/images/b/b0/' +
      'Roast_Pork%2C_Just_Kidding_%28anime%29.png/revision/latest?cb=20150419102847')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
