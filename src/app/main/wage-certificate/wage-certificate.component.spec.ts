import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageCertificateComponent } from './wage-certificate.component';

describe('WageCertificateComponent', () => {
  let component: WageCertificateComponent;
  let fixture: ComponentFixture<WageCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
