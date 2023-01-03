import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  const pipe =new TitleCasePipe();
  it('transform "abc" to "ABC"', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });
  it('transform "abc def" to "ABC def"',()=>{
    expect(pipe.transform('abc def')).toBe('ABC def');
  })
});
