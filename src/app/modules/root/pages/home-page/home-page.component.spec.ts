import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomePage', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule],
        declarations: [
          HomePageComponent,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePageComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
