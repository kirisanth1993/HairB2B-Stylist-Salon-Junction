casper.test.begin('Error message Checking for required fields.',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/signup');
  var xPaths = require('casper').selectXPath;

  casper.then(function() {
    this.fill('form',{'firstname':''},true);
    test.assertSelectorHasText('span','Type your first name');
    test.assertSelectorHasText('span','Type your last name');
    test.assertSelectorHasText('span','Type your age');

    this.capture('notFilling.png');
  });

  casper.run(function(){
    test.done();
  });

});
