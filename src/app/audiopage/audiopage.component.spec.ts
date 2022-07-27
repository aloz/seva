import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiopageComponent } from './audiopage.component';

describe('AudiopageComponent', () => {
  let component: AudiopageComponent;
  let fixture: ComponentFixture<AudiopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
