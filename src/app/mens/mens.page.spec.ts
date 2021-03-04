import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensPage } from './mens.page';

describe('MensPage', () => {
  let component: MensPage;
  let fixture: ComponentFixture<MensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
