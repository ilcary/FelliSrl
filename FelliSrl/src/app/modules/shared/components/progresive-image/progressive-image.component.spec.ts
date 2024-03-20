import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveImageComponent } from '././progressive-image.component';

describe('ProgresiveImageComponent', () => {
  let component: ProgressiveImageComponent;
  let fixture: ComponentFixture<ProgressiveImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressiveImageComponent]
    });
    fixture = TestBed.createComponent(ProgressiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
