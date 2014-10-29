describe('application', function() {
    describe('home page', function() {
        it('loads', function(done) {
            var page = visit('/');

            page.waitForReady(function() {
                page.waitFor(specHelper.getDataLoadedFunction(page), function() {
                    specHelper.expectToBeOnHomepage(page);
                    done();
                });
            });
        });
    });
});
