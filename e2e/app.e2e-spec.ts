import { AppPage } from './app.po';

describe('angular-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).not.toEqual('Goodbye!');
  });
});
