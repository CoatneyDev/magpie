import { DictionaryService } from '../services/dictionary.service';
import { WordFactory } from './wordfactory';

describe('Wordfactory', () => {
  let service: DictionaryService;
  
  it('should create an instance', () => {
    expect(new WordFactory(service)).toBeTruthy();
  });
});
