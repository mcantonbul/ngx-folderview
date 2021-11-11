import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFolderviewComponent } from './ngx-folderview.component';

describe('NgxFolderviewComponent', () => {
  let component: NgxFolderviewComponent;
  let fixture: ComponentFixture<NgxFolderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFolderviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFolderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
