import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeItemComponent } from './exchange-item.component';

describe('ExchangeItemComponent', () => {
  let component: ExchangeItemComponent;
  let fixture: ComponentFixture<ExchangeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
