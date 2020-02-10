import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostListComponent } from './post/post-list/post-list.component';



const routes: Routes = [
  // pagina principal   http://localhost:4200
  { path: '', component: PostListComponent },
  // págna de creacion de publicaciones   http://localhost:4200/create
  { path: 'create', component: PostCreateComponent }
    //  canActivate: [AuthGuard] 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }