import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcategoryComponent } from './pcategory.component';

describe('PcategoryComponent', () => {
  let component: PcategoryComponent;
  let fixture: ComponentFixture<PcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
