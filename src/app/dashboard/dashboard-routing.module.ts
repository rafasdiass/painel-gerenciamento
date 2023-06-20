import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: 'produtos', component: ProductComponent },
  { path: 'dashboard', component: HomeDashboardComponent },
  // Redireciona para dashboard quando a rota é vazia
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
