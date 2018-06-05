/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has URLs defined', function() {
           allFeeds.forEach((allFeeds) => {
             expect(allFeeds.url).toBeDefined();
             expect(allFeeds.url.length).not.toBe(0);
           });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has names defined', function() {
           allFeeds.forEach((allFeeds) => {
             expect(allFeeds.name).toBeDefined();
             expect(allFeeds.name.length).not.toBe(0);
           });
         });
    });


    /* New test suite */
    describe('The menu', function() {

        /* This test ensures the menu element is
         * hidden by default.
         */
         it('hides menu element by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('ensures menu icon changes visibility on click', function() {
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(false);

              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* New test suite */
    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         var entry;

         beforeEach((done) => {
           loadFeed(0, () => {
             var entry = $('.feed .entry').length;
             done();
           });
         });

         it('has at least a single .entry element', function(done) {
             expect(entry).not.toBe(0);
             done();
         });
    });

    /* New test suite */
    describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         var feedA, feedB;

         beforeEach((done) => {
            loadFeed(0, () => {
                feedA = $('.feed').html();
            });

            loadFeed(1, () => {
                feedB = $('.feed').html();
                done();
            });
        });

        it('has changing content', (done) => {
            expect(feedA).not.toEqual(feedB);
            done();
        });
    });
}());
