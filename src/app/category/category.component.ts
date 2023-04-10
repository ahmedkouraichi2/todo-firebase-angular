import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 color :Array<any> = ['#e7845e', '#fc0184', '#f6b93f', '#9224a7', '#20c898', '#f03734', '#aad450', '#026467', '#fefefe', '#928779', '#D4D2A5', "#FCDEBE", '#90A583', '#B26E63', '#C6CAED'];
 public categories: Array<object> = [];
 categoryName : string = '';
 dataStatus: string = 'Add';
 catId: string= '' ;
 constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){

    if(this.dataStatus == 'Add'){
      let randomNumber = Math.floor(Math.random() * this.color.length) ;
      let todoCategory = {
        category: f.value.categoryName,
        colorCode: this.color[randomNumber],
        todoCount: 0
      }

      console.log(f)

      this.categoryService.saveCategory(todoCategory);
      f.resetForm();

    }
    else if(this.dataStatus == 'Edit'){
      f.resetForm();
    }



  }
}

