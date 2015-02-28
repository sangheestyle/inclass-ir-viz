var jade = require('jade')

module.exports = function(data, options) {

    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        data: data,
        highlight: options.highlight,
        title: options.title
    })
    // console.log(html)
    
    return html
}
