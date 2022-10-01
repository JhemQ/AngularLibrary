import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhemtzyLibComponent } from './jhemtzy-lib.component';

describe('JhemtzyLibComponent', () => {
  let component: JhemtzyLibComponent;
  let fixture: ComponentFixture<JhemtzyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JhemtzyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JhemtzyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
