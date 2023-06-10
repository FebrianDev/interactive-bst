export default function (listLog){

    if(listLog === null) return

    return `
    class Node {
        double data;
        Node left, right;
    
        public Node(double data) {
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
        void remove(double data) {
            root = delete_Recursive(root, data);
        }
    
        Node delete_Recursive(Node root, double data) {
            if (root == null) return null;
    
            if (data < root.data) {
                root.left = delete_Recursive(root.left, data);
            } else if (data > root.data) {
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
    
        double minValue(Node root) {
            double minValue = root.data;
            while (root.left != null) {
                minValue = root.left.data;
                root = root.left;
            }
            return minValue;
        }
        /*Delete End*/
    
        /*Insert Start*/
        void insert(double data) {
            root = insert_Recursive(root, data);
        }
    
        Node insert_Recursive(Node root, double data) {
            if (root == null) {
                root = new Node(data);
                return root;
            }
    
            if (data < root.data) {
                root.left = insert_Recursive(root.left, data);
            } else if (data > root.data) {
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
        void search(double data) {
            root = search_Recursive(root, data);
            if (root != null) {
                System.out.println(root.data);
            }
        }
    
        Node search_Recursive(Node root, double data) {
            if (root == null || root.data == data) {
                return root;
            }
            if (root.data > data) {
                return search_Recursive(root.left, data);
            }
    
            return search_Recursive(root.right, data);
        }
        /*Search End*/
    
        public static void main(String[] args) {
            BinarySearchTree bst = new BinarySearchTree();
            ${listLog.map(d => (d.toString().includes("delete") === true) ? "bst."+d.toString().replace("delete", "remove")+";\n\t": "bst."+d.toString() +";\n\t").toString().replace(/,/g, "")}
        }
    }
    `
}
