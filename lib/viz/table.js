var jade = require('jade')

module.exports = function(header, data, grid) {

    var html = jade.renderFile(__dirname + '/templates/table.jade', {
        header: header,
        data: data,
        grid: grid
    })
    // console.log(html)
    
    return html
}
