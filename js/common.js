function addCellHeader(table) {
  if (!table) {
    return false;
  }

  var trs = table.getElementsByTagName('tr');
  var trsChild;
  var grid = {};
  var cells;
  for (var i = 0, cntI = trs.length; i < cntI; i++) {
    if (!grid[i]) {
      grid[i] = {};
    }
    trsChild = trs.item(i).childNodes;
    cells = 0;
    for (var j = 0, cntJ = trsChild.length; j < cntJ; j++) {
      if (trsChild[j].nodeType == 1) {
        grid[i][cells++] = trsChild[j];
      }
    }
  }
  var cellHeader = '';
  for (row in grid) {
    if (row == 0) {
      continue;
    }
    for (cell in grid[row]) {
      cellHeader = grid[0][cell].innerHTML;
      grid[row][cell].setAttribute('data-cell-header', cellHeader);
    }
  }
}




$(document).ready(function() {
  /*

  view setting
  */
  function viewMode() {
    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      $("body").removeClass("pc");
      $("body").addClass("mobile");
    } else {
      $("body").addClass("pc");
      $("body").removeClass("mobile");
    }
  }
  viewMode();

  addCellHeader(document.querySelector('.respond-table'));
  $(window).resize(function() {
    viewMode();
  });

  /*

  layout
  */
  $(".menuToggle").on("click", function(e) {
    $("header nav").show();
    $("body").addClass("freez");
  });
  $("header nav button").on("click", function(e) {
    $("header nav").hide();
    $("body").removeClass("freez");
  });

  $(window).resize(function() {
    $("header nav").removeAttr("style");
    $("body").removeClass("freez");
  });
});
