import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVisionReadTextComponent } from './computer-vision-read-text.component';

describe('ComputerVisionReadTextComponent', () => {
  let component: ComputerVisionReadTextComponent;
  let fixture: ComponentFixture<ComputerVisionReadTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerVisionReadTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerVisionReadTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
