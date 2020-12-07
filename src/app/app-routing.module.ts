import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RecipeComponent } from './views/addRecipe/recipe.component';
import { EditRecipeComponent } from './views/editRecipe/editRecipe.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginComponent } from './views/login/login.component';
import { recipeListComponent } from './views/recipeList/recipeList.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { AccessGuard } from './guards/access.guard';
  
const routes: Routes = [
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'  },
      { path: 'recipe', component: RecipeComponent, pathMatch: 'full' },
      { path: 'editrecipe/:id', component: EditRecipeComponent, pathMatch: 'full' },
      { path: 'recipeList', component: recipeListComponent, pathMatch: 'full' },
      { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  
  imports:
   [
     RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
