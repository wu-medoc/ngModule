import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMapComponent } from './explore-map.component';

describe('ExploreMapComponent', () => {
  let component: ExploreMapComponent;
  let fixture: ComponentFixture<ExploreMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
