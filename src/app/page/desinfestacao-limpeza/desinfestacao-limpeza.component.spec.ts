import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinfestacaoLimpezaComponent } from './desinfestacao-limpeza.component';

describe('DesinfestacaoLimpezaComponent', () => {
  let component: DesinfestacaoLimpezaComponent;
  let fixture: ComponentFixture<DesinfestacaoLimpezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesinfestacaoLimpezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinfestacaoLimpezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
