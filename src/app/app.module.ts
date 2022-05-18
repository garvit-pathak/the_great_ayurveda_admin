import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { SignInComponent } from './sign-in/sign-in.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { ViewDiseaseComponent } from './view-disease/view-disease.component';
import { EditDiseaseComponent } from './edit-disease/edit-disease.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    SignInComponent,
    AddMedicineComponent,
    ViewMedicineComponent,
    EditCategoryComponent,
    EditMedicineComponent,
    AddDiseaseComponent,
    ViewDiseaseComponent,
    EditDiseaseComponent,
    DoctorListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }