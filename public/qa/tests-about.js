/*
 * tests-about.js
 * Testing the About page
 *
 */

suite('About Page Tests', function() {
    tests('Page should contain link to contact page', function() {
        assert($('a[href='/contact']')).length)
    })
})

