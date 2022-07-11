import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Authservice } from './service/guard/authservice';
import { AuthGaurdService } from './service/guard/auth-guardservice';
import { DeactivateGaurdService } from './service/guard/deactivate-gaurdservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoryComponent,
    EditUserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [Authservice,AuthGaurdService,DeactivateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
