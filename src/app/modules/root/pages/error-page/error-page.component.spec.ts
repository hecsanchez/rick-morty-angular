import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorPageComponent } from './error-page.component';

describe('ErrorPage', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorPageComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(ErrorPageComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create error page component', () => {
    expect(component).toBeTruthy();
  });
});
