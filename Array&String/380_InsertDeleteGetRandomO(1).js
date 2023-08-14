// Aug 14th
// 380. Insert Delete GetRandom O(1)
// Array || Hash Table || Math || Design || Randomized


/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present.
Returns true if the item was not present, false otherwise.

bool remove(int val) Removes an item val from the set if present.
Returns true if the item was present, false otherwise.

int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

*/

class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val) {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) return false;
        const idx = this.map.get(val);
        this._swap(idx, this.list.length - 1);
        this.list.pop();
        this.map.set(this.list[idx], idx);
        this.map.delete(val);
        return true;
    }

    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }

    _swap(a, b) {
        const temp = this.list[a];
        this.list[a] = this.list[b];
        this.list[b] = temp;
    }

}


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */