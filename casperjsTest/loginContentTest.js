// Website Title checking
casper.test.begin('The Title exists',1,function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login',function(){
    test.assertTitle('Hair B2B');
  }).run(function(){
    test.done();
  });
});

// page Content Title checking
casper.test.begin('Page Title exists',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login',function(){
    casper.capture('pict.png');
    test.assertExists('h1.page-title');
    test.assertSelectorHasText('h1.page-title','Login Form');
    test.assertVisible('div');
    test.assertExists('footer');
  }).run(function(){
      test.done();
  });
});
