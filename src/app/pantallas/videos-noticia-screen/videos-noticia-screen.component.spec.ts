import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosNoticiaScreenComponent } from './videos-noticia-screen.component';

describe('VideosNoticiaScreenComponent', () => {
  let component: VideosNoticiaScreenComponent;
  let fixture: ComponentFixture<VideosNoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosNoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosNoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
