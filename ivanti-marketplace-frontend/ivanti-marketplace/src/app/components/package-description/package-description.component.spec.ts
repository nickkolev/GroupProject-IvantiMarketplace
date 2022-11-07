import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDescriptionComponent } from './package-description.component';

describe('PackageDescriptionComponent', () => {
  let component: PackageDescriptionComponent;
  let fixture: ComponentFixture<PackageDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
