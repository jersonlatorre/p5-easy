# How to use it

To ensure that every class in our project has access to p5 functions, this package addresses the issue by exposing the 'sketch' object. This allows us to use p5 into any file and utilize p5 functions as needed.

**main.js**
```javascript
import p from 'p5-easy'
import MyObject from './my-object.js'

let obj

p.setup = () => {
  p.createCanvas(600, 600)
  obj = new MyObject()
}

p.draw = () => {
  p.background('black')
  obj.draw()
}
```

**my-object.js**
```javascript
import p from 'p5-easy'

export default class MyObject {
  constructor() {
    this.x = 300
    this.y = 300
  }

  draw() {
    p.circle(this.x, this.y, 100)
  }
}
```



