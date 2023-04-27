import Editor from "@monaco-editor/react";
import React from "react";

export default function () {

    const code =
        "#include <iostream>\n" +
        "#include <stack>\n" +
        "\n" +
        "using namespace std;\n" +
        "\n" +
        "class Node {\n" +
        "public:\n" +
        "    int data;\n" +
        "    Node *left, *right;\n" +
        "\n" +
        "    Node(int value) {\n" +
        "        data = value;\n" +
        "        left = right = NULL;\n" +
        "    }\n" +
        "};\n" +
        "\n" +
        "class BinarySearchTree {\n" +
        "    Node *root = NULL;\n" +
        "public:\n" +
        "    /*Insert Start*/\n" +
        "    void insertData(Node *&root, int key) {\n" +
        "        Node *node = new Node(key);\n" +
        "        if (!root) {\n" +
        "            root = node;\n" +
        "            return;\n" +
        "        }\n" +
        "        Node *prev = NULL;\n" +
        "        Node *temp = root;\n" +
        "        while (temp) {\n" +
        "            if (temp->data > key) {\n" +
        "                prev = temp;\n" +
        "                temp = temp->left;\n" +
        "            } else if (temp->data < key) {\n" +
        "                prev = temp;\n" +
        "                temp = temp->right;\n" +
        "            }\n" +
        "        }\n" +
        "        if (prev->data > key)\n" +
        "            prev->left = node;\n" +
        "        else\n" +
        "            prev->right = node;\n" +
        "    }\n" +
        "\n" +
        "    void insert(int data) {\n" +
        "        insertData(root, data);\n" +
        "    }\n" +
        "\n" +
        "    /*Insert End*/\n" +
        "\n" +
        "    Node *findMinimum(Node *cur) {\n" +
        "        while (cur->left != NULL) {\n" +
        "            cur = cur->left;\n" +
        "        }\n" +
        "        return cur;\n" +
        "    }\n" +
        "\n" +
        "    /*remove Start*/\n" +
        "    void searchData(Node *&cur, int item, Node *&parent) {\n" +
        "        while (cur != NULL && cur->data != item) {\n" +
        "            parent = cur;\n" +
        "            if (item < cur->data)\n" +
        "                cur = cur->left;\n" +
        "            else\n" +
        "                cur = cur->right;\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    void removeData(Node *&root, int item) {\n" +
        "        Node *parent = NULL;\n" +
        "        Node *cur = root;\n" +
        "        searchData(cur, item, parent);\n" +
        "        if (cur == NULL)\n" +
        "            return;\n" +
        "        if (cur->left == NULL && cur->right == NULL) {\n" +
        "            if (cur != root) {\n" +
        "                if (parent->left == cur)\n" +
        "                    parent->left = NULL;\n" +
        "                else\n" +
        "                    parent->right = NULL;\n" +
        "            } else\n" +
        "                root = NULL;\n" +
        "            free(cur);\n" +
        "        } else if (cur->left && cur->right) {\n" +
        "            Node *succ = findMinimum(cur->right);\n" +
        "            int val = succ->data;\n" +
        "            removeData(root, succ->data);\n" +
        "            cur->data = val;\n" +
        "        } else {\n" +
        "            Node *child = (cur->left) ? cur->left : cur->right;\n" +
        "            if (cur != root) {\n" +
        "                if (cur == parent->left)\n" +
        "                    parent->left = child;\n" +
        "                else\n" +
        "                    parent->right = child;\n" +
        "            } else\n" +
        "                root = child;\n" +
        "            free(cur);\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    void remove(int data) {\n" +
        "        removeData(root, data);\n" +
        "    }\n" +
        "    /*remove End*/\n" +
        "\n" +
        "    /*Inorder start*/\n" +
        "    void inorderRecursive(Node *root) {\n" +
        "        Node *temp = root;\n" +
        "        stack<Node *> st;\n" +
        "        while (temp != NULL || !st.empty()) {\n" +
        "            if (temp != NULL) {\n" +
        "                st.push(temp);\n" +
        "                temp = temp->left;\n" +
        "            } else {\n" +
        "                temp = st.top();\n" +
        "                st.pop();\n" +
        "                cout << temp->data << \" \";\n" +
        "                temp = temp->right;\n" +
        "            }\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    void inorder() {\n" +
        "        inorderRecursive(root);\n" +
        "    }\n" +
        "    /*Inorder End*/\n" +
        "\n" +
        "    /*Preorder Start*/\n" +
        "    void preorder_recursive(Node *node) {\n" +
        "        if (node == NULL)return;\n" +
        "\n" +
        "        cout << node->data << \" \";\n" +
        "        preorder_recursive(node->left);\n" +
        "        preorder_recursive(node->right);\n" +
        "    }\n" +
        "\n" +
        "    void preorder() {\n" +
        "        preorder_recursive(root);\n" +
        "    }\n" +
        "    /*Preorder End*/\n" +
        "\n" +
        "    /*Postorder Start*/\n" +
        "    void postorder_recursive(struct Node *node) {\n" +
        "        if (node == NULL)\n" +
        "            return;\n" +
        "        postorder_recursive(node->left);\n" +
        "\n" +
        "        postorder_recursive(node->right);\n" +
        "\n" +
        "        cout << node->data << \" \";\n" +
        "    }\n" +
        "\n" +
        "    void postorder() {\n" +
        "        postorder_recursive(root);\n" +
        "    }\n" +
        "    /*Postorder End*/\n" +
        "\n" +
        "    /*Search Start*/\n" +
        "    Node *search_recursive(Node *node, int key) {\n" +
        "\n" +
        "        if (node == NULL || node->data == key)\n" +
        "            return node;\n" +
        "\n" +
        "        if (node->data > key)\n" +
        "            return search_recursive(node->left, key);\n" +
        "\n" +
        "        return search_recursive(node->right, key);\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    void search(int data) {\n" +
        "        root = search_recursive(root, data);\n" +
        "        if (root != NULL) {\n" +
        "            cout << root->data;\n" +
        "        }\n" +
        "    }\n" +
        "    /*Search End*/\n" +
        "};\n" +
        "\n" +
        "int main() {\n" +
        "    BinarySearchTree bst = BinarySearchTree();\n" +
        "    bst.insert(5)\n" +
        "    bst.insert(3)\n" +
        "    bst.insert(1)\n" +
        "    bst.insert(7)\n" +
        "    bst.insert(4)\n" +
        "    bst.delete(4)\n" +
        "    bst.search(1)\n" +
        "    bst.preorder()\n" +
        "    bst.postorder()\n" +
        "    bst.inorder()\n" +
        "}\n"
    return (
        <>
            <h4 className={"font-bold"}>Implementasi Bahasa C++</h4><br/>
            <br/>
            <Editor value={code} height="80vh" defaultLanguage={"cpp"}/>
            <br/>
            <p>Penjelasan kode di atas:</p>
            <p>Pertama-tama, definisikan struktur node yang memiliki tiga anggota: data untuk menyimpan nilai node, left
                dan right untuk menyimpan pointer ke node kiri dan kanan.</p><br/>
            <p>Fungsi insert digunakan untuk memasukkan nilai ke dalam pohon. Jika root masih kosong, maka kita membuat
                node baru dan mengatur root ke node tersebut. Jika tidak, kita membandingkan nilai dengan root. Jika
                nilai lebih kecil dari root, maka nilai dimasukkan ke subpohon kiri. Jika tidak, nilai dimasukkan ke
                subpohon kanan.</p><br/>
            <p>Fungsi delete digunakan untuk menghapus node dengan nilai tertentu dari pohon. Jika nilai yang ingin
                dihapus lebih kecil dari nilai root, maka fungsi akan mencari node di subpohon kiri. Jika nilai yang
                ingin dihapus lebih besar dari nilai root, maka fungsi akan mencari node di subpohon kanan.</p><br/>
            <p>Fungsi findMinNode digunakan untuk mencari node dengan nilai minimum dalam subpohon yang diberikan.
                Fungsi ini akan mencari node paling kiri pada subpohon.</p><br/>
            <p>Fungsi search digunakan untuk mencari node dengan nilai tertentu dari pohon. Jika nilai yang ingin dicari
                lebih kecil dari nilai root, maka fungsi akan mencari node di subpohon kiri. Jika nilai yang ingin
                dicari lebih besar dari nilai root, maka fungsi akan mencari node di subpohon kanan. Dan jika nilai yang
                ingin dicari sama dengan root, maka nilai berhasil ditemukan. Jika tidak ada, maka nilai tersebut tidak
                ada pada tree/tidak ditemukan. </p><br/>
            <p>Fungsi inorder digunakan untuk melakukan traversal (penelusuran) pada dengan mengunjungi node-node dalam
                urutan kiri-root-kanan. Fungsi ini akan mencetak nilai dari setiap node yang dikunjungi dalam urutan
                tersebut.</p><br/>
            <p>Fungsi preorder digunakan untuk melakukan traversal (penelusuran) pada dengan mengunjungi node-node dalam
                urutan root-kiri-kanan. Fungsi ini akan mencetak nilai dari setiap node yang dikunjungi dalam urutan
                tersebut.</p><br/>
            <p>Fungsi postorder digunakan untuk melakukan traversal (penelusuran) pada dengan mengunjungi node-node
                dalam urutan kiri-kanan-root. Fungsi ini akan mencetak nilai dari setiap node yang dikunjungi dalam
                urutan tersebut.</p><br/><br/>
            <a href={"http://cslibrary.stanford.edu/110/BinaryTrees.html"}>http://cslibrary.stanford.edu/110/BinaryTrees.html</a><br/><br/>
        </>
    )
}