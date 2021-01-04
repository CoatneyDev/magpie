import { TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { DictionaryService } from "./dictionary.service";
import { HttpClient } from "@angular/common/http";

describe("DescrambleService", () => {
  let service: DictionaryService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DictionaryService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it("should be created", () => {
    service = new DictionaryService(httpClient );
    expect(service).toBeTruthy();
  });

  it("School Master is anagram of The Classroom", ()=> {
    service = new DictionaryService(httpClient );
    expect(service.isAnagram("School Master", "The Classroom")).toBe(true);
  });

  it("iceman is an anagram of cinema", ()=> {
    service = new DictionaryService(httpClient );
    expect(service.isAnagram("iceman", "cinema")).toBe(true);
  });

  it("dad is a palindrome", ()=> {
    service = new DictionaryService(httpClient );
    expect(service.isPalindrome('dad')).toBe(true);
  });

  it("tattarrattat is a palindrome", ()=> {
    service = new DictionaryService(httpClient );
    expect(service.isPalindrome('tattarrattat')).toBe(true);
  });

  it("tattarrattatt is NOT a palindrome", ()=> {
    service = new DictionaryService(httpClient );
    expect(service.isPalindrome('tattarrattatt')).toBe(false);
  });

});
