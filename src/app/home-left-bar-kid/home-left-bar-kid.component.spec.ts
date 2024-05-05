import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftBarKidComponent } from './home-left-bar-kid.component';

describe('HomeLeftBarKidComponent', () => {
  let component: HomeLeftBarKidComponent;
  let fixture: ComponentFixture<HomeLeftBarKidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftBarKidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLeftBarKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
