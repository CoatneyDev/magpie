import {
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

import { Word } from "src/app/models/word";
import { WordFactory } from "src/app/factories/wordfactory";
import { DictionaryService } from "src/app/services/dictionary.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-word-features",
  templateUrl: "./wordfeatures.component.html",
  styleUrls: ["./wordfeatures.component.scss"],
})
export class WordFeaturesComponent
  implements OnChanges, OnInit, DoCheck, OnDestroy {
  subscriptions: Subscription;
  @ViewChild("header") headerEl: ElementRef;
  readonly WF = new WordFactory(this.dictionary);
  words: Array<Word> = [];
  searchQuery: string;

  constructor(private dictionary: DictionaryService) {
    this.subscriptions = new Subscription();
    //console.log("Angular Lifecycle Demo: WordFeatures Component & Children");
    //console.log("WordFeaturesComponent constructor()");
  }

  ngOnChanges() {
    //console.log("WordFeaturesComponent ngOnChanges()");
  }

  ngOnInit() {
    //console.log("WordFeaturesComponent ngOnInit()");
    console.log(this.headerEl + " headerEl value in ngOnInit()");
  }

  ngDoCheck() {
    //console.log("WordFeaturesComponent ngDoCheck()");
  }

  ngAfterContentInit() {
    //console.log("WordFeaturesComponent ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    //console.log("WordFeaturesComponent ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    //console.log("WordFeaturesComponent ngAfterViewInit()");
    console.log(this.headerEl + " headerEl value in ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    //console.log("WordFeaturesComponent ngAfterViewChecked()");
  }

  ngOnDestroy() {
    //console.log("WordFeaturesComponent ngOnDestroy()");

    this.subscriptions.unsubscribe();
  }

  filter() {
    if (this.searchQuery) {
      // Randomly change header text via ViewChild ElementRef
      let headers = [
        "Try searchinging: DAD",
        "Try searchinging: CINEMA",
        "Try searchinging: CARE",
        "Try searchinging: RESCUE",
        "Try searchinging: LEVEL",
      ];
      this.headerEl.nativeElement.textContent =
        headers[Math.floor(headers.length * Math.random())];

      let hash = this.dictionary.hashAnagram(this.searchQuery);
      // trigger STENCIL change detection
      // https://github.com/ionic-team/ionic-framework/issues/17371
      // *Ionic wont update list unless an object changes.
      // array/objects are not fundamentally changed when
      // their data is changed, so workaround...
      // this.anagrams = [...this.anagrams];
      let searchSub: Subscription = this.dictionary
        .getEnglishWords()
        .subscribe((data) => {
          // If anagram found get array else empty array
          let anagrams = data.anagrams[hash] || [];
          let firstLetter = this.searchQuery.split("")[0];

          if (anagrams && anagrams.length > 0) {
            // Create Word arr from string arr
            this.words = [...this.WF.createWordArray(anagrams)];
          } else if (
            data.US[firstLetter].split(" ").includes(this.searchQuery)
          ) {
            // not an anagram, but a word
            this.words.push(this.WF.createWord(this.searchQuery));
          } else {
            this.onClear();
          }
        });


      // combine subscriptions so we can clean them all up at once in OnDestroy
      this.subscriptions.add(searchSub);
    }
  }

  // Clear search bar and reset listings
  onClear() {
    this.searchQuery = "";
    this.words = [this.WF.createWord("No results")];
  }
}
