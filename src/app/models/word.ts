import { DictionaryService } from "../services/dictionary.service";
import { Definition } from "./definition";

export class Word {
  definitions: Array<Definition>;
  features: Array<string>;

  constructor(public word: string, private dictionary: DictionaryService) {
    this.definitions = new Array<Definition>();
    this.features = new Array<string>();

    this.processWord();
  }

  private processWord() {
    /*
    this.dictionary.getDefinitions(this.word).subscribe((defStr) => {
      console.log(defStr);
    });
    */
    this.definitions.push(
      new Definition("word", "language", "noun", ["a def"])
    );

    if (this.dictionary.isPalindrome(this.word)) {
      this.features.push("Palindrome");
    }
  }

  toDefinitionString() {
    var def = "";
    this.definitions.forEach((d) => {
      def += d.meanings;
    });
    return def;
  }

  toFeatureString() {
    return this.features.toString();
  }
}
