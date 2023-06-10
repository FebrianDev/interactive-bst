export default function (listLog) {

    if (listLog === null) return
    const importLib = "#include <iostream> \n #include <stack>"
    return `
    
    ${importLib}


using namespace std;

class Node {
public:
    float data;
    Node *left, *right;

    Node(float value) {
        data = value;
        left = right = NULL;
    }
};

class BinarySearchTree {
    Node *root = NULL;
public:
    /*Insert Start*/
    void insertData(Node *&root, float key) {
        Node *node = new Node(key);
        if (!root) {
            root = node;
            return;
        }
        Node *prev = NULL;
        Node *temp = root;
        while (temp) {
            if (temp->data > key) {
                prev = temp;
                temp = temp->left;
            } else if (temp->data < key) {
                prev = temp;
                temp = temp->right;
            }
        }
        if (prev->data > key)
            prev->left = node;
        else
            prev->right = node;
    }

    void insert(float data) {
        insertData(root, data);
    }

    /*Insert End*/

    Node *findMinimum(Node *cur) {
        while (cur->left != NULL) {
            cur = cur->left;
        }
        return cur;
    }

    /*remove Start*/
    void searchData(Node *&cur, float item, Node *&parent) {
        while (cur != NULL && cur->data != item) {
            parent = cur;
            if (item < cur->data)
                cur = cur->left;
            else
                cur = cur->right;
        }
    }

    void removeData(Node *&root, float item) {
        Node *parent = NULL;
        Node *cur = root;
        searchData(cur, item, parent);
        if (cur == NULL)
            return;
        if (cur->left == NULL && cur->right == NULL) {
            if (cur != root) {
                if (parent->left == cur)
                    parent->left = NULL;
                else
                    parent->right = NULL;
            } else
                root = NULL;
            free(cur);
        } else if (cur->left && cur->right) {
            Node *succ = findMinimum(cur->right);
            float val = succ->data;
            removeData(root, succ->data);
            cur->data = val;
        } else {
            Node *child = (cur->left) ? cur->left : cur->right;
            if (cur != root) {
                if (cur == parent->left)
                    parent->left = child;
                else
                    parent->right = child;
            } else
                root = child;
            free(cur);
        }
    }

    void remove(float data) {
        removeData(root, data);
    }
    /*remove End*/

    /*Inorder start*/
    void inorderRecursive(Node *root) {
        Node *temp = root;
        stack<Node *> st;
        while (temp != NULL || !st.empty()) {
            if (temp != NULL) {
                st.push(temp);
                temp = temp->left;
            } else {
                temp = st.top();
                st.pop();
                cout << temp->data << " ";
                temp = temp->right;
            }
        }
    }

    void inorder() {
        inorderRecursive(root);
    }
    /*Inorder End*/

    /*Preorder Start*/
    void preorder_recursive(Node *node) {
        if (node == NULL)return;

        cout << node->data << " ";
        preorder_recursive(node->left);
        preorder_recursive(node->right);
    }

    void preorder() {
        preorder_recursive(root);
    }
    /*Preorder End*/

    /*Postorder Start*/
    void postorder_recursive(struct Node *node) {
        if (node == NULL)
            return;
        postorder_recursive(node->left);

        postorder_recursive(node->right);

        cout << node->data << " ";
    }

    void postorder() {
        postorder_recursive(root);
    }
    /*Postorder End*/

    /*Search Start*/
    Node *search_recursive(Node *node, float key) {

        if (node == NULL || node->data == key)
            return node;

        if (node->data > key)
            return search_recursive(node->left, key);

        return search_recursive(node->right, key);

    }

    void search(float data) {
        root = search_recursive(root, data);
        if (root != NULL) {
            cout << root->data;
        }
    }
    /*Search End*/
};
    
    int main() {
         BinarySearchTree bst = BinarySearchTree();
         ${listLog.map(d =>(d.toString().includes("delete")) ? "bst."+d.toString().replace("delete", "remove")+ ";\n\t" : "bst."+d.toString() + ";\n\t").toString().replace(/,/g, "")}
    }
`
}
