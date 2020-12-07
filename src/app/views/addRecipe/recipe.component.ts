import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSnackBar } from '@angular/material';
import { FormService } from '../../services/form';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
// form group for adding new recipe
  addRecipeForm: FormGroup;
  uploadimage = '';
  name: string;
  preprationSteps: string;
  cookingTime: string;
  imageURL: string;
  ingredients: string;
  numberOfServings: number = 0;
  public formErrors = {
    name: '',
    preprationSteps: '',
    ingredients: '',
    cookingTime: '',
    numberOfServings: '',
  };
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router, public FormService: FormService,public snackbar: MatSnackBar){
    this.addRecipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      preprationSteps: ['', Validators.required],
      ingredients: ['', Validators.required],
      cookingTime: ['', Validators.required],
      image: [''], 
      numberOfServings:['', Validators.required]
    });
    this.addRecipeForm.valueChanges.subscribe((data) => {
      this.formErrors = this.FormService.validateForm(this.addRecipeForm, this.formErrors, true)
    });
  }  
  onSubmitSaveRecipe() {
    this.FormService.markFormGroupTouched(this.addRecipeForm);
    if (this.addRecipeForm.valid) {
      this.addRecipeForm.value.image = this.imageURL;
        this.auth.saveRecipes(this.addRecipeForm.value).subscribe(res => {   
          this.snackbar.open('Succesfully added new recipe.', 'Close', {
            duration: 3000,
          }); 
          this.router.navigate(['/app/recipeList']); 
          this.addRecipeForm.reset();
         this.addRecipeForm.markAsUntouched();
        });
      
      } else {
        this.formErrors = this.FormService.validateForm(this.addRecipeForm, this.formErrors, false)
      }
  }
  ngOnInit() {
   } 
  browse(){
    document.getElementById('choose').click();
  }
  
// uploading image on s3 bucket 
  setImage($event) {
    if ($event.target.files.length === 0) { return; }
    if ($event.target.files[0].type.match(/image\/*/) == null) { return; }
    const reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    reader.onload = (event) => {
      this.uploadimage = reader.result.toString();  
      this.addRecipeForm.patchValue({imageURL: this.uploadimage});
    };

    const formData = new FormData();
    const image = $event.target.files[0];
    formData.append('image', image); 
    
    this.auth.uploadImageOnS3(formData).subscribe((res: any) => {
      this.imageURL = res.result.url;
    });
  }
}
