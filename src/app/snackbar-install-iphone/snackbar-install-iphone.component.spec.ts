import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarInstallIphoneComponent } from './snackbar-install-iphone.component';

describe('SnackbarInstallIphoneComponent', () => {
  let component: SnackbarInstallIphoneComponent;
  let fixture: ComponentFixture<SnackbarInstallIphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarInstallIphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarInstallIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
