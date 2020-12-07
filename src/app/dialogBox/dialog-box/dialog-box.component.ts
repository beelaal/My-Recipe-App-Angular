import { Component, OnInit, Optional, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { RecipeData } from "../../views/recipeList/recipeList.component";


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  constructor(private auth: AuthService, public snackbar: MatSnackBar, public dialogRef: MatDialogRef<DialogBoxComponent>,
     @Optional() @Inject(MAT_DIALOG_DATA) public data: RecipeData ) {

  }
  deleteRecipe(){
    this.auth.removeRecipe(this.data).subscribe(res => {
      if (res['result']) { 
        location.reload();
      }
      else {
        this.dialogRef.close({ event: 'Cancel'  });
      }
    });
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
