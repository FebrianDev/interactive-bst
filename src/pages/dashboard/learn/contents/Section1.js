import Editor from "@monaco-editor/react";

export default function () {

    const code1 = "struct node {\n" +
        "    int data;\n" +
        "    struct node* left;\n" +
        "    struct node* right;\n" +
        "}"

    const code2 = "/*\n" +
        " Given a binary tree, return true if a node\n" +
        " with the target data is found in the tree. Recurs\n" +
        " down the tree, chooses the left or right\n" +
        " branch by comparing the target to each node.\n" +
        "*/\n" +
        "static int lookup(struct node* node, int target) {\n" +
        "  // 1. Base case == empty tree\n" +
        "  // in that case, the target is not found so return false\n" +
        "  if (node == NULL) {\n" +
        "    return(false);\n" +
        "  }\n" +
        "  else {\n" +
        "    // 2. see if found here\n" +
        "    if (target == node->data) return(true);\n" +
        "    else {\n" +
        "      // 3. otherwise recur down the correct subtree\n" +
        "      if (target < node->data) return(lookup(node->left, target));\n" +
        "      else return(lookup(node->right, target));\n" +
        "    }\n" +
        "  }\n" +
        "}"

    const code3 = "/*\n" +
        " Helper function that allocates a new node\n" +
        " with the given data and NULL left and right\n" +
        " pointers.\n" +
        "*/\n" +
        "struct node* NewNode(int data) {\n" +
        "  struct node* node = new(struct node);    // \"new\" is like \"malloc\"\n" +
        "  node->data = data;\n" +
        "  node->left = NULL;\n" +
        "  node->right = NULL;\n" +
        "\n" +
        "  return(node);\n" +
        "}\n" +
        "\n" +
        "/*\n" +
        " Give a binary search tree and a number, inserts a new node\n" +
        " with the given number in the correct place in the tree.\n" +
        " Returns the new root pointer which the caller should\n" +
        " then use (the standard trick to avoid using reference\n" +
        " parameters).\n" +
        "*/\n" +
        "struct node* insert(struct node* node, int data) {\n" +
        "  // 1. If the tree is empty, return a new, single node\n" +
        "  if (node == NULL) {\n" +
        "    return(newNode(data));\n" +
        "  }\n" +
        "  else {\n" +
        "    // 2. Otherwise, recur down the tree\n" +
        "    if (data <= node->data) node->left = insert(node->left, data);\n" +
        "    else node->right = insert(node->right, data);\n" +
        "\n" +
        "    return(node); // return the (unchanged) node pointer\n" +
        "  }\n" +
        "}"

    return (
        <>
            <p>
                A binary tree is made of nodes, where each node contains a "left" pointer,
                a "right" pointer, and a data element. The "root" pointer points to the
                topmost node in the tree. The left and right pointers recursively point
                to smaller "subtrees" on either side. A null pointer represents a binary
                tree with no elements -- the empty tree. The formal recursive definition
                is: a <b>binary tree </b>is either empty (represented by a null pointer),
                or is made of a single node, where the left and right pointers (recursive
                definition ahead) each point to a <b>binary tree</b>.
            </p>
            <br/>
            <img src="http://cslibrary.stanford.edu/110/binarytree.gif" alt="a drawing of a little binary tree"
                 height="264" width="420"/>
            <br/>
            <p>A "binary search tree" (BST) or "ordered binary tree" is a type of binary
                tree where the nodes are arranged in order: for each node, all elements
                in its left subtree are less-or-equal to the node (&lt;=), and all the
                elements in its right subtree are greater than the node (>). The tree shown
                above is a binary search tree -- the "root" node is a 5, and its left subtree
                nodes (1, 3, 4) are &lt;= 5, and its right subtree nodes (6, 9) are > 5.
                Recursively, each of the subtrees must also obey the binary search tree
                constraint: in the (1, 3, 4) subtree, the 3 is the root, the 1 &lt;= 3
                and 4 > 3. Watch out for the exact wording in the problems -- a "binary
                search tree" is different from a "binary tree".</p><br/>
            <p>The nodes at the bottom edge of the tree have empty subtrees and are
                called "leaf" nodes (1, 4, 6) while the others are "internal" nodes (3,
                5, 9).</p><br/>
            <h3 className={"font-bold"}>
                Binary Search Tree Niche</h3>
            <p>Basically, binary search trees are fast at insert and lookup. The next
                section presents the code for these two algorithms. On average, a binary
                search tree algorithm can locate a node in an N node tree in order lg(N)
                time (log base 2). Therefore, binary search trees are good for "dictionary"
                problems where the code inserts and looks up information indexed by some
                key. The lg(N) behavior is the average case -- it's possible for a particular
                tree to be much slower depending on its shape.</p><br/>
            <h3 className={"font-bold"}>
                Strategy</h3>
            <p> Some of the problems in this article use plain binary trees, and some use
                binary search trees. In any case, the problems concentrate on the combination
                of pointers and recursion. (See the articles linked above for pointer articles
                that do not emphasize recursion.)</p><br/>
            <p>For each problem, there are two things to understand...</p><br/>
            <ul className="list-disc">
                <li>
                    The node/pointer structure that makes up the tree and the code that manipulates
                    it
                </li>

                <li>
                    The algorithm, typically recursive, that iterates over the tree
                </li>
            </ul>
            <p>When thinking about a binary tree problem, it's often a good idea to draw
                a few little trees to think about the various cases.</p><br/>
            <h3 className={"font-bold"}>
                Typical Binary Tree Code in C/C++</h3>
            <p>As an introduction, we'll look at the code for the two most basic binary
                search tree operations -- lookup() and insert(). The code here works for
                C or C++. Java programers can read the discussion here, and then look at
                the Java versions in <a href="#java">Section 4</a>.</p>
            <p>In C or C++, the binary tree is built with a node type like this...</p>
            <br/>

            <Editor value={code1} height="12vh" className={"overflow-y-hidden"} defaultLanguage={"cpp"}/>
            <br/>
            <h3 className={"font-bold"}>
                Lookup()</h3>
            <p>Given a binary search tree and a "target" value, search the tree to see
                if it contains the target. The basic pattern of the lookup() code occurs
                in many recursive tree algorithms: deal with the base case where the tree
                is empty, deal with the current node, and then use recursion to deal with
                the subtrees. If the tree is a binary search tree, there is often some
                sort of less-than test on the node to decide if the recursion should go
                left or right.</p>
            <br/>

            <Editor value={code2} height="50vh" className={"overflow-y-hidden"} defaultLanguage={"cpp"}/>

            <p>The lookup() algorithm could be written as a while-loop that iterates
                down the tree. Our version uses recursion to help prepare you for the problems
                below that require recursion.</p><br/>
            <h3 className={"font-bold"}>
                Pointer Changing Code</h3>
            <p>There is a common problem with pointer intensive code: what if a function
                needs to change one of the pointer parameters passed to it? For example,
                the insert() function below may want to change the root pointer. In C and
                C++, one solution uses pointers-to-pointers (aka "reference parameters").
                That's a fine technique, but here we will use the simpler technique that
                a function that wishes to change a pointer passed to it will <b>return</b>
                the new value of the pointer to the caller. The caller is responsible for
                using the new value. Suppose we have a change() function that may change
                the the root, then a call to change() will look like this...</p>
            <p><tt>// suppose the variable "root" points to the tree</tt></p>
            <br/><tt>root = change(root);</tt>
            <p>We take the value returned by change(), and use it as the new value
                for root. This construct is a little awkward, but it avoids using reference
                parameters which confuse some C and C++ programmers, and Java does not
                have reference parameters at all. This allows us to focus on the recursion
                instead of the pointer mechanics. (For lots of problems that use reference
                parameters, see CSLibrary #105, Linked List Problems, <a
                    href="http://cslibrary.stanford.edu/105/">http://cslibrary.stanford.edu/105/</a>).<br/>
            </p><br/>
            <h3 className={"font-bold"}>
                Insert()</h3>
            <p>Insert() -- given a binary search tree and a number, insert a new node
            with the given number into the tree in the correct place. The insert()
            code is similar to lookup(), but with the complication that it modifies
            the tree structure. As described above, insert() returns the new tree pointer
            to use to its caller. Calling insert() with the number 5 on this tree...</p><br/>
            <p>The solution shown here introduces a newNode() helper
                function that
                builds a single node. The base-case/recursion structure is
                similar to the
                structure in lookup() -- each call checks for the NULL case,
                looks at the
                node at hand, and then recurs down the left or right subtree
                if needed.</p><br/>

            <Editor value={code3} height="70vh" defaultLanguage={"cpp"}/><br/>

            <p>The shape of a binary tree depends very much
                on the order that the nodes
                are inserted. In particular, if the nodes
                are inserted in increasing order
                (1, 2, 3, 4), the tree nodes just grow to
                the right leading to a linked
                list shape where all the left pointers are
                NULL. A similar thing happens
                if the nodes are inserted in decreasing
                order (4, 3, 2, 1). The linked
                list shape defeats the lg(N) performance. We
                will not address that issue
                here, instead focusing on pointers and
                recursion.</p><br/>
        </>
    )
}