import Editor from "@monaco-editor/react";
import React from "react";

export default function () {
    const code = "#include <stdio.h>\n" +
        "#include <stdlib.h>\n" +
        "\n" +
        "struct node {\n" +
        "    int data;\n" +
        "    struct node *left, *right;\n" +
        "};\n" +
        "\n" +
        "//function to create a node\n" +
        "struct node *new_node(int data) {\n" +
        "    struct node *p;\n" +
        "    p = malloc(sizeof(struct node));\n" +
        "    p->data = data;\n" +
        "    p->left = NULL;\n" +
        "    p->right = NULL;\n" +
        "\n" +
        "    return p;\n" +
        "}\n" +
        "\n" +
        "struct node *insert(struct node *root, int x) {\n" +
        "    if (root == NULL)\n" +
        "        return new_node(x);\n" +
        "    else if (x > root->data)\n" +
        "        root->right = insert(root->right, x);\n" +
        "    else\n" +
        "        root->left = insert(root->left, x);\n" +
        "    return root;\n" +
        "}\n" +
        "\n" +
        "//function to find the minimum value in a node\n" +
        "struct node *find_minimum(struct node *root) {\n" +
        "    if (root == NULL)\n" +
        "        return NULL;\n" +
        "    else if (root->left != NULL)\n" +
        "        return find_minimum(root->left);\n" +
        "    return root;\n" +
        "}\n" +
        "\n" +
        "// function to delete a node\n" +
        "struct node *delete(struct node *root, int x) {\n" +
        "    if (root == NULL)\n" +
        "        return NULL;\n" +
        "    if (x > root->data)\n" +
        "        root->right = delete(root->right, x);\n" +
        "    else if (x < root->data)\n" +
        "        root->left = delete(root->left, x);\n" +
        "    else {\n" +
        "        if (root->left == NULL && root->right == NULL) {\n" +
        "            free(root);\n" +
        "            return NULL;\n" +
        "        } else if (root->left == NULL || root->right == NULL) {\n" +
        "            struct node *temp;\n" +
        "            if (root->left == NULL)\n" +
        "                temp = root->right;\n" +
        "            else\n" +
        "                temp = root->left;\n" +
        "            free(root);\n" +
        "            return temp;\n" +
        "        } else {\n" +
        "            struct node *temp = find_minimum(root->right);\n" +
        "            root->data = temp->data;\n" +
        "            root->right = delete(root->right, temp->data);\n" +
        "        }\n" +
        "    }\n" +
        "    return root;\n" +
        "}\n" +
        "\n" +
        "struct node *search(struct node *root, int x) {\n" +
        "    if (root == NULL || root->data == x)\n" +
        "        return root;\n" +
        "    else if (x > root->data)\n" +
        "        return search(root->right, x);\n" +
        "    else\n" +
        "        return search(root->left, x);\n" +
        "}\n" +
        "\n" +
        "void inorder(struct node *root) {\n" +
        "    if (root != NULL) {\n" +
        "        inorder(root->left);\n" +
        "        printf(\" %d \", root->data);\n" +
        "        inorder(root->right);\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "void preorder(struct node *root) {\n" +
        "    if (root != NULL) {\n" +
        "        printf(\" %d \") << (int) root->data;\n" +
        "        preorder(root->left);\n" +
        "        preorder(root->right);\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "void postorder(struct node *root) {\n" +
        "    if (root != NULL) {\n" +
        "        postorder(root->left);\n" +
        "        postorder(root->right);\n" +
        "        printf(\" %d \", root->data);\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "main() {\n" +
        "    struct node *root = new_node(5);\n" +
        "    insert(root, 5);\n" +
        "    insert(root, 3);\n" +
        "    insert(root, 7);\n" +
        "    insert(root, 1);\n" +
        "    insert(root, 4);\n" +
        "    delete(root, 4);\n" +
        "    search(root,1);\n" +
        "\n" +
        "    preorder(root);\n" +
        "    postorder(root);\n" +
        "    inorder(root);\n" +
        "}\n"

    return (
        <>
            <h4 className={"font-bold"}>Implementasi Bahasa C</h4><br/>
            <Editor value={code} height="80vh"
                    defaultLanguage={"c"}/><br/>
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
        </>
    )
}