const assert = require('assert');

const cell = {
  state: true,
  nextState: function (aliveNeighbors) {
    if (this.state) return aliveNeighbors < 2 || aliveNeighbors > 3;
    if (aliveNeighbors === 3 && this.state === false) {
      return true;
    }
  },
  setState: function(aliveNeighbors) {
    this.state = this.nextState(aliveNeighbors);
  }
};

const Grid = function (x, y) {
  this.cells = [...new Array(x)].map(() => new Array(y).fill(Object.assign({}, cell, { state: false })));
};

Grid.prototype.getNeighbors = function(x, y) {
  return [ this.cells[x - 1][y - 1], this.cells[x][y -1 ], this.cells[x + 1][y - 1],
  this.cells[x][y - 1], this.cells[x][y-1], this.cells[x + 1][y - 1],
  this.cells[x][y - 1], this.cells[x][y-1],this.cells[x+1][y-1]]
};

describe('Conway\'s Game of Life', () => {
  describe('The cell', () => {
    it('should die when given only 1 neighbor', (done) => {
      assert.ok(cell.nextState(1));
      done();
    });
    it('should not die when given 2 or 3', (done) => {
      assert.ok(!cell.nextState(2));
      assert.ok(!cell.nextState(3));
      done();
    });
    it('should die when more than 3', (done) => {
      assert.ok(cell.nextState(4));
      done();
    });
    it('dead cell should reproduce when exactly 3', (done) => {
      cell.state = false;
      assert.ok(cell.nextState(3));
      cell.state = true;
      done();
    });
    it('should set state when called', (done) => {
      cell.state = false;
      cell.setState(3);
      assert.ok(cell.state);
      done();
    });
  });

  describe('The Grid', () => {
    it('should be created with x and y coords', (done) => {
      const grid = new Grid(3, 3);
      assert.ok(grid);
      assert.ok(grid.cells.length === 3);
      assert.ok(grid.cells[0].length === 3);
      assert.ok(grid.cells[0][0].state === false);
      done();
    });
    it('should allow the state to be set', (done) => {
      const grid = new Grid(3, 3);
      grid.cells[1][1].state = true;
      grid.cells[2][2].state = true;
      assert.ok(grid.cells[1][1].state);
      done();
    });
    it('should get the neighbors for a cell', (done) => {
      const grid = new Grid(3, 3);
      grid.cells[1][1].state = true;
      grid.cells[2][2].state = true;
      assert.ok(grid.getNeighbors(0,0).length === 3);
    });
  });
});
