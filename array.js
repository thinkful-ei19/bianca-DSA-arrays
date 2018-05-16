const mem = require('./memory');
const memory = new mem();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr =  memory.allocate(this.length);
    }
    push(value){
        if(this.length >= this._capacity){
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
    
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    //pushing a value into the array and resizing by adding one more block of memory
    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop(){
        if(this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
// Array.SIZE_RATIO = 3;

function main(){

    Array.SIZE_RATIO = 3;

    //create an instance of the array class
    let biancaAlexaArray = new Array();

    //add an item to the array
    // biancaAlexaArray.push(3);
    // biancaAlexaArray.push(5);
    // biancaAlexaArray.push(15);
    // biancaAlexaArray.push(19);
    // biancaAlexaArray.push(45);
    // biancaAlexaArray.push(10);
    // biancaAlexaArray.pop();
    // biancaAlexaArray.pop();
    // biancaAlexaArray.pop();
    //  console.log(biancaAlexaArray.get());
    // biancaAlexaArray.remove(0);
    biancaAlexaArray.push("tauhida");

    console.log(biancaAlexaArray);
    console.log(biancaAlexaArray.get(0));

}
main();
//What is the length, capacity and memory address of your array? after pushing 1 item
// length: 1, capacity: 3(because of size ratio), memory address: 0

//What is the length, capacity and memory address of your array? after pushing 6 items into array
//length: 6, capacity: 12(after going over capacity of 3 we multiply the new length * 3), memory address:3(new address b/c we had to find a new slot to fit our total capacity)

//What is the length, capacity and address of your array? after popping off 3
//length: 3, capacity: 12(doesn't resize when the length gets smaller, keeps the space), memory address: 3(stays the same beacuse the array doesnt need to find a new spot)

