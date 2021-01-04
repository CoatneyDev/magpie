import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from, of } from "rxjs";

import { Dictionary, EnglishWordList } from "../models/dictionary";
import { Word } from "../models/word";

@Injectable({
  providedIn: "root",
})
export class DictionaryService {
  list: EnglishWordList;
  codeStr: string;

  constructor(private http: HttpClient) {}

  // Name:
  // Inputs:
  // Outputs:
  // Runtime Complexity:
  // Desription:
  public getEnglishWords(): Observable<EnglishWordList> {
    return this.http.get<EnglishWordList>("./assets/data/us-en.json");
  }

  // https://www.wordsapi.com/
  // https://www.dictionaryapi.com/register/index
  public getDefinitions(word: string): Observable<string> {
    return this.http.get<string>(
      "https://wordsapiv1.p.mashape.com/words/" + word
    );
  }

  // Name: isPalindrome
  // Inputs: string
  // Outputs: boolean
  // Runtime Complexity: Linear O(N)
  // Description: identifies palindromic words
  public isPalindrome(str: string): boolean {
    return str.split("").reverse().join("") === str;
  }

  // Name: isAnagram
  // Inputs: string, string
  // Outputs: string
  // Runtime Complexity: Linear O(N)
  // Description: Test if str1 is an anagram of str1
  public isAnagram(str1: string, str2: string): boolean {
    return this.hashAnagram(str1) === this.hashAnagram(str2);
  }

  // Name: hashAnagram
  // Inputs: string
  // Outputs: string
  // Runtime Complexity: Linear O(N)
  // Description: Ignoring non-word characters, return sorted,
  // lowercase letters of a word as a new string
  public hashAnagram(str: string): string {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join()
      .replace(/,/g, "");
  }

  // Name: compileAnagramHashDictionary
  // Inputs: EnglishWordList
  // Outputs: string
  // Runtime Complexity: Quadratic O(N^2)
  // Description: compiles dictionary for anagram search
  // and returns JSON string representation of object
  public compileAnagramHashDictionary(list: EnglishWordList): string {
    let t0 = performance.now();
    const alphabet = "aic"; // Half the collection
    const alphabeta = alphabet.split("");
    let coded = {};
    let wordCount = 0;

    // For each letter...
    alphabeta.forEach((letter) => {
      let words = list.US[letter].split(" ");
      wordCount += words.length;

      // and each word in that letter-category...
      words.forEach((wd) => {
        // hash the word then find its dictionary anagrams...
        var code = this.hashAnagram(wd);

        // create anagram array for each anacode
        if (coded[code]) {
          coded[code].push(wd);
        } else {
          coded[code] = [wd];
        }
      });
    });

    let t1 = performance.now();
    console.log("Dictionary Compilation took " + (t1 - t0) + "ms.");
    console.log(
      "Entries created: " +
        Object.keys(coded).length +
        " from " +
        wordCount +
        " words."
    );
    //var obCode = JSON.stringify(coded, null, 4);
    var obCode = "";
    let quote = '"';
    for (let key in Object.keys(coded)) {
      obCode +=
        quote + key + quote + ":" + quote + coded[key].toString() + quote;
    }
    return obCode;
  }
}
