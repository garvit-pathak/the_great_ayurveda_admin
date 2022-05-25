import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditDiseaseComponent } from './edit-disease/edit-disease.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserQueryComponent } from './user-query/user-query.component';
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
  {path:'userlist',component:UserListComponent,canActivate:[AuthGuard]},
  {path:'doctorlist',component:DoctorListComponent,canActivate:[AuthGuard]},
  {path:'viewdis',component:ViewDiseaseComponent,canActivate:[AuthGuard]},
  {path:'viewdis/editdis/:id',component:EditDiseaseComponent,canActivate:[AuthGuard]},
  {path:'orderlist',component:OrderViewComponent,canActivate:[AuthGuard]},
  {path:'querylist',component:UserQueryComponent,canActivate:[AuthGuard]},
  {path:'signin',component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }