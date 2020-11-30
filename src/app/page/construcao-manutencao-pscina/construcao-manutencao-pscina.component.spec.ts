import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoManutencaoPscinaComponent } from './construcao-manutencao-pscina.component';

describe('ConstrucaoManutencaoPscinaComponent', () => {
  let component: ConstrucaoManutencaoPscinaComponent;
  let fixture: ComponentFixture<ConstrucaoManutencaoPscinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrucaoManutencaoPscinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrucaoManutencaoPscinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
