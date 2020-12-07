import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Typed from 'typed.js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }
  ngOnInit() {
    let options = {
      strings: ["Add Your favourite Recipe.", "View Your Recipes.", "Update Your Recipes."],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      loop: true
    }
    let typed = new Typed(".typeTextDash", options);
  } 
}
