import { HomeEcommerceComponent } from './ecommerce/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeEcommerceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
