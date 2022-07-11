## 栈结构  
栈结构概念：“后进先出” “last in first out”  
## 基于数组实现栈结构  
栈结构有以下方法：  
- push方法。将元素压入栈。  
- pop方法。从栈中取出元素。
- peek方法。查看栈顶元素。
- isEmpty方法。判断栈是否为空。
- size方法。获取栈中元素个数。
- toString方法。输出栈的内容。  
```js  
function Stack() {
  this.items = []
  Stack.prototype.push = function(element) {
    this.items.push(element)
  }

  Stack.prototype.pop = function(element) {
    return this.items.pop()
  }

  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }  

  Stack.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  Stack.prototype.size = function() {
    return this.items.length
  }

  Stack.prototype.toString = function() {
    let resultText = ''
    for (let index = 0; index < this.items.length; index++) {
      resultText += this.items[index] + ' '
      
    }
    return resultText
  }
}

```  
案例：使用栈将十进制转换为二进制  
```js
function decToDin(decNumber) {
  const stack = new Stack()
  while(decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  let binaryString = ''
  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
```