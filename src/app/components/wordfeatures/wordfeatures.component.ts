import { Component } from "@angular/core";

import { Word } from "src/app/models/word";
import { WordFactory } from "src/app/factories/wordfactory";
import { DictionaryService } from "src/app/services/dictionary.service";

@Component({
  selector: "app-word-features",
  templateUrl: "./wordfeatures.component.html",
  styleUrls: ["./wordfeatures.component.scss"],
})
export class WordFeaturesComponent {
  readonly WF = new WordFactory(this.dictionary);
  words: Array<Word> = [];
  searchQuery: string;

  constructor(private dictionary: DictionaryService) {}

  filter() {
    if (this.searchQuery) {
      let hash = this.dictionary.hashAnagram(this.searchQuery);
      // trigger STENCIL change detection
      // https://github.com/ionic-team/ionic-framework/issues/17371
      // *Ionic wont update list unless an object changes.
      // array/objects are not fundamentally changed when
      // their data is changed, so workaround...
      // this.anagrams = [...this.anagrams];
      this.dictionary.getEnglishWords().subscribe((data) => {
        // If anagram found get array else empty array
        let anagrams = data.anagrams[hash] || [];

        if (anagrams && anagrams.length > 0) {
          // Create Word arr from string arr
          this.words = [...this.WF.createWordArray(anagrams)];
        } else {
          this.onClear();
        }
      });
    }
  }

  // Clear search bar and reset listings
  onClear() {
    this.searchQuery = "";
    this.words = [this.WF.createWord("No results")];
  }
}
