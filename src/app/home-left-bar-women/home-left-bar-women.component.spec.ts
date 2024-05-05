import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftBarWomenComponent } from './home-left-bar-women.component';

describe('HomeLeftBarWomenComponent', () => {
  let component: HomeLeftBarWomenComponent;
  let fixture: ComponentFixture<HomeLeftBarWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftBarWomenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLeftBarWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
