import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './service/user.service';
import { User } from './model/user';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Data Table');
  });

  it('should render table.table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table.table')).toBeTruthy();
  });

  it('should render rows into the table tbody from the userList array', <any>fakeAsync( (): void => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    tick(1000);

    fixture.whenStable().then(() => {
      let mock = [
        new User(),
        new User(),
        new User(),
        new User(),
        new User(),
      ];

      let component = fixture.componentInstance;
      component.userList = mock;
      // after something in the component changes, you should detect changes
      fixture.detectChanges();

      // everything else in the beforeEach needs to be done here.
      let trs = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
      expect( trs.length ).toEqual(5);
  })

    /* fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(fixture.componentRef.instance.userList.length).toEqual(100); */

  }));
});
