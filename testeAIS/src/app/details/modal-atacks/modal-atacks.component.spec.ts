import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtacksComponent } from './modal-atacks.component';

describe('ModalAtacksComponent', () => {
  let component: ModalAtacksComponent;
  let fixture: ComponentFixture<ModalAtacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAtacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
