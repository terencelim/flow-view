'use strict';

var Canvas = require('flow-view').Canvas;
var view = {
  width: 400, height: 300,
  node: {
    a: {
      x: 80, y: 100,
      width: 100,
      text: 'Drag me',
      outs: ['out0']
    },
    b: {
      x: 180, y: 200,
      text: 'Click me',
      ins: ['in0', { name: 'in1', type: 'bool' }]
    }
  },
  link: {
    c: {
      from: ['a', 0],
      to: ['b', 1]
    }
  }
};

var canvas = new Canvas('drawing');

canvas.render(view);