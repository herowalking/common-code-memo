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
  
