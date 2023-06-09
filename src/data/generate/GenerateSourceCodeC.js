export default function (listLog) {
    if (listLog === null || listLog === undefined || listLog.length <= 0) return
    const importLib = "#include <stdio.h> \n #include <stdlib.h>"
    const template = `
    ${importLib}    

    struct node {
        int data;
        struct node *left, *right;
    };
    
    struct node *search(struct node *root, int x) {
        if (root == NULL || root->data == x)
            return root;
        else if (x > root->data)
            return search(root->right, x);
        else
            return search(root->left, x);
    }
    
    //function to find the minimum value in a node
    struct node *find_minimum(struct node *root) {
        if (root == NULL)
            return NULL;
        else if (root->left != NULL)
            return find_minimum(root->left);
        return root;
    }
    
    //function to create a node
    struct node *new_node(int data) {
        struct node *p;
        p = malloc(sizeof(struct node));
        p->data = data;
        p->left = NULL;
        p->right = NULL;
    
        return p;
    }
    
    struct node *insert(struct node *root, int x) {
        if (root == NULL)
            return new_node(x);
        else if (x > root->data)
            root->right = insert(root->right, x);
        else
            root->left = insert(root->left, x);
        return root;
    }
    
    // function to delete a node
    struct node *removeData(struct node *root, int x) {
        if (root == NULL)
            return NULL;
        if (x > root->data)
            root->right = removeData(root->right, x);
        else if (x < root->data)
            root->left = removeData(root->left, x);
        else {
            if (root->left == NULL && root->right == NULL) {
                free(root);
                return NULL;
            } else if (root->left == NULL || root->right == NULL) {
                struct node *temp;
                if (root->left == NULL)
                    temp = root->right;
                else
                    temp = root->left;
                free(root);
                return temp;
            } else {
                struct node *temp = find_minimum(root->right);
                root->data = temp->data;
                root->right = removeData(root->right, temp->data);
            }
        }
        return root;
    }
    
    void inorder(struct node *root) {
        if (root != NULL) {
            inorder(root->left);
            printf(" %d ", root->data);
            inorder(root->right);
        }
    }
    
   void preorder(struct node *root) {
        if (root != NULL) {
            printf(" %d ", root->data);
            preorder(root->left);
            preorder(root->right);
        }
    }
    
    void postorder(struct node *root) {
        if (root != NULL) {
            postorder(root->left);
            postorder(root->right);
            printf(" %d ", root->data);
        }
    }
   `

    const first = (listLog[0].split("(")[1]).split(")")[0]
    const init = `struct node *root = new_node(${first});`

    const newList = []
    listLog.map((data) => {
        const key = data.split("(")[0]
        const value = data.split("(")[1].split(")")[0]
        if (key === "insert") newList.push("insert(root"+"! "+ value + ")")
        else if (key === "delete") newList.push(`removeData(root! ${value})`)
        else if(key === "search") newList.push(`search(root! ${value})->data`)
        else if(key === "inorder") newList.push("inorder(root)")
        else if(key === "preorder") newList.push("preorder(root)")
        else if(key === "postorder") newList.push("postorder(root)")
    })

    return `
     ${template}
     main(){
        ${init}
           ${newList.map(d => d.toString() + ";\n\t").toString().replace(/,/g, "").replace(/!/g, ",")}
     }
    `
}
