import { SocleTypescriptCliPage } from './app.po';

describe('socle-typescript-cli App', () => {
  let page: SocleTypescriptCliPage;

  beforeEach(() => {
    page = new SocleTypescriptCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
