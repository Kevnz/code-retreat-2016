const assert = require('assert');

describe('Conways Game of Life', () => {
  it('Any live cell with fewer than two live neighbours dies', (done) => {
    const board = {
      grid: [[0, 0, 0], [0, 1, 0], [0, 0, 1]],
      checkCell: function (x, y) {
        console.log(this);
        return this.grid[x][y] === 1;
      },
      turn: function () {
        for (let rowIndex = 0; rowIndex <= 3; rowIndex++) {
          for (let columnIndex = 0; columnIndex <=3; columnIndex++) {
            const currentCell = { x: rowIndex, y: columnIndex };
          }
        }
      },
      getNeighborCount: function({ x, y }) {

      }
    };

    assert.ok(board.checkCell(1, 1));
    //board.turn();
    assert.ok(board.getNeighborCount({x: 1, y: 1}) === 1);
    //assert.ok(board.checkCell(1, 1) === false);
    done();
  });
});
