import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGraphicComponent } from './lib-graphic.component';

describe('LibGraphicComponent', () => {
  let component: LibGraphicComponent;
  let fixture: ComponentFixture<LibGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
