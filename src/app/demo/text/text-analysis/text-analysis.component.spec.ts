import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalysisComponent } from './text-analysis.component';

describe('TextAnalysisComponent', () => {
  let component: TextAnalysisComponent;
  let fixture: ComponentFixture<TextAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
