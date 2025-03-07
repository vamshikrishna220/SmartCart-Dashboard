import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizedGiftsComponent } from './personalized-gifts.component';
import { By } from '@angular/platform-browser';

describe('PersonalizedGiftsComponent', () => {
  let component: PersonalizedGiftsComponent;
  let fixture: ComponentFixture<PersonalizedGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedGiftsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizedGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message', () => {
    const heading = fixture.debugElement.query(By.css('h2'));
    expect(heading.nativeElement.textContent).toContain('Personalized Gifts at Shiya Elegant Finds');
  });

  it('should contain a description paragraph', () => {
    const description = fixture.debugElement.query(By.css('p'));
    expect(description).toBeTruthy();
  });

  it('should display list of personalized gift options', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul li'));
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('should display ordering steps', () => {
    const orderSteps = fixture.debugElement.queryAll(By.css('ol li'));
    expect(orderSteps.length).toBeGreaterThan(0);
  });

  it('should display contact information', () => {
    const contactInfo = fixture.debugElement.query(By.css('p strong'));
    expect(contactInfo.nativeElement.textContent).toContain('+1 623-276-9765');
  });
});
