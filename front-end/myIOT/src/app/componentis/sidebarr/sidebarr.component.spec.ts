import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrComponent } from './sidebarr.component';

describe('SidebarrComponent', () => {
  let component: SidebarrComponent;
  let fixture: ComponentFixture<SidebarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarrComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
