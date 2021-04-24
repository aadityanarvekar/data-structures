class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class HashTable {
    constructor(arrayLength = 53) {
        this.arrayLength = arrayLength;
        this.hashTable = new Array(arrayLength);
    }

   get(key) {
       let idx = this._getHash(key);
       if (this.hashTable[idx]) {
           for (let node of this.hashTable[idx]) {
               if (node.key === key) return [idx, node.val];
           }           
       }
       return undefined;       
   }

   set(key, val) {
       const node = new Node(key, val)              ;
       let idx = this._getHash(key);
       if (!this.hashTable[idx]) {
           this.hashTable[idx] = [];
       }       
       this.hashTable[idx].push(node);
       return this.hashTable;
   }

   keys() {
       let keys = [];
       for (let i = 0; i < this.arrayLength; i++) {
               if (this.hashTable[i]) {
                   for (let node of this.hashTable[i]) {
                   keys.push(node.key);
               }               
           }           
       }
       return keys;
   }

   values() {
       let vals = [];
       for (let i = 0; i < this.arrayLength; i++) {
           if(this.hashTable[i]) {
               for (let node of this.hashTable[i]) {
                   if (!vals.includes(node.val)) vals.push(node.val);                   
               }
           }
       }
       return vals;
   }

   _getHash(key) {           
           let hash = 0;
           for (let i = 0; i < Math.min(100, key.length); i++) {
               hash += key.charCodeAt(i);
           }
           return hash % this.arrayLength;
       }
}


let ht = new HashTable();
ht.set("Aadi", 5)
ht.set("Angel", 5)