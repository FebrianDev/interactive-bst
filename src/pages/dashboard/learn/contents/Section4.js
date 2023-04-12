import Editor from "@monaco-editor/react";

export default function () {

    const code1 = "// BinaryTree.java\n" +
        "public class BinaryTree {\n" +
        "  // Root node pointer. Will be null for an empty tree.\n" +
        "  private Node root;\n" +
        " \n" +
        "  /*\n" +
        "   --Node--\n" +
        "   The binary tree is built using this nested node class.\n" +
        "   Each node stores one data element, and has left and right\n" +
        "   sub-tree pointer which may be null.\n" +
        "   The node is a \"dumb\" nested class -- we just use it for\n" +
        "   storage; it does not have any methods.\n" +
        "  */\n" +
        "  private static class Node {\n" +
        "    Node left;\n" +
        "    Node right;\n" +
        "    int data;\n" +
        "\n" +
        "    Node(int newData) {\n" +
        "      left = null;\n" +
        "      right = null;\n" +
        "      data = newData;\n" +
        "    }\n" +
        "  }\n" +
        "  /**\n" +
        "   Creates an empty binary tree -- a null root pointer.\n" +
        "  */\n" +
        "  public void BinaryTree() {\n" +
        "    root = null;\n" +
        "  }\n" +
        " \n" +
        "  /**\n" +
        "   Returns true if the given target is in the binary tree.\n" +
        "   Uses a recursive helper.\n" +
        "  */\n" +
        "  public boolean lookup(int data) {\n" +
        "    return(lookup(root, data));\n" +
        "  }\n" +
        " \n" +
        "  /**\n" +
        "   Recursive lookup  -- given a node, recur\n" +
        "   down searching for the given data.\n" +
        "  */\n" +
        "  private boolean lookup(Node node, int data) {\n" +
        "    if (node==null) {\n" +
        "      return(false);\n" +
        "    }\n" +
        "    if (data==node.data) {\n" +
        "      return(true);\n" +
        "    }\n" +
        "    else if (data<node.data) {\n" +
        "      return(lookup(node.left, data));\n" +
        "    }\n" +
        "    else {\n" +
        "      return(lookup(node.right, data));\n" +
        "    }\n" +
        "  }\n" +
        " \n" +
        "  /**\n" +
        "   Inserts the given data into the binary tree.\n" +
        "   Uses a recursive helper.\n" +
        "  */\n" +
        "  public void insert(int data) {\n" +
        "    root = insert(root, data);\n" +
        "  }\n" +
        " \n" +
        "  /**\n" +
        "   Recursive insert -- given a node pointer, recur down and\n" +
        "   insert the given data into the tree. Returns the new\n" +
        "   node pointer (the standard way to communicate\n" +
        "   a changed pointer back to the caller).\n" +
        "  */\n" +
        "  private Node insert(Node node, int data) {\n" +
        "    if (node==null) {\n" +
        "      node = new Node(data);\n" +
        "    }\n" +
        "    else {\n" +
        "      if (data <= node.data) {\n" +
        "        node.left = insert(node.left, data);\n" +
        "      }\n" +
        "      else {\n" +
        "        node.right = insert(node.right, data);\n" +
        "      }\n" +
        "    }\n" +
        "\n" +
        "    return(node); // in any case, return the new pointer to the caller\n" +
        "  }"
    return (
        <>
            <p>In Java, the key points in the recursion are exactly the same as in C or
                C++. In fact, I created the Java solutions by just copying the C solutions,
                and then making the syntactic changes. The recursion is the same, however
                the outer structure is slightly different.</p>
            <br/>
            <p>In Java, we will have a BinaryTree object that contains a single root
                pointer. The root pointer points to an internal Node class that behaves
                just like the node struct in the C/C++ version. The Node class is private
                -- it is used only for internal storage inside the BinaryTree and is not
                exposed to clients. With this OOP structure, almost every operation has
                two methods: a one-line method on the BinaryTree that starts the computation,
                and a recursive method that works on the Node objects. For the lookup()
                operation, there is a BinaryTree.lookup() method that the client uses to
                start a lookup operation. Internal to the BinaryTree class, there is a
                private recursive lookup(Node) method that implements the recursion down
                the Node structure. This second, private recursive method is basically
                the same as the recursive C/C++ functions above -- it takes a Node argument
                and uses recursion to iterate over the pointer structure.</p><br/>
            <h3 className={"font-bold"}>Java Binary Tree Structure</h3>
            <p>To get started, here are the basic definitions for the Java BinaryTree class, and the lookup() and
                insert() methods as examples...</p>
            <br/>
            <Editor value={code1} height="80vh" defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>OOP Style vs. Recursive Style</h3>
            <p>From the client point of view, the BinaryTree class demonstrates good OOP style -- it encapsulates the
                binary tree state, and the client sends messages like lookup() and insert() to operate on that state.
                Internally, the Node class and the recursive methods do not demonstrate OOP style. The recursive methods
                like insert(Node) and lookup (Node, int) basically look like recursive functions in any language. In
                particular, they do not operate against a "receiver" in any special way. Instead, the recursive methods
                operate on the arguments that are passed in which is the classical way to write recursion. My sense is
                that the OOP style and the recursive style do not be combined nicely for binary trees, so I have left
                them separate. Merging the two styles would be especially awkward for the "empty" tree (null) case,
                since you can't send a message to the null pointer. It's possible to get around that by having a special
                object to represent the null tree, but that seems like a distraction to me. I prefer to keep the
                recursive methods simple, and use different examples to teach OOP.</p>
        </>
    )
}