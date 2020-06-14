import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { WordComponent } from './word/word.component';


const routes: Routes = [
  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:currentPage', component: PageComponent },
  { path: 'word/:id', component: WordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
