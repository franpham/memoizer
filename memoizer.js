
function Memoizer() {
  var cache = {};

  this.getElementById = function(id) {
    if (cache[id])
      return cache[id];
    var dom = document.getElementById(id);
    cache[id] = dom;
    return dom;
  }

  this.querySelector = function(sel) {
    if (cache[sel])
      return cache[sel];
    var dom = document.querySelector(sel);
    cache[sel] = dom;
    return dom;
  }
  this.isCached = function(key) {
    return cache[key] ? true : false;
  }
}

var mem = new Memoizer();
var idVal = mem.getElementById('painter').innerHTML;
var idCached = mem.isCached('painter');
var selVal = mem.querySelector('.heading').innerHTML;
var selCached = mem.isCached('.heading');
alert('ID ' + idVal + (idCached ? ' is ' : ' is not ') + 'cached. ' +
  'Class ' + selVal + (selCached ? ' is ' : ' is not ') + 'cached.');
