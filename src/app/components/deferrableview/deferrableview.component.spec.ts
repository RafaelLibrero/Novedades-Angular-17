import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableviewComponent } from './deferrableview.component';

describe('DeferrableviewComponent', () => {
  let component: DeferrableviewComponent;
  let fixture: ComponentFixture<DeferrableviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
