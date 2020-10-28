import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyParallaxComponent } from './body-parallax.component';

describe('BodyParallaxComponent', () => {
  let component: BodyParallaxComponent;
  let fixture: ComponentFixture<BodyParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyParallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
