import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingRoomComponent } from './chatting-room.component';

describe('ChattingRoomComponent', () => {
  let component: ChattingRoomComponent;
  let fixture: ComponentFixture<ChattingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
