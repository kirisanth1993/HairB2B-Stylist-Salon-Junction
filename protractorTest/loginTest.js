describe('HairB2B App Login', function() {
  it('Should have a title', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/login');
    expect(browser.getTitle()).toEqual('Hair B2B');
  });

  it('Error message for no entry', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/login');
    element(by.model('user')).sendKeys('');
    element(by.model('password')).sendKeys('');

    expect(element(by.id('typeEmail')).getText()).
        toEqual('Type your email');
  });

  it('Error message for invalid email', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/login');
    element(by.model('user')).sendKeys('kirisanth');
    element(by.model('password')).sendKeys('kiri');

    expect(element(by.id('invalidEmail')).getText()).
        toEqual('Email is not valid');

  });

  it('Login is not happening and error message for wrong user name & password', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/login');
    element(by.model('user')).sendKeys('kirisanth@gmail.com');
    element(by.model('password')).sendKeys('kiris');
    element(by.id('loginButton')).click();

    expect(element(by.id('invalidLogin')).getText()).
        toEqual('User name or password is wrong!');
  });

  it('Login is happening for correct user name & password', function() {
    browser.get('http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/login');
    element(by.model('user')).sendKeys('kirisanth@gmail.com');
    element(by.model('password')).sendKeys('kirisanth');
    element(by.id('loginButton')).click();

    expect(browser.getCurrentUrl())
        .toEqual("http://localhost:8000/HairB2Bfront/headerAndFooter.html#!/profile");
  });


});
