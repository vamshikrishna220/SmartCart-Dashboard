import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiftIdeasComponent } from './gift-ideas.component';
import { By } from '@angular/platform-browser';

describe('GiftIdeasComponent', () => {
  let component: GiftIdeasComponent;
  let fixture: ComponentFixture<GiftIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftIdeasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display gift items', () => {
    const giftItems = fixture.debugElement.queryAll(By.css('.gift-item'));
    expect(giftItems.length).toBe(component.giftItems.length);
  });

  it('should add item to cart when add button is clicked', () => {
    const addButton = fixture.debugElement.query(By.css('.add-cart-btn'));
    expect(addButton).toBeTruthy();
    
    if (addButton) {
      addButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.cart.length).toBeGreaterThan(0);
    }
  });

  it('should update quantity when increment button is clicked', () => {
    component.addToCart(component.giftItems[0]);
    fixture.detectChanges();

    const quantityBefore = component.getCartQuantity(component.giftItems[0].id);
    const incrementButton = fixture.debugElement.query(By.css('.quantity-btn:last-child'));
    expect(incrementButton).toBeTruthy();
    
    if (incrementButton) {
      incrementButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.getCartQuantity(component.giftItems[0].id)).toBe(quantityBefore + 1);
    }
  });

  it('should update quantity when decrement button is clicked', () => {
    component.addToCart(component.giftItems[0]);
    component.addToCart(component.giftItems[0]);
    fixture.detectChanges();

    const quantityBefore = component.getCartQuantity(component.giftItems[0].id);
    const decrementButton = fixture.debugElement.query(By.css('.quantity-btn'));
    expect(decrementButton).toBeTruthy();
    
    if (decrementButton) {
      decrementButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.getCartQuantity(component.giftItems[0].id)).toBe(quantityBefore - 1);
    }
  });

  it('should remove item from cart when quantity reaches zero', () => {
    component.addToCart(component.giftItems[0]);
    fixture.detectChanges();
    component.removeFromCart(component.giftItems[0]);
    fixture.detectChanges();
    expect(component.getCartQuantity(component.giftItems[0].id)).toBe(0);
  });

  it('should calculate total price correctly', () => {
    component.addToCart(component.giftItems[0]);
    component.addToCart(component.giftItems[1]);
    fixture.detectChanges();
    
    const expectedTotal = component.giftItems[0].price + component.giftItems[1].price;
    expect(component.totalPrice).toBe(expectedTotal);
  });
});
