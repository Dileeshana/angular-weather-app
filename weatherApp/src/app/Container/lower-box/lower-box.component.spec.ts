import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBoxComponent } from './lower-box.component';

describe('LowerBoxComponent', () => {
  let component: LowerBoxComponent;
  let fixture: ComponentFixture<LowerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
