import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElecPage } from './elec.page';

describe('ElecPage', () => {
  let component: ElecPage;
  let fixture: ComponentFixture<ElecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
