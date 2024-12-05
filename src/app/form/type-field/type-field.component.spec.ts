import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFieldComponent } from './type-field.component';

describe('TypeFieldComponent', () => {
  let component: TypeFieldComponent;
  let fixture: ComponentFixture<TypeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
