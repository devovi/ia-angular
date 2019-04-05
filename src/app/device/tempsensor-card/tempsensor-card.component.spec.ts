import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsensorCardComponent } from './tempsensor-card.component';

describe('TempsensorCardComponent', () => {
  let component: TempsensorCardComponent;
  let fixture: ComponentFixture<TempsensorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempsensorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
