

protractor:
	clear
	./node_modules/.bin/protractor conf/protractor.conf.js


server:
	clear
	./node_modules/.bin/mocha 


coverage:
	clear
	mocha -R html-cov > coverage.html




NG:
	clear
	karma start ./conf/karma.conf.js --single-run

JSHint:
	clear
	./node_modules/.bin/hshint .

