import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DeactivateGaurdService } from './service/guard/deactivate-gaurdservice';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGaurdService } from './service/guard/auth-guardservice';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,
  canActivateChild:[AuthGaurdService],
  children:[
    {path:':id/:name',component:UsersComponent},
    {path:':id/:name/edit',component:EditUserComponent,canDeactivate:[DeactivateGaurdService]},
]},
  {path:'categories',component:CategoryComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'**',redirectTo:'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
