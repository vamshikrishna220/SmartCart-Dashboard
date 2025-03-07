import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndianDecorComponent } from './indian-decor.component';
import { By } from '@angular/platform-browser';

describe('IndianDecorComponent', () => {
  let component: IndianDecorComponent;
  let fixture: ComponentFixture<IndianDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianDecorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display slideshow images', () => {
    const slideshow = fixture.debugElement.query(By.css('.slideshow img'));
    expect(slideshow).toBeTruthy();
  });

  it('should have a welcome message', () => {
    const heading = fixture.debugElement.query(By.css('h2'));
    expect(heading.nativeElement.textContent).toContain('Welcome to Mayuka Event Planner');
  });

  it('should update slideshow image when next button is clicked', () => {
    const nextButton = fixture.debugElement.query(By.css('.next-btn'));
    expect(nextButton).toBeTruthy();
    
    if (nextButton) {
      const initialIndex = component.currentIndex;
      nextButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.currentIndex).not.toBe(initialIndex);
    }
  });

  it('should update slideshow image when previous button is clicked', () => {
    const prevButton = fixture.debugElement.query(By.css('.prev-btn'));
    expect(prevButton).toBeTruthy();
    
    if (prevButton) {
      const initialIndex = component.currentIndex;
      prevButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.currentIndex).not.toBe(initialIndex);
    }
  });

  it('should contain list items for services', () => {
    const serviceItems = fixture.debugElement.queryAll(By.css('ul li'));
    expect(serviceItems.length).toBeGreaterThan(0);
  });

  it('should display contact information', () => {
    const contactInfo = fixture.debugElement.query(By.css('p strong'));
    expect(contactInfo.nativeElement.textContent).toContain('+1 623-276-9765');
  });
});
