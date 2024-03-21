import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveImgComponent } from './progressive-img.component';

describe('ProgressiveImgComponent', () => {
  let component: ProgressiveImgComponent;
  let fixture: ComponentFixture<ProgressiveImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressiveImgComponent]
    });
    fixture = TestBed.createComponent(ProgressiveImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
