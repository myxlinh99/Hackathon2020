import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextToAslPage } from './text-to-asl.page';

describe('TextToAslPage', () => {
  let component: TextToAslPage;
  let fixture: ComponentFixture<TextToAslPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToAslPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextToAslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
