const inkPlayer = require('../../lib/inkPlayerFull');
const config = require('../../../lib/configuration').getConfiguration('MATH', 'WEBSOCKET', 'V3');

function runInkTests(ink) {
  module.exports[config.header + ' ' + ink.name + '.playInk'] = function playInk(browser) {
    inkPlayer.playInk(browser, config, ink.strokes, ink.labels, '#result span', '#result');
  };

  module.exports[config.header + ' ' + ink.name + '.playInkClearUndo'] = function playInkClearUndo(browser) {
    inkPlayer.playInkClearUndo(browser, config, ink.strokes, ink.labels, '#result span', '#result');
  };

  module.exports[config.header + ' ' + ink.name + '.playInkMultipleUndos'] = function playInkMultipleUndos(browser) {
    inkPlayer.playInkMultipleUndos(browser, config, ink.strokes, ink.labels, '#result span', '#result');
  };
}

config.inks
    .filter(ink => ['one', 'equation', 'equation2'].includes(ink.name))
    .forEach(ink => runInkTests(ink));
