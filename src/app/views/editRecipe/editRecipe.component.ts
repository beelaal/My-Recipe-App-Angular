import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSnackBar } from '@angular/material';
import { FormService } from '../../services/form';


@Component({
  selector: 'app-recipe',
  templateUrl: './editRecipe.component.html',
  styleUrls: ['./editRecipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
// form group for adding new recipe
  editRecipeForm: FormGroup;
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
  recipe_id: any;
  constructor(private auth: AuthService,private route:ActivatedRoute, private formBuilder: FormBuilder, private router: Router, public FormService: FormService,public snackbar: MatSnackBar){
    this.editRecipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      preprationSteps: ['', Validators.required],
      ingredients: ['', Validators.required],
      cookingTime: ['', Validators.required],
      image: [''], 
      numberOfServings:['', Validators.required]
    });
    this.editRecipeForm.valueChanges.subscribe((data) => {
      this.formErrors = this.FormService.validateForm(this.editRecipeForm, this.formErrors, true)
    });
  }  
  onSubmitSaveRecipe() {
    this.FormService.markFormGroupTouched(this.editRecipeForm);
    if (this.editRecipeForm.valid) {
      this.editRecipeForm.value.recipe_id = this.recipe_id;
      this.editRecipeForm.value.image = this.imageURL;
        this.auth.editRecipes(this.editRecipeForm.value).subscribe(res => {   
          this.snackbar.open('Succesfully updated new recipe.', 'Close', {
            duration: 3000,
          }); 
          this.router.navigate(['/app/recipeList']); 
          this.editRecipeForm.reset();
         this.editRecipeForm.markAsUntouched();
        });
      
      } else {
        this.formErrors = this.FormService.validateForm(this.editRecipeForm, this.formErrors, false)
      }
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipe_id = params['id'];
      this.getRecipeDetails(this.recipe_id);
   });
   } 
  browse(){
    // $('#upload-Img-Input').click();
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
    this.editRecipeForm.patchValue({imageURL: this.uploadimage});
  };

  const formData = new FormData();
  const image = $event.target.files[0];
  formData.append('image', image); 
  
  this.auth.uploadImageOnS3(formData).subscribe((res: any) => {
    this.imageURL = res.result.url;
  });
}
  getRecipeDetails(id){ 
      this.auth.getRecipeDetails(id).subscribe(res => {
        if(res['result']){ 
          res = res['result'];
          this.editRecipeForm.get('name').setValue(res['name']);
          this.editRecipeForm.get('preprationSteps').setValue(res['preprationSteps']);
          this.editRecipeForm.get('cookingTime').setValue(res['cookingTime']);
          this.editRecipeForm.get('ingredients').setValue(res['ingredients']);
          this.editRecipeForm.get('numberOfServings').setValue(res['numberOfServings']);
        }
        
      });
  }
}
