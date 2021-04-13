import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaNuovoArticoloComponent } from './crea-nuovo-articolo.component';

describe('CreaNuovoArticoloComponent', () => {
  let component: CreaNuovoArticoloComponent;
  let fixture: ComponentFixture<CreaNuovoArticoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaNuovoArticoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaNuovoArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
