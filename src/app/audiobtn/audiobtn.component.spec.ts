import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobtnComponent } from './audiobtn.component';

describe('AudiobtnComponent', () => {
  let component: AudiobtnComponent;
  let fixture: ComponentFixture<AudiobtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiobtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiobtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
