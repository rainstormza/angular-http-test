import { AngularHttpTestPage } from './app.po';

describe('angular-http-test App', () => {
  let page: AngularHttpTestPage;

  beforeEach(() => {
    page = new AngularHttpTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
