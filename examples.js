var domout = require('./lib/domout'),
    viz = require('./lib/viz')

var data = [5, 10, 15, 20, 25]
var data2 = [[5, 2],[10, 3], [15, 5], [20, 6], [25, 3]]

domout.html('<h1>Circles</h1>')

// note: use domout.svg for <svg> tags for them to be displayed properly
domout.svg(viz.circles(data))

domout.html('<h1>Barchart</h1>')
domout.svg(viz.barchart(data, {
    title: 'some title',
    highlight: 1,
    color: 'rgb(255, 0, 0)',
    width: 20,
    margin: 1
}))

domout.html('<h1>Line Graph</h1>')
domout.svg(viz.linegraph(data))

domout.html('<h1>Line Graph with 2d array</h1>')
domout.svg(viz.linegraph(data2))

domout.html('<h1>Line Graph with 2d array and custom color</h1>')
domout.svg(viz.linegraph(data2, {color:'rgba(0,0,255,0.3)'}))

domout.html('<h1>List</h1>')
domout.html(viz.list(data))

domout.html('<h1>JSON</h1>')
var data = [
    ['John', 3, 5],
    ['Adam', 4, 8]
]

domout.html(viz.json(data))

domout.html('<h1>Table</h1>')
var header = ['name', 'item1', 'item2']
domout.html(viz.table(data, {header: header, grid:true}))

domout.html('<h1>Table with objects</h1>')
var students = [
  {name: 'John', age: 22, city: 'Boulder'},
  {name: 'Adam', age: 23, city: 'Longmont'}
]
domout.html(viz.table(students))

var data = [
    [5, 5],
    [10, 10],
    [15, 15]
]

domout.html('<h1>Scatter Plot</h1>')
domout.svg(viz.scatterplot(data))
