import Editor from "@monaco-editor/react";

export default function () {
    const code1 = "// call newNode() three times\n" +
        "struct node* build123a() {\n" +
        "  struct node* root = newNode(2);\n" +
        "  struct node* lChild = newNode(1);\n" +
        "  struct node* rChild = newNode(3);\n" +
        "  root->left = lChild;\n" +
        "  root->right= rChild;\n" +
        "\n" +
        "  return(root);\n" +
        "}\n" +
        "\n" +
        "// call newNode() three times, and use only one local variable\n" +
        "struct node* build123b() {\n" +
        "  struct node* root = newNode(2);\n" +
        "  root->left = newNode(1);\n" +
        "  root->right = newNode(3);\n" +
        "\n" +
        "  return(root);\n" +
        "}\n" +
        "\n" +
        "/*\n" +
        " Build 123 by calling insert() three times.\n" +
        " Note that the '2' must be inserted first.\n" +
        "*/\n" +
        "struct node* build123c() {\n" +
        "  struct node* root = NULL;\n" +
        "  root = insert(root, 2);\n" +
        "  root = insert(root, 1);\n" +
        "  root = insert(root, 3);\n" +
        "  return(root);\n" +
        "}\n" +
        " "

    const code2 = "/*\n" +
        " Compute the number of nodes in a tree.\n" +
        "*/\n" +
        "int size(struct node* node) {\n" +
        "  if (node==NULL) {\n" +
        "    return(0);\n" +
        "  } else {\n" +
        "    return(size(node->left) + 1 + size(node->right));\n" +
        "  }\n" +
        "}"

    const code3 = "/*\n" +
        " Compute the \"maxDepth\" of a tree -- the number of nodes along\n" +
        " the longest path from the root node down to the farthest leaf node.\n" +
        "*/\n" +
        "int maxDepth(struct node* node) {\n" +
        "  if (node==NULL) {\n" +
        "    return(0);\n" +
        "  }\n" +
        "  else {\n" +
        "    // compute the depth of each subtree\n" +
        "    int lDepth = maxDepth(node->left);\n" +
        "    int rDepth = maxDepth(node->right);\n" +
        "    // use the larger one\n" +
        "    if (lDepth > rDepth) return(lDepth+1);\n" +
        "    else return(rDepth+1);\n" +
        "  }\n" +
        "}"

    const code4 = "/*\n" +
        " Given a non-empty binary search tree,\n" +
        " return the minimum data value found in that tree.\n" +
        " Note that the entire tree does not need to be searched.\n" +
        "*/\n" +
        "int minValue(struct node* node) {\n" +
        "  struct node* current = node;\n" +
        "  // loop down to find the leftmost leaf\n" +
        "  while (current->left != NULL) {\n" +
        "    current = current->left;\n" +
        "  }\n" +
        "\n" +
        "  return(current->data);\n" +
        "}"

    const code5 = "/*\n" +
        " Given a binary search tree, print out\n" +
        " its data elements in increasing\n" +
        " sorted order.\n" +
        "*/\n" +
        "void printTree(struct node* node) {\n" +
        "  if (node == NULL) return;\n" +
        "  printTree(node->left);\n" +
        "  printf(\"%d \", node->data);\n" +
        "  printTree(node->right);\n" +
        "}"

    const code6 = "/*\n" +
        " Given a binary tree, print its\n" +
        " nodes according to the \"bottom-up\"\n" +
        " postorder traversal.\n" +
        "*/\n" +
        "void printPostorder(struct node* node) {\n" +
        "  if (node == NULL) return;\n" +
        "  // first recur on both subtrees\n" +
        "  printTree(node->left);\n" +
        "  printTree(node->right);\n" +
        "\n" +
        "  // then deal with the node\n" +
        "  printf(\"%d \", node->data);\n" +
        "}"

    const code7 = "/*\n" +
        " Given a tree and a sum, return true if there is a path from the root\n" +
        " down to a leaf, such that adding up all the values along the path\n" +
        " equals the given sum.\n" +
        " Strategy: subtract the node value from the sum when recurring down,\n" +
        " and check to see if the sum is 0 when you run out of tree.\n" +
        "*/\n" +
        "int hasPathSum(struct node* node, int sum) {\n" +
        "  // return true if we run out of tree and sum==0\n" +
        "  if (node == NULL) {\n" +
        "    return(sum == 0);\n" +
        "  }\n" +
        "  else {\n" +
        "  // otherwise check both subtrees\n" +
        "    int subSum = sum - node->data;\n" +
        "    return(hasPathSum(node->left, subSum) ||\n" +
        "           hasPathSum(node->right, subSum));\n" +
        "  }\n" +
        "}"

    const code8 = "/*\n" +
        " Given a binary tree, print out all of its root-to-leaf\n" +
        " paths, one per line. Uses a recursive helper to do the work.\n" +
        "*/\n" +
        "void printPaths(struct node* node) {\n" +
        "  int path[1000];\n" +
        "  printPathsRecur(node, path, 0);\n" +
        "}\n" +
        "\n" +
        "/*\n" +
        " Recursive helper function -- given a node, and an array containing\n" +
        " the path from the root node up to but not including this node,\n" +
        " print out all the root-leaf paths.\n" +
        "*/\n" +
        "void printPathsRecur(struct node* node, int path[], int pathLen) {\n" +
        "  if (node==NULL) return;\n" +
        "\n" +
        "  // append this node to the path array\n" +
        "  path[pathLen] = node->data;\n" +
        "  pathLen++;\n" +
        "\n" +
        "  // it's a leaf, so print the path that led to here\n" +
        "  if (node->left==NULL && node->right==NULL) {\n" +
        "    printArray(path, pathLen);\n" +
        "  }\n" +
        "  else {\n" +
        "  // otherwise try both subtrees\n" +
        "    printPathsRecur(node->left, path, pathLen);\n" +
        "    printPathsRecur(node->right, path, pathLen);\n" +
        "  }\n" +
        "}\n" +
        "\n" +
        "// Utility that prints out an array on a line.\n" +
        "void printArray(int ints[], int len) {\n" +
        "  int i;\n" +
        "  for (i=0; i<len; i++) {\n" +
        "    printf(\"%d \", ints[i]);\n" +
        "  }\n" +
        "  printf(\"\\n\");\n" +
        "}"

    return (
        <>
            <p>Make an attempt to solve each problem before looking at the solution -- it's the best way to learn.</p>
            <br/>
            <h3 className={"font-bold"}>1. Build123() Solution (C/C++)</h3>
            <Editor value={code1} height="70vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>2. size() Solution (C/C++)</h3>
            <Editor value={code2} height="22vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>3. maxDepth() Solution (C/C++)</h3>
            <Editor value={code3} height="35vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>4. minValue() Solution (C/C++)</h3>
            <Editor value={code4} height="35vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>5. printTree() Solution (C/C++)</h3>
            <Editor value={code5} height="30vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>6. printPostorder() Solution (C/C++)</h3>
            <Editor value={code6} height="40vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>7. hasPathSum() Solution (C/C++)</h3>
            <Editor value={code7} height="45vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>8. printPaths() Solution (C/C++)</h3>
            <Editor value={code8} height="60vh" defaultLanguage={"cpp"}/>
            <br/>
        </>
    )
}