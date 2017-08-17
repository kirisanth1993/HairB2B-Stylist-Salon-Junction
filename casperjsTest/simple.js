var casper = require('casper').create();
casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/signup', function(){
  this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org',function(){
  this.echo(this.getTitle());
});

casper.run();
