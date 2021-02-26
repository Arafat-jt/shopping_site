import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JacketsPage } from './jackets.page';

describe('JacketsPage', () => {
  let component: JacketsPage;
  let fixture: ComponentFixture<JacketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JacketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
