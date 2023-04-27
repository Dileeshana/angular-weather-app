import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBoxComponent } from './upper-box.component';

describe('UpperBoxComponent', () => {
  let component: UpperBoxComponent;
  let fixture: ComponentFixture<UpperBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
