import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo a'));
    expect(logoElement.nativeElement.textContent).toContain('EShopper');
  });

  it('should display navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('.nav a'));
    expect(navLinks.length).toBe(4);
    expect(navLinks[0].nativeElement.textContent).toContain('Home');
    expect(navLinks[1].nativeElement.textContent).toContain('Shop');
    expect(navLinks[2].nativeElement.textContent).toContain('About');
    expect(navLinks[3].nativeElement.textContent).toContain('Contact');
  });

  it('should display the search bar', () => {
    const searchBar = fixture.debugElement.query(By.css('.search-bar input'));
    expect(searchBar).toBeTruthy();
  });

  it('should display auth links', () => {
    const authLinks = fixture.debugElement.queryAll(By.css('.auth-links a'));
    expect(authLinks.length).toBe(1);
    expect(authLinks[0].nativeElement.textContent).toContain('Login');
  });

  it('should display the cart icon with badge', () => {
    const cartIcon = fixture.debugElement.query(By.css('.cart-icon .fa-shopping-cart'));
    const badge = fixture.debugElement.query(By.css('.cart-icon .badge'));
    expect(cartIcon).toBeTruthy();
    expect(badge.nativeElement.textContent).toBe('0');
  });
});
