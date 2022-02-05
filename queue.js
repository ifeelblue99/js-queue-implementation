function Queue(){
    this.itemsArray = []
    
    this.enqueue = function(item){
      this.itemsArray.push(item)
    }
    this.dequeue = function(){
      return this.itemsArray.shift()
    }
    this.peak = function(){
      return !this.itemsArray.length===0 ? this.itemsArray[0] : undefined;
    }
    this.size = function(){
       return !this.itemsArray.length===0 ? this.itemsArray.length: 0;
    }
    this.isEmpty = function(){
      return this.itemsArray.length === 0
    }
}

// examples

let que = new Queue()

que.enqueue("aa")

console.log(que.dequeue())
console.log(que.isEmpty())
console.log(que.peak())
console.log(que.size())
