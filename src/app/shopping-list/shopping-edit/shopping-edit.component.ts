import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  onAddItem(form: NgForm): void {
    const value = form.value;
    const formIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, formIngredient);
    } else {
      this.slService.addIngredient(formIngredient);
    }
    this.onClear();
  }

  onClear(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(this.editedItemIndex);
        this.slForm.setValue({
          name: this.editedItem.ingName,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
