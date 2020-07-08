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