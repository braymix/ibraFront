import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneProdottoComponent } from './descrizione-prodotto.component';

describe('DescrizioneProdottoComponent', () => {
  let component: DescrizioneProdottoComponent;
  let fixture: ComponentFixture<DescrizioneProdottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrizioneProdottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescrizioneProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
