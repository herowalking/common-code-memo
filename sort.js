// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// 插入排序
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

// quickSort
const quickSort = (nums, left, right) => {
  if (nums.length <= 1) return nums;
  if (left < right) {
    index = partition(nums, left, right);
    quickSort(nums, left, index - 1);
    quickSort(nums, index + 1, right);
  }
}

const partition = (nums, left, right) => {
  let pivot = left, index = left + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }
  [nums[pivot], nums[index - 1]] = [nums[index - 1], nums[pivot]];
  return index - 1;
}

// mergeSort
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let mid = (Math.floor(nums.length / 2)), 
      left = nums.slice(0, mid), 
      right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
} 

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

// heapSort
function heapSort(arr) {
  if (arr.length === 0) return;
  let len = arr.length;

  // 建堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // 排序
  for (let i = len - 1; i >= 0; i--) {
    // 堆顶元素与最后一个互换
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 对0 - i的数据建堆
    heapify(arr, i, 0);
  }
}

function heapify(arr, len, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}