import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://www.das-koehle.at/uploads/tx_bh/food_web_008.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://www.das-koehle.at/uploads/tx_bh/food_web_008.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
