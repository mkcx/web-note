## 队列结构  
特点： 先进先出， first in first out   
## 基于数组实现队列结构  
队列结构有以下方式：  
- enqueue，在后端加入元素。
- dequeue，在队列前端移除元素。  
- front， 查看队列最前端的元素。
- isEmpty，查看队列是否为空。
- size，队列的元素个数。
- toString，以字符串形式输出队列内容。  
```js
function Queue() {
  this.items = []

  Queue.prototype.enqueue = function(element) {
    this.items.push(element)
  }

  Queue.prototype.dequeue = function() {
    return this.items.shift()
  }

  Queue.prototype.front = function() {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  Queue.prototype.size = function() {
    return this.items.length
  }

  Queue.prototype.toString = function() {
    let resultText = ''
    for (let index = 0; index < this.items.length; index++) {
      resultText += this.items[index] + ' '
    }
    return resultText
  }
}
```  
使用队列实现击鼓传花案例：  
游戏内容，若干个人围成圆圈，给定一个数N。从1开始数数，当数到N时，玩家淘汰。接着下一个玩家从1开始数，以此循环，直到只剩1个玩家时胜出，并输出开始游戏时玩家的位置。  
```js
function passGame(nameLit, num) {
  const queue = new Queue()
  for (let i = 0; i < nameLit.length; i++) {
    queue.enqueue(nameLit[i])
  }
  while(queue.size() > 1) {
    // 没到num这个数时，将前端元素移动后后端
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 当数到N时，将这个元素移除
    queue.dequeue()
  }
  const win = queue.front()
  const index = nameLit.indexOf(win)
  return {
    name: win,
    index
  }
}
```  
## 优先级队列  
```js
function PriorityQueue() {
  this.items = []
  // 创建内部函数保存传进来的元素
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  PriorityQueue.prototype.enqueue = function(element, priority) {
    if (this.items.length === 0) {
      this.items.push({
        element,
        priority
      })
    } else {
      let isEnQueue = false
      QueueElement(element, priority)
      for (let i = 0; i < this.items.length; i++) {
        if (this.priority < this.items[i].priority) {
          this.items.splice(i, 0, { element: this.element, priority: this.priority })
          isEnQueue = true
          break
        }
      }
      if (!isEnQueue) {
        this.items.push({
          element,
          priority
        })
      }
    }
  }

  PriorityQueue.prototype.dequeue = function() {
    return this.items.shift()
  }

  PriorityQueue.prototype.front = function() {
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  PriorityQueue.prototype.size = function() {
    return this.items.length
  }

  PriorityQueue.prototype.toString = function() {
    let resultText = ''
    for (let index = 0; index < this.items.length; index++) {
      resultText += this.items[index].element + '-' + this.items[index].priority + ' '
    }
    return resultText
  }
}
```  
优先级队列使用  
```js

const priorityQueue = new PriorityQueue()
priorityQueue('abc', 110)
priorityQueue('cba', 99)
priorityQueue('nba', 100)
priorityQueue('fifa', 102)
console.log(priorityQueue.toString())
```