import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DialogBoxComponent } from 'src/app/dialogBox/dialog-box/dialog-box.component';
import { AuthService } from 'src/app/services/auth.service';

export interface RecipeData {
  name: string;
  cookingTime: string;
  numberOfServings: string;
  image: string;
  recipe_id: string;
  Sr: number;
} 
@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class recipeListComponent implements OnInit, RecipeData {
  name: string;
  cookingTime: string;
  numberOfServings: string;
  image: string;
  recipe_id: string;
  Sr: number;
  userData: any= [];
  selectedId: any = 0;
  displayedColumns: string[] = ['Sr','name','cookingTime', 'numberOfServings', 'image','action'];
  dataSource: MatTableDataSource<RecipeData>;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort; 
     constructor(public dialog: MatDialog, private auth: AuthService) {
    }
     applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    openDialog(action,id) { 
      this.selectedId = id;
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '500px',
        data: id
      });
   
      dialogRef.afterClosed().subscribe(result => { 
      });
    }
    ngOnInit() {
      this.getRecipesList();
    }
    getRecipesList():void {
      this.auth.getAllRecipes().subscribe((res: any) => {
        this.dataSource = new MatTableDataSource((res.result && res.result.length > 0) ? res.result : []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }



}
