import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoManutencaoJardimComponent } from './criacao-manutencao-jardim.component';

describe('CriacaoManutencaoJardimComponent', () => {
  let component: CriacaoManutencaoJardimComponent;
  let fixture: ComponentFixture<CriacaoManutencaoJardimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoManutencaoJardimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoManutencaoJardimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
