public class javaTemplate {
  // recursion template
  public void recursion(int level, int param) {
    // terminator
    if (level > MAX_LEVEL) {
      // process result
      return;
    }
  
    // process current logic
    process(level, param);
  
    // drill down
    recursion(level + 1, newParam);
  
    // restore current status
  }
}

// TreeNode
public class TreeNode {
  public int val;
  public TreeNode left, right;
  public TreeNode(int val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// quick sort
class QuickSort {
  int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  }

  void sort(int arr[], int low, int high) {
    if (low < high) {
      int pi = partition(arr, low, high);
    }
    sort(arr, low, pi - 1);
    sort(arr, pi + 1, high);
  }
}

