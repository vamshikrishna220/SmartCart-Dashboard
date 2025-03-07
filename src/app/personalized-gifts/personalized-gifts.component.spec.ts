import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedGiftsComponent } from './personalized-gifts.component';

describe('PersonalizedGiftsComponent', () => {
  let component: PersonalizedGiftsComponent;
  let fixture: ComponentFixture<PersonalizedGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
