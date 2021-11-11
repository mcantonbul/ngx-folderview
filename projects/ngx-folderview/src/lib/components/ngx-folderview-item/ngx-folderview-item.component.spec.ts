import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFolderviewItemComponent } from './ngx-folderview-item.component';

describe('NgxFolderviewItemComponent', () => {
  let component: NgxFolderviewItemComponent;
  let fixture: ComponentFixture<NgxFolderviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFolderviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFolderviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
