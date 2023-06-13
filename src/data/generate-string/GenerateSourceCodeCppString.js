export default function (listLog) {

    if (listLog === null) return
    const importLib = "#include <iostream> \n #include <stack>"
    const template = `
    
    ${importLib}


using namespace std;

class Node {
public:
    string data;
    Node *left, *right;

    Node(string value) {
        data = value;
        left = right = NULL;
    }
};

class BinarySearchTree {
    Node *root = NULL;
public:
    /*Insert Start*/
    void insertData(Node *&root, string key) {
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

    void insert(string data) {
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
    void searchData(Node *&cur, string item, Node *&parent) {
        while (cur != NULL && cur->data != item) {
            parent = cur;
            if (item < cur->data)
                cur = cur->left;
            else
                cur = cur->right;
        }
    }

    void removeData(Node *&root, string item) {
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
            string val = succ->data;
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

    void remove(string data) {
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
    Node *search_recursive(Node *node, string key) {

        if (node == NULL || node->data == key)
            return node;

        if (node->data > key)
            return search_recursive(node->left, key);

        return search_recursive(node->right, key);

    }

    void search(string data) {
        root = search_recursive(root, data);
        if (root != NULL) {
            cout << root->data;
        }
    }
    /*Search End*/
};
`
    const newList = []
    listLog.map((data) => {
        const key = data.split("(")[0]
        const value = data.split("(")[1].split(")")[0]
        if (key === "insert") newList.push(`bst.insert("${value}")`)
        else if (key === "delete") newList.push(`bst.removeData("${value}")`)
        else if(key === "search") newList.push(`bst.search("${value}")->data`)
        else if(key === "inorder") newList.push("bst.inorder()")
        else if(key === "preorder") newList.push("bst.preorder()")
        else if(key === "postorder") newList.push("bst.postorder()")
    })

    return `
    ${template}   
    int main() {
         BinarySearchTree bst = BinarySearchTree();
         ${newList.map(d => d.toString() + ";\n\t").toString().replace(/,/g, "").replace(/!/g, ",")}
     
    }
`
}
