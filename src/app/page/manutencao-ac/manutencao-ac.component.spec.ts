import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoAcComponent } from './manutencao-ac.component';

describe('ManutencaoAcComponent', () => {
  let component: ManutencaoAcComponent;
  let fixture: ComponentFixture<ManutencaoAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
