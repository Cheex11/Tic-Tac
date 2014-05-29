// var Game = {
//   fullTurn: function(clickedSquare){
//     this.assignSquare(clickedSquare)
//     this.winConditionCheck();
//     if (this.checkCats() ){
//             alert('cats game!')
//           }   
//   },
//   takenSquares: [10],
//   takenCheck: function(clickedSquare){
//     return this.takenSquares.some(function(squareNumber) {
//       return squareNumber === clickedSquare;
//     });  
//   },
//   turncount:0,
//   checkCats: function(){
//     if (this.turncount > 8 ){
//       this.gameOver ='over';
//       return true;
//     }
//   },
//   'playerX': { squares: []},
//   playerO : { squares: []},
//   turn: 'X',
//   assignSquare: function(clickedSquare){
//       if ( this.turn === 'X'){
//         this['playerX'].squares.push(clickedSquare)
//         this.turn = 'O';
//       } else {
//         this.playerO.squares.push(clickedSquare)
//         this.turn = 'X';
//       }
//       this.turncount ++;
//       this.takenSquares.push(clickedSquare) 
//       return this['playerX'].squares
//   },
//   winConditions: {
//      con1: [1,2,3],
//      con2: [4,5,6],
//      con3: [1,4,7],
//      con4: [2,5,8],
//      con5: [3,6,9],
//      con6: [7,8,9],
//      con7: [1,5,9],
//      con8: [3,5,7]
//     },
//   winConditionCheck: function(){
//     var winMatchesX =0;
//     var winMatchesO =0;
//     var x ='X';
//     var y = 'Y';
//     for (var condition in Game.winConditions) {
//       winMatchesX =0;
//       Game.winConditions[condition].forEach(function(winSquare){
//         Game['playerX'].squares.forEach(function(playerSquare){
//           if (winSquare === playerSquare) {
//             winMatchesX++;
//           }
//         });
//       });
//         if (winMatchesX >2){
//           this.turncount--;
//           this.gameOver = 'over';
//           alert('X wins')
//           return  'X wins';
//         } 
//     }
//     for (var condition in Game.winConditions) {
//     winMatchesO = 0;
//     Game.winConditions[condition].forEach(function(winSquare){
//     Game.playerO.squares.forEach(function(playerSquare){
//           if (winSquare === playerSquare) {
//             winMatchesO++;
//           }
//         });
//       });
//       if (winMatchesO >2){
//         this.turncount --;
//         alert('O wins')
//         this.gameOver = 'over';
//         return 'O wins';
//         }
//       }
//     return 'running';
//     }
//   };

var Board = {
  create: function(boardDimension) { 
    var nBoard = Object.create(Board)
    return boardDimension
  },
  run: function(steps, dim) {
    this.size(dim);
  },
  activeCells: [],
  gameBoard: [],
  size: function(boardDimension) {
    var totalcells = (boardDimension * boardDimension);
    this.fillBoard(boardDimension);
    return boardDimension;
  },
  fillBoard: function(boardDimension) {
      for (var d = 0; d < (boardDimension); d++) {
        for (var i = 0; i < (boardDimension); i++) {
          var row = d.toString();
          var column = i.toString();
          var coord = row.concat(column);
          Board.gameBoard.push(coord);
        };
      }
    return "gameBoard has been filled"
  },
  findFriends: function(boardDimension) {
    var that = this;
    this.activeCells.forEach(function(citizen) {
      var neighborCount = 0
      for (var i = 0; i < that.activeCells.length; i++) {
        if ((citizen+1 === that.activeCells[i]) ||
          + (citizen-1 === that.activeCells[i]) ||
          + (citizen+boardDimension === that.activeCells[i]) ||
          + (citizen-boardDimension === that.activeCells[i]) ||
          + (citizen+boardDimension+1 === that.activeCells[i]) ||
          + (citizen+boardDimension-1 === that.activeCells[i]) ||
          + (citizen-boardDimension+1 === that.activeCells[i]) ||
          + (citizen-boardDimension-1 === that.activeCells[i])) {
          neighborCount += 1;
        }
        if (i === (that.activeCells.length - 1)) {
          if (neighborCount < 2) {
            that.activeCells.splice(that.activeCells.indexOf(citizen), 1);
          } else if (neighborCount > 3) {
            that.activeCells.splice(that.activeCells.indexOf(citizen), 1);
          } else {
            console.log(citizen + " will live to the next population.")
          }
        }
      }
    })
              return "Sweater Time";
  }  
};


