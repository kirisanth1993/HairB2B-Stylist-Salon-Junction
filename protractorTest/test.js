describe('HairB2B App Signup', function() {
  it('Registration is not happening for invalid inputs', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('firstname')).sendKeys('!@!#');
    element(by.model('lastname')).sendKeys('rishard');
    element(by.model('age')).sendKeys('age');
    element(by.model('location')).sendKeys('Brisbane');
    element(by.id('maleRadio')).click();
    element(by.model('email')).sendKeys('kirisanth@');
    element(by.model('password')).sendKeys('kirisanth');
    element(by.model('repassword')).sendKeys('kirisanth');
    element(by.id('salon')).click();
    element(by.id('stylist')).click();
    element(by.model('description')).sendKeys('I am the best');
    element(by.model('condition')).sendKeys('Tools should be provided by you');
    element(by.model('salonName')).sendKeys('Kiri Salon');
    element(by.id('acceptTerm')).click();
    element(by.id('register')).click();
    expect(browser.getCurrentUrl())
        .toEqual("http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/signup");
    browser.sleep(4000);
  });

});
