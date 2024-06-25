import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPostComponent } from './preview-post.component';

describe('PreviewPostComponent', () => {
  let component: PreviewPostComponent;
  let fixture: ComponentFixture<PreviewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
