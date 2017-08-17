describe('HairB2B App Signup', function() {
  it('Registration is happening successfully for new email and valid inputs', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('firstname')).sendKeys('Kirisanth');
    element(by.model('lastname')).sendKeys('Senthilnathan');
    element(by.model('age')).sendKeys('23');
    element(by.model('location')).sendKeys('Brisbane');
    element(by.id('maleRadio')).click();
    element(by.model('email')).sendKeys('kikiri@gmail.com');
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
        .toEqual("http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/successregister");

  });

});
