import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVisionAnalyzeImageComponent } from './computer-vision-analyze-image.component';

describe('ComputerVisionAnalyzeImageComponent', () => {
  let component: ComputerVisionAnalyzeImageComponent;
  let fixture: ComponentFixture<ComputerVisionAnalyzeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerVisionAnalyzeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerVisionAnalyzeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
