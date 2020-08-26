// deepCopy
function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && typeof o !== null;
  }

  if (!isObject(obj)) {
    return new Error('Not object');
  }

  let newObj = Array.isArray() ? [] : {};
  for (key in obj) {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  }

  return newObj;
}

// 1. 实现一个call函数 
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  context = context || window;
  context.fn = this
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

// 2. 实现一个apply函数 
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

// 3. 实现一个bind函数
// 思路：类似call，但返回的是函数
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function');
  }
  let _this = this;
  let args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    } else {
      return _this.apply(context, args.concat(...arguments));
    }
  }
}

