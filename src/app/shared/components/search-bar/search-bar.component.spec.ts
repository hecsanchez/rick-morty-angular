import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  const heroServiceSpy = jasmine.createSpyObj('HeroService', ['searchHeroes']);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          RouterTestingModule,
          NoopAnimationsModule,
        ],
        declarations: [SearchBarComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(SearchBarComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create hero search component', () => {
    expect(component).toBeTruthy();
  });

});
