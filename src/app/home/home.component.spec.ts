import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Welcome to Shiya Elegant Finds');
  });

  it('should have a slideshow container section', () => {
    const slideshow = fixture.debugElement.query(By.css('.slideshow-container'));
    expect(slideshow).toBeTruthy();
  });

  it('should have a description section', () => {
    const description = fixture.debugElement.query(By.css('.home-description'));
    expect(description).toBeTruthy();
  });

  it('should update slideshow image when next button is clicked', () => {
    const nextButton = fixture.debugElement.query(By.css('.next'));
    expect(nextButton).toBeTruthy(); // Ensure button exists

    if (nextButton) {
      const initialImage = component.currentIndex;
      nextButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.currentIndex).not.toBe(initialImage);
    }
  });

  it('should update slideshow image when previous button is clicked', () => {
    const prevButton = fixture.debugElement.query(By.css('.prev'));
    expect(prevButton).toBeTruthy(); // Ensure button exists

    if (prevButton) {
      const initialImage = component.currentIndex;
      prevButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.currentIndex).not.toBe(initialImage);
    }
  });

  it('should contain list items for different gift categories', () => {
    const listItems = fixture.debugElement.queryAll(By.css('.home-description ul li'));
    expect(listItems.length).toBeGreaterThan(0);
  });
});
