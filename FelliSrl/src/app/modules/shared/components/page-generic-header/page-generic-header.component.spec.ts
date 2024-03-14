import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenericHeaderComponent } from './page-generic-header.component';

describe('PageGenericHeaderComponent', () => {
  let component: PageGenericHeaderComponent;
  let fixture: ComponentFixture<PageGenericHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGenericHeaderComponent]
    });
    fixture = TestBed.createComponent(PageGenericHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
