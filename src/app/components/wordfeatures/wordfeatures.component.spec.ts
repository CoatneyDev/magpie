import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { DictionaryService } from "src/app/services/dictionary.service";

import { WordFeaturesComponent } from "./wordfeatures.component";

describe("WordFeaturesComponent", () => {
  let component: WordFeaturesComponent;
  let fixture: ComponentFixture<WordFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordFeaturesComponent],
      providers: [HttpClient, DictionaryService],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WordFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
