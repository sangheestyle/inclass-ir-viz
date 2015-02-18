var jade = require('jade')

module.exports = function(data, options) {

    var html = jade.renderFile(__dirname + '/templates/scattergraph.jade', {
        data: data
    })
    // console.log(html)
    
    return html
}