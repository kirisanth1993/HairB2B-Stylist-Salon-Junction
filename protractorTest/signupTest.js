describe('HairB2B App Signup', function() {
  it('Should have a title', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    expect(browser.getTitle()).toEqual('Hair B2B');
  });

  it('Should show error message for not filled fields', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('firstname')).sendKeys('');
    element(by.model('lastname')).sendKeys('senthilnathan');
    expect(element(by.id('typeFirstname')).getText()).
        toEqual('Type your first name');
  });

  it('Should show invalidMessage for invalid inputs', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('firstname')).sendKeys('23423423');
    element(by.model('lastname')).sendKeys('senthilnathan');
    expect(element(by.id('invalidFirstname')).getText()).
        toEqual('Type correct name !');
  });

  it('Should show Message for invalid email', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('email')).sendKeys('kirisanth');
    element(by.model('password')).sendKeys('senthilnathan');
    expect(element(by.id('invalidEmail')).getText()).
        toEqual('Email is not valid');
  });

  it('Should show password nonmatching Message before confirm password', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('password')).sendKeys('kirisanth');
    expect(element(by.id('nonMatching')).getText()).
        toEqual('Passwords don\'t match');
  });

  it('Should show password nonmatching Message for wrong confirm password', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('password')).sendKeys('kirisanth');
    element(by.model('repassword')).sendKeys('senthilnathan');
    expect(element(by.id('nonMatching')).getText()).
        toEqual('Passwords don\'t match');
  });

  it('Conditions and description fields should appear for click stylist checkbox', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.id('stylist')).click();
    element(by.id('stylist')).click();
    expect(element(by.id('condition')).getText()).
      toEqual('Conditions');
  });

  it('Salon name field should appear for click salon checkbox', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.id('salon')).click();
    element(by.id('salon')).click();
    expect(element(by.id('salonName')).getText()).
      toEqual('Salon name');
  });

  it('Showing error message for register with already exists email id', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup');
    element(by.model('firstname')).sendKeys('Kirisanth');
    element(by.model('lastname')).sendKeys('Senthilnathan');
    element(by.model('age')).sendKeys('23');
    element(by.model('location')).sendKeys('Brisbane');
    element(by.id('maleRadio')).click();
    element(by.model('email')).sendKeys('kirisanth@gmail.com');
    element(by.model('password')).sendKeys('kirisanth');
    element(by.model('repassword')).sendKeys('kirisanth');
    element(by.id('salon')).click();
    element(by.id('stylist')).click();
    element(by.model('description')).sendKeys('I am the best');
    element(by.model('condition')).sendKeys('Tools should be provided by you');
    element(by.model('salonName')).sendKeys('Kiri Salon');
    element(by.id('acceptTerm')).click();
    element(by.id('register')).click();
    expect(element(by.id('checkmail')).getText()).
      toEqual('This email is already there !');
  });

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
    // element(by.id('stylist')).click();
    // element(by.model('description')).sendKeys('I am the best');
    // element(by.model('condition')).sendKeys('Tools should be provided by you');
    element(by.model('salonName')).sendKeys('Kiri Salon');
    element(by.id('acceptTerm')).click();
    element(by.id('register')).click();
    expect(browser.getCurrentUrl())
        .toEqual("http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/signup");
  });

});
