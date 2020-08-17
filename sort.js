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

// quick sort
const quickSort = (nums, left, right) => {
  if (nums.length <= 1) return nums;
  if (left < right) {
    index = partition(nums, left, right);
    quickSort(nums, left, index - 1);
    quickSort(nums, index + 1, right);
  }
}

const partition = (nums, left, right) => {
  let privot = left, index = left + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[privot]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }
  [nums[privot], nums[index - 1]] = [nums[index - 1], nums[privot]];
  return index - 1;
}