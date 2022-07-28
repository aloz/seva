import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTopComponent } from './dialog-top.component';

describe('DialogTopComponent', () => {
  let component: DialogTopComponent;
  let fixture: ComponentFixture<DialogTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
