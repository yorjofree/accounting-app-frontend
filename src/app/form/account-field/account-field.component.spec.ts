import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFieldComponent } from './account-field.component';

describe('AccountFieldComponent', () => {
  let component: AccountFieldComponent;
  let fixture: ComponentFixture<AccountFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
