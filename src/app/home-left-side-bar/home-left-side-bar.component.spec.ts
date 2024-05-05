import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftSideBarComponent } from './home-left-side-bar.component';

describe('HomeLeftSideBarComponent', () => {
  let component: HomeLeftSideBarComponent;
  let fixture: ComponentFixture<HomeLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
