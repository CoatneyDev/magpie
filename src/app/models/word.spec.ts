import { DictionaryService } from '../services/dictionary.service';
import { Word } from './word';

describe('Word', () => {
  let service: DictionaryService;
  
  it('should create an instance', () => {
    expect(new Word('dad', service)).toBeTruthy();
  });
});
