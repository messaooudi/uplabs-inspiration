import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedButtonGroupComponent } from './animated-button-group.component';



describe('AnimatedButtonGroupComponent', () => {
  let component: AnimatedButtonGroupComponent;
  let fixture: ComponentFixture<AnimatedButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
