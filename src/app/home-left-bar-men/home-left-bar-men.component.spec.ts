import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftBarMenComponent } from './home-left-bar-men.component';

describe('HomeLeftBarMenComponent', () => {
  let component: HomeLeftBarMenComponent;
  let fixture: ComponentFixture<HomeLeftBarMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftBarMenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLeftBarMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
