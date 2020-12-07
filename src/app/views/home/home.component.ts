import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Typed from 'typed.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipeList: any;
  constructor(private auth: AuthService) { }
  ngOnInit() {
    this.getRecipesList();
    let options = {
      strings: ["My CookBook.", "Recipe World.", "Foodies World."],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      loop: true
    }
    let typed = new Typed(".typeText", options);
  }
  getRecipesList():void {
    this.auth.getAllRecipes().subscribe((res: any) => {
    this.recipeList = res.result;
    });
  }
}
