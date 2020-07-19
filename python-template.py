# preOrder traverse a binary tree
def preOrder(self, root):
  if (root):
    self.traverse_path.append(root.val)
    self.preOrder(root.left)
    self.preOrder(root.right)

# inOrder traverse a binary tree
def inOrder(self, root):
  if (root):
    self.inOrder(root.left)
    self.traverse_path.append(root.val)
    self.inOrder(root.right)

# postOrder traverse a binary tree
def postOrder(self, root):
  if (root):
    self.postOrder(root.left)
    self.postOrder(root.right)
    self.traverse_path.append(root.val)

def recursion(level, param1, param2, ...):
  # recursion terminator
  if (level > MAX_LEVEL):
    process_result
    return

  # process logic in current level
  process(level, data...)

  # drill down
  self.recursion(level + 1, p1, ...)

  # reverse the current level status if needed

  # 分治代码模板
  def divide_conquer(problem, param1, param2, ...):
    # rerursion terminator
    if problem is None:
      print_result
      return
    # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...)
    subresult2 = self.divide_conquer(subproblems[1], p1, ...)
    subresult3 = self.divide_conquer(subproblems[2], p1, ...)
    ...
    # process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)

    # revert the current level states

    # 二分查找代码模板
    left, right = 0, len(array) - 1
    while left < right:
      mid = (left + right) / 2
      if (array[mid] == target):
        # find the target!!
        break or return result
      elif array[mid] < target:
        left = mid + 1
      else:
        right = right = mid -1

