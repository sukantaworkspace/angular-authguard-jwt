import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustformsComponent } from './custforms.component';

describe('CustformsComponent', () => {
  let component: CustformsComponent;
  let fixture: ComponentFixture<CustformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
