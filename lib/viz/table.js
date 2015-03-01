var jade = require('jade')

module.exports = function(data, options) {

    var html = jade.renderFile(__dirname + '/templates/table.jade', {
        header: options.header,
        data: data,
        grid: options.grid
    })
    // console.log(html)

    return html
}
