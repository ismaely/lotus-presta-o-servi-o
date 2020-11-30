import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoCivilComponent } from './construcao-civil.component';

describe('ConstrucaoCivilComponent', () => {
  let component: ConstrucaoCivilComponent;
  let fixture: ComponentFixture<ConstrucaoCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrucaoCivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrucaoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
