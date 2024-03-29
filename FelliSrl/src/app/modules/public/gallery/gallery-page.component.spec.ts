import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GalleryPageComponent} from './gallery-page.component';

describe('GalleryComponent', () => {
  let component: GalleryPageComponent;
  let fixture: ComponentFixture<GalleryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryPageComponent]
    });
    fixture = TestBed.createComponent(GalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
