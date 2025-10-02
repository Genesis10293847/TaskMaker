import { Component } from '@angular/core';
import { Home } from './home/home';
import { Summary } from './summary/summary';
import { Routes } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'task-form', component: TaskForm},
  {path: 'task-list', component: TaskList},
  {path: 'summary', component: Summary}
];
