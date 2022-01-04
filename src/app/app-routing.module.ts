import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from './myComponent/todos/todos.component'
import {AboutComponentComponent} from './myComponent/about-component/about-component.component'

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about-component', component:AboutComponentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
