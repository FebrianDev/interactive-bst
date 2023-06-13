export default function (listLog){

    if(listLog === null) return

    const template = `
    class Node {
    String data;
    Node left, right;

    public Node(String data) {
        this.data = data;
        left = right = null;
    }
}

public class BinarySearchTree {
    Node root;

    BinarySearchTree() {
        root = null;
    }

    /*Delete Start*/
    void remove(String data) {
        root = delete_Recursive(root, data);
    }

    Node delete_Recursive(Node root, String data) {
        if (root == null) return null;

        if (data.compareTo(root.data) < 0) {
            root.left = delete_Recursive(root.left, data);
        } else if (data.compareTo(root.data) > 0) {
            root.right = delete_Recursive(root.right, data);
        } else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

            root.data = minValue(root.right);

            root.right = delete_Recursive(root.right, root.data);
        }
        return root;
    }

    String minValue(Node root) {
        String minValue = root.data;
        while (root.left != null) {
            minValue = root.left.data;
            root = root.left;
        }
        return minValue;
    }
    /*Delete End*/

    /*Insert Start*/
    void insert(String data) {
        root = insert_Recursive(root, data);
    }

    Node insert_Recursive(Node root, String data) {
        if (root == null) {
            root = new Node(data);
            return root;
        }

        if (data.compareTo(root.data) < 0) {
            root.left = insert_Recursive(root.left, data);
        } else if (data.compareTo(root.data) > 0) {
            root.right = insert_Recursive(root.right, data);
        }
        return root;
    }
    /*Insert End*/

    /*Inorder Start*/
    void inorder() {
        inorder_Recursive(root);
    }

    void inorder_Recursive(Node root) {
        if (root != null) {
            inorder_Recursive(root.left);
            System.out.print(root.data + " ");
            inorder_Recursive(root.right);
        }
    }
    /*Inorder End*/

    /*Postorder Start*/
    void postorder() {
        postOrder_Recursive(root);
    }

    void postOrder_Recursive(Node root) {
        if (root == null) return;

        postOrder_Recursive(root.left);
        postOrder_Recursive(root.right);
        System.out.print(root.data + " ");
    }
    /*Postorder End*/

    /*Preorder Start*/
    void preorder() {
        preOrder_Recursive(root);
    }

    void preOrder_Recursive(Node node) {
        if (node == null)
            return;

        System.out.print(node.data + " ");
        preOrder_Recursive(node.left);
        preOrder_Recursive(node.right);
    }
    /*Preorder End*/

    /*Search Start*/
    void search(String data) {
        root = search_Recursive(root, data);
        if (root != null) {
            System.out.println(root.data);
        }
    }

    Node search_Recursive(Node root, String data) {
        if (root == null || root.data == data) {
            return root;
        }
        if (root.data.compareTo(data) > 0) {
            return search_Recursive(root.left, data);
        }

        return search_Recursive(root.right, data);
    }
    /*Search End*/
    `
    const newList = []
    listLog.map((data) => {
        const key = data.split("(")[0]
        const value = data.split("(")[1].split(")")[0]
        if (key === "insert") newList.push(`bst.insert("${value}")`)
        else if (key === "delete") newList.push(`bst.remove("${value}")`)
        else if(key === "search") newList.push(`bst.search("${value}")`)
        else if(key === "inorder") newList.push("bst.inorder()")
        else if(key === "preorder") newList.push("bst.preorder()")
        else if(key === "postorder") newList.push("bst.postorder()")
    })

    const data = `
        public static void main(String[] args) {
            BinarySearchTree bst = new BinarySearchTree();
            ${newList.map(d => d.toString() +";\n\t".replace(/,/g, ""))}
        }
    }
    `.replaceAll(",", "")

    return `
    ${template}
    ${data}
    `
}
