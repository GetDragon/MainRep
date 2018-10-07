import { CoreAppNetPage } from './app.po';

describe('core-app-net App', () => {
  let page: CoreAppNetPage;

  beforeEach(() => {
    page = new CoreAppNetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
