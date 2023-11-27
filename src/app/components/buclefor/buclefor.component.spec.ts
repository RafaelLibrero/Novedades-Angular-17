import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucleforComponent } from './buclefor.component';

describe('BucleforComponent', () => {
  let component: BucleforComponent;
  let fixture: ComponentFixture<BucleforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucleforComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BucleforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
