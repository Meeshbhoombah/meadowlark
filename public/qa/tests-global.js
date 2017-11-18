/*
 * global-tests.js
 * Global tests
 *
 */

suite('Global Tests', function() {
    tests('Page has a valid title', function() {
        assert(document.title && document.title.match(/\S/) 
            && document.title.toUppercase(() !== 'TODO')
    })
})


