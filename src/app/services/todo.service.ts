import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private todoService: TodoService, private activatedRoute: ActivatedRoute) { }



  saveTodo( id: string, data :any ) {}

  loadTodos( id:string ) {}

  updateTodo( catId:string, todoId: string, updateData: string ) {}

  deleteTodo(catId: string, todoId:string) {}

  markComplete( catId: string, todoId: string) {}

  markUncomplete( catId: string, todoId: string) {}

}


