const assert = require('assert');

describe('Conways Game of Life', () => {
  it('Any live cell with fewer than two live neighbours dies', (done) => {
    const board = {
      grid: [[0, 0, 0], [0, 1, 0], [0, 0, 1]],
      checkCell: (x, y) => {

      },
      turn: () => {

      }
    };

    assert.ok(board.checkCell(1, 1));

    done();
  });
});
