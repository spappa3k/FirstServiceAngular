import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewListaComponent } from './preview-lista.component';

describe('PreviewListaComponent', () => {
  let component: PreviewListaComponent;
  let fixture: ComponentFixture<PreviewListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
