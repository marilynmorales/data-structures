function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function(key, value) {
  if(this.limit >= this.size) throw 'hash table is full';
  
  var hashedIndex = this.hash(key), squareIndex = 1;

  // quadratic probing
  while(this.keys[hashedIndex] !== undefined) {
    console.log(key, value, hashedIndex, squareIndex)
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};
HashTable.prototype.get = function() {
  var hashedIndex = this.has(key), squareIndex = 1;
  while( this.keys[hashedIndex] !== key) {
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  };
  return this.values[hashedIndex];
};
HashTable.prototype.hash = function(key) {
  if(!Number.isInteger(key)) throw "must be int.";
  return key % this.size;
};
HashTable.prototype.initArray = function(size) {
  return Array(size);
};

var example_table = new HashTable(13);
example_table.put(14, "this is an item 13.");
example_table.put(15, "this is an item 15.");
example_table.put(200, "this is an item 200.");
example_table.put(400, "this is an item 400.");
example_table.put(10, "this is an item 10.");
example_table.put(5, "this is an item 5.");
//console.log(example_table);