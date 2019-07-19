import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuperheroComponent } from './show-superhero.component';

describe('ShowSuperheroComponent', () => {
  let component: ShowSuperheroComponent;
  let fixture: ComponentFixture<ShowSuperheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSuperheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