$(document).ready(function(){

  var rowCount = 10

  var nBoard = Object.create(Board)
  nBoard.size(rowCount)

  var drawRow = function(rows) {
    for(var j = 0; j < rows; j++) {
     $('#board').append('<tr class=rowPlace' + [j.toString()] + '>' + "STRING" + '</tr>');
      for(var i = 0; i < rows; i++) {
        // console.log(j+ " " + i)
        $('.rowPlace' + [j.toString()]).append('<td class="'+ j + i +'"></td>')
      }
    }
  }

  drawRow(rowCount);
  var selectedCells = [];


$('td').click(function() {
  $(this).text('*');
  selectedCells.push($(this).attr('class'));
})



$('h3').click(function() {
    selectedCells.forEach(function(cell) {
      nBoard.activeCells.push(parseInt(cell));
    })
    nBoard.findFriends(rowCount);
    nBoard.run(10, rowCount);
  })
});








// nBoard.gameBoard.forEach(function(element) {
//   $('tr#row1').append('<td>' + "." + '</td>');
// })



//    nBoard.gameBoard.forEach(function(space,index){
      // $('tr#row1').append('<td class="'+index+'"></td>')
     //    $('td').last().click(function(){
     //      clickedSquare = space;
     //      console.log(clickedSquare);   
     //      if (!nGame.takenCheck(clickedSquare)) {
     //        $(this).html(nGame.turn)
     //        nGame.fullTurn(clickedSquare)
     //      } else {
     //        console.log("wrong")
     //      }
     //      if (nGame.gameOver === 'over'){
     //        $('td').html('');
     //        nGame['playerX'].squares =[];
     //        nGame.playerO.squares =[];
     //        nGame.takenSquares = [];
     //        nGame.turncount =0;
     //        nGame.gameOver ='';
     //        nGame.turn = 'X';
     //      }
     //    });
     // });
//      nBoard.row2spaces.forEach(function(space,index){
//       $('tr#row2').append('<td class="'+index+'"></td>')
//       $('td').last().click(function(){
//          clickedSquare = space; 
         
//          if (!nGame.takenCheck(clickedSquare)) {
//             $(this).html(nGame.turn)
//             nGame.fullTurn(clickedSquare)
//           } else {
//             console.log("wrong")
//           }
//             if (nGame.gameOver === 'over'){
//             $('td').html('');
//             nGame['playerX'].squares =[];
//             nGame.playerO.squares =[];
//             nGame.takenSquares = [];
//             nGame.turncount = 0;
//             nGame.gameOver ='';
//             nGame.turn = 'X';
//           }

//       });
//     });
//     nBoard.row3spaces.forEach(function(space,index){
//       $('tr#row3').append('<td class="'+index+'"></td>')
//       $('td').last().click(function(){
//           clickedSquare = space;
//           if (!nGame.takenCheck(clickedSquare)) {
//             $(this).html(nGame.turn)
//             nGame.fullTurn(clickedSquare)
//           } else {
//             console.log("wrong")
//           }
//           if (nGame.gameOver === 'over'){
//             $('td').html('');
//             nGame['playerX'].squares =[];
//             nGame.playerO.squares =[];
//             nGame.takenSquares = [];
//             nGame.turncount = 0;
//             nGame.gameOver ='';
//             nGame.turn = 'X';
//           }          
          
//       });
//    });

   
