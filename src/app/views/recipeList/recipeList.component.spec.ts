import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeListComponent } from './recipeList.component';

describe('recipeListComponent', () => {
  let component: recipeListComponent;
  let fixture: ComponentFixture<recipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
