import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianDecorComponent } from './indian-decor.component';

describe('IndianDecorComponent', () => {
  let component: IndianDecorComponent;
  let fixture: ComponentFixture<IndianDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianDecorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
