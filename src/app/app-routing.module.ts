import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditDiseaseComponent } from './edit-disease/edit-disease.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewDiseaseComponent } from './view-disease/view-disease.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  
  {path:'addcat',component:AddCategoryComponent,canActivate:[AuthGuard]},
  {path:'viewcat',component:ViewCategoryComponent,canActivate:[AuthGuard]},
  {path:'viewcat/editcat/:id',component:EditCategoryComponent,canActivate:[AuthGuard]},
  {path:'viewmed/editmed/:id',component:EditMedicineComponent,canActivate:[AuthGuard]},
  {path:'addmed',component:AddMedicineComponent,canActivate:[AuthGuard]},
  {path:'viewmed',component:ViewMedicineComponent,canActivate:[AuthGuard]},
  {path:'adddis',component:AddDiseaseComponent,canActivate:[AuthGuard]},
  {path:'viewdis',component:ViewDiseaseComponent,canActivate:[AuthGuard]},
  {path:'viewdis/editdis/:id',component:EditDiseaseComponent,canActivate:[AuthGuard]},
  {path:'signin',component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }