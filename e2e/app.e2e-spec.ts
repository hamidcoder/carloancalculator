import { CarloancalculatorPage } from './app.po';

describe('carloancalculator App', function() {
  let page: CarloancalculatorPage;

  beforeEach(() => {
    page = new CarloancalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
