import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  saveCategory(data: any) {
     console.log(data);


}
}
