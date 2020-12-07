import { recipeListComponent } from './views/recipeList/recipeList.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrendModule } from 'ngx-trend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'angular-archwizard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { RecipeComponent } from './views/addRecipe/recipe.component';
import { EditRecipeComponent } from './views/editRecipe/editRecipe.component';
import { SettingsComponent } from './views/settings/settings.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, FormBuilder } from '@angular/forms';
// import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './providers/token.interceptor';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
// scroll to 
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterComponent } from './footer/footer.component';

// Reactive Forms
import {ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './shared/loader/loader.component'; 
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './services/loader.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatDialogRef, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSnackBar, MatSnackBarModule, MatTableModule} from '@angular/material';
import { TitleCasePipe, DatePipe } from '@angular/common';
import { AccessGuard } from './guards/access.guard';
import { EncrDecrService } from './services/EncrDecrService.service';
import { FormService } from './services/form';
import { DialogBoxComponent } from './dialogBox/dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    DashboardComponent,
    RecipeComponent,
    EditRecipeComponent,
    SettingsComponent,
    recipeListComponent,
    DialogBoxComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TrendModule,
    FusionChartsModule,
    DataTablesModule,
    ArchwizardModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,  
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,  
    MatDialogModule,  
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ScrollToModule.forRoot(),
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  exports: [
    LoaderComponent
],
  providers: [ 
    HttpClientModule,
    AuthGuard,
    AuthService,
    LoaderService,
    MatDatepickerModule,
    TitleCasePipe,
    DatePipe,
    AccessGuard,
    EncrDecrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
      {
        provide: MatDialogRef,
        useValue: {}
      },
      DialogBoxComponent,
    FormService,
    MatSnackBar
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
