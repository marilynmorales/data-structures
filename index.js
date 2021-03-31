function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
};

HashTable.prototype.put = function(key, value) {
  if(this.limit >= this.size) throw "hash table is full"
  var hashedIndex = this.hash(key);
  while(this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
}

HashTable.prototype.get = function(key) {
  var hashedIndex = this.hash(key);
  while(this.keys[hashedIndex] != key){
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
  // check if int
  if(!Number.isInteger(key)) throw 'must be int';
  return key % this.size;
}

HashTable.prototype.initArray = function(size) {
  return new Array(size);
}

var example_table = new HashTable(13);
example_table.put(31, "hi");
console.log(example_table);
console.log(example_table.get(31));