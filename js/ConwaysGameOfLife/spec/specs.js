
describe('Board', function(){
  describe('create', function(){
    it('returns the board length "# x #',function(){
    var nBoard = Object.create(Board);
    nBoard.create(10).should.eql(10);
  });
 });
 //  describe('size', function(){
 //    it('cell greets neighbors',function(){
 //    var nBoard = Object.create(Board);
 //    nBoard.size(10).should.eql(100);
 //  });
 // });
 //  describe('fillBoard', function(){
 //    it('cell finds active neighbors (only if it is active)',function(){
 //    var nBoard = Object.create(Board);
 //    nBoard.size(10);
 //    nBoard.fillBoard(10).should.equal("gameBoard has been filled");
 //  });
 // });
  describe('findFriends', function() {
    it('looks at an active cell and identifies if it has neighbors.', function(){
      var nBoard = Object.create(Board);
      nBoard.size(10);
      nBoard.activeCells = [5, 7, 10, 11, 12, 21, 22];
      nBoard.findFriends(10).should.equal("Sweater Time");
    });
  });
});

// describe('Game', function(){
//   describe('turn', function(){
//     it('designates and switches turns', function(){
//     var newGame = Object.create(Game);
//     newGame.turn = 'X';
//     newGame.changeTurn(newGame.turn).should.equal('O') ;
//     });
//   });
//   describe('assignSquare', function(){
//     it('gives a square to a player who hath claimed it', function(){
//     var newGame = Object.create(Game);
//     newGame.turn = 'X';
//     newGame.assignSquare(1).should.eql( [ Board.row1spaces[0] ])
     
//     });
//   });
//    describe('winConditionCheck', function(){
//     it('if a player gets 3 in a row, they win the game', function(){
//     var newGame = Object.create(Game);
//     newGame.turn = 'X';
//     newGame.playerX.squares = [7,2,3];
//     newGame.playerO.squares = [7,4,3];
//     newGame.winConditionCheck().should.equal('running'); 
//     });
//   });
//   describe('takenCheck', function(){
//     it('checks if a clicked square has been used', function(){
//     var newGame = Object.create(Game);
//     newGame.turn = 'X';
//     newGame.takenSquares = [1,2,3,4,5,6,7,8,9];
//     newGame.takenCheck(1).should.equal(true); 
//     });
//   });
//   describe('checkCats', function(){
//     it('checks if the game is a tie', function(){
//     var newGame = Object.create(Game);
//     newGame.takenSquares = [1,2,3,4,5,6,7,8,9];
//     newGame.turncount = 9;
//     newGame.checkCats().should.equal(true); 
//     });
//   })
// });
