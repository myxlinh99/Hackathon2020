import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AslToTextPage } from './asl-to-text.page';

describe('AslToTextPage', () => {
  let component: AslToTextPage;
  let fixture: ComponentFixture<AslToTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AslToTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AslToTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
