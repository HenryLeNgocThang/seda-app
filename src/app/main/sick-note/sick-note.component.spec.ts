import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickNoteComponent } from './sick-note.component';

describe('SickNoteComponent', () => {
  let component: SickNoteComponent;
  let fixture: ComponentFixture<SickNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SickNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SickNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
