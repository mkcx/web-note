## 链表  
链表结构如下图
![链表结构图](/pubilc/images/05-linklist.png)  

## 实现链表结构  
- append(element)。向链表尾部添加新项。  
- insert(position, element)。向链表的特定位置输入新项。  
- get(position)。获取对应位置的元素。  
- indexOf(element)。返回元素在链表中的索引。如果没有对应的元素返回-1。  
- update(position)。修改某个位置的元素。  
- removeAt(position)。从列表中移除特定位置的元素。  
- remove(element)。从列表中移除一项。  
- isEmpty()。如果链表中不包含任何元素，则返回true。如果链表的length属性不为零则返回false。  
- size()。返回链表中的元素个数。与数组的length属性类似。  
- toString()。重写继承自Object的toString方法，让其只返回元素的data。  

```js  
    function LinkList() {
      this.head = null
      this.length = 0
      // 内部类用于生成newNode新元素  
      function NewNode(data) {
        this.data = data
        this.next = null
      }

      LinkList.prototype.append = function (data) {
        const newNode = new NewNode(data)
        if (this.length === 0) {
          this.head = newNode
        } else {
          let current = this.head
          while (current.next) {
            current = current.next
          }
          current.next = newNode
        }
        this.length++
      }

      LinkList.prototype.toString = function () {
        let ListString = ''
        let current = this.head
        while (current) {
          ListString += current.data + ' '
          current = current.next
        }
        return ListString
      }

      LinkList.prototype.insert = function (position, data) {
        if (typeof position !== 'number') {
          throw Error('position should be a Number')
        }
        if (position < 0 || position > this.length) return false
        const newNode = new NewNode(data)
        if (position === 0) {
          // 将头部置换为新的元素
          const current = this.head
          newNode.next = current
          this.head = newNode
        } else {
          let current = this.head
          let previous = null
          let index = 0
          while (index++ < position) {
            previous = current
            current = current.next
          }
          // 把链表砍成两部分，并用新的元素链接起来
          newNode.next = current
          previous.next = newNode
        }
        this.length++
        return true
      }
    }
```