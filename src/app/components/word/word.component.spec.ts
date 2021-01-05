import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Word } from 'src/app/models/word';
import { DictionaryService } from 'src/app/services/dictionary.service';

import { WordComponent } from './word.component';

describe('WordComponent', () => {
  let component: WordComponent;
  let fixture: ComponentFixture<WordComponent>;
  let service: DictionaryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  WordComponent ],
            imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent( WordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.word = new Word("iceman", service);
    expect(component.word.features.length).toBe(1);
  });
});
