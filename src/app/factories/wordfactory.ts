import { Word } from "../models/word";
import { DictionaryService } from "../services/dictionary.service";

export class WordFactory {
  constructor(private dictionary: DictionaryService) {}

  // Name: createWord
  // Inputs: string
  // Outputs: Word
  // Runtime Complexity: O(1)
  // Desription: Converts a string into a Word obj
  createWord(word: string): Word {
    let wd = new Word(word, this.dictionary);

    if (this.dictionary.isAnagramInDictionary(word)) {
      wd.features.push("Anagram");
    }
    return wd;
  }

  // Name: createWordArray
  // Inputs: Array<string> of words
  // Outputs: Array<Word>
  // Runtime Complexity: O(n)
  // Desription: Converts strings to Word objs
  createWordArray(words: Array<string>): Array<Word> {
    let wordObs = [];
    words.forEach((element) => {
      wordObs.push(this.createWord(element));
    });
    return wordObs;
  }
}
