import { TourOfHerosFastPage } from './app.po';

describe('tour-of-heros-fast App', () => {
  let page: TourOfHerosFastPage;

  beforeEach(() => {
    page = new TourOfHerosFastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
