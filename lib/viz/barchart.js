var jade = require('jade')

module.exports = function(data, options) {

    var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
        data: data,
        title: options.title,
        highlight: options.highlight,
        c: options.color,
        w: options.width,
        m: options.margin
    })

    return html
}
