import Editor from "@monaco-editor/react";
import React from "react";

export default function (){
    const code = "class Node {\n" +
        "    int data;\n" +
        "    Node left, right;\n" +
        "\n" +
        "    public Node(int data) {\n" +
        "        this.data = data;\n" +
        "        left = right = null;\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "public class BinarySearchTree {\n" +
        "    Node root;\n" +
        "\n" +
        "    BinarySearchTree() {\n" +
        "        root = null;\n" +
        "    }\n" +
        "\n" +
        "    /*Insert Start*/\n" +
        "    void insert(int data) {\n" +
        "        root = insert_Recursive(root, data);\n" +
        "    }\n" +
        "\n" +
        "    Node insert_Recursive(Node root, int data) {\n" +
        "        if (root == null) {\n" +
        "            root = new Node(data);\n" +
        "            return root;\n" +
        "        }\n" +
        "\n" +
        "        if (data < root.data) {\n" +
        "            root.left = insert_Recursive(root.left, data);\n" +
        "        } else if (data > root.data) {\n" +
        "            root.right = insert_Recursive(root.right, data);\n" +
        "        }\n" +
        "        return root;\n" +
        "    }\n" +
        "    /*Insert End*/\n" +
        "\n" +
        "    /*Delete Start*/\n" +
        "    void delete(int data) {\n" +
        "        root = delete_Recursive(root, data);\n" +
        "    }\n" +
        "\n" +
        "    Node delete_Recursive(Node root, int data) {\n" +
        "        if (root == null) return null;\n" +
        "\n" +
        "        if (data < root.data) {\n" +
        "            root.left = delete_Recursive(root.left, data);\n" +
        "        } else if (data > root.data) {\n" +
        "            root.right = delete_Recursive(root.right, data);\n" +
        "        } else {\n" +
        "            if (root.left == null) {\n" +
        "                return root.right;\n" +
        "            } else if (root.right == null) {\n" +
        "                return root.left;\n" +
        "            }\n" +
        "\n" +
        "            root.data = minValue(root.right);\n" +
        "\n" +
        "            root.right = delete_Recursive(root.right, root.data);\n" +
        "        }\n" +
        "        return root;\n" +
        "    }\n" +
        "\n" +
        "    int minValue(Node root) {\n" +
        "        int minValue = root.data;\n" +
        "        while (root.left != null) {\n" +
        "            minValue = root.left.data;\n" +
        "            root = root.left;\n" +
        "        }\n" +
        "        return minValue;\n" +
        "    }\n" +
        "    /*Delete End*/\n" +
        "\n" +
        "    /*Search Start*/\n" +
        "    void search(int data) {\n" +
        "        root = search_Recursive(root, data);\n" +
        "        if (root != null) {\n" +
        "            System.out.println(root.data);\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    Node search_Recursive(Node root, int data) {\n" +
        "        if (root == null || root.data == data) {\n" +
        "            return root;\n" +
        "        }\n" +
        "        if (root.data > data) {\n" +
        "            return search_Recursive(root.left, data);\n" +
        "        }\n" +
        "\n" +
        "        return search_Recursive(root.right, data);\n" +
        "    }\n" +
        "    /*Search End*/\n" +
        "\n" +
        "    /*Inorder Start*/\n" +
        "    void inorder() {\n" +
        "        inorder_Recursive(root);\n" +
        "    }\n" +
        "\n" +
        "    void inorder_Recursive(Node root) {\n" +
        "        if (root != null) {\n" +
        "            inorder_Recursive(root.left);\n" +
        "            System.out.print(root.data + \" \");\n" +
        "            inorder_Recursive(root.right);\n" +
        "        }\n" +
        "    }\n" +
        "    /*Inorder End*/\n" +
        "\n" +
        "    /*Postorder Start*/\n" +
        "    void postorder() {\n" +
        "        postOrder_Recursive(root);\n" +
        "    }\n" +
        "\n" +
        "    void postOrder_Recursive(Node root) {\n" +
        "        if (root == null) return;\n" +
        "\n" +
        "        postOrder_Recursive(root.left);\n" +
        "        postOrder_Recursive(root.right);\n" +
        "        System.out.print(root.data + \" \");\n" +
        "    }\n" +
        "    /*Postorder End*/\n" +
        "\n" +
        "    /*Preorder Start*/\n" +
        "    void preorder() {\n" +
        "        preOrder_Recursive(root);\n" +
        "    }\n" +
        "\n" +
        "    void preOrder_Recursive(Node node) {\n" +
        "        if (node == null)\n" +
        "            return;\n" +
        "\n" +
        "        System.out.print(node.data + \" \");\n" +
        "        preOrder_Recursive(node.left);\n" +
        "        preOrder_Recursive(node.right);\n" +
        "    }\n" +
        "    /*Preorder End*/\n" +
        "\n" +
        "    public static void main(String[] args) {\n" +
        "        BinarySearchTree bst = new BinarySearchTree();\n" +
        "        bst.insert(5)\n" +
        "        bst.insert(3)\n" +
        "        bst.insert(1)\n" +
        "        bst.insert(7)\n" +
        "        bst.insert(4)\n" +
        "        bst.delete(4)\n" +
        "        bst.search(1)\n" +
        "        bst.preorder()\n" +
        "        bst.postorder()\n" +
        "        bst.inorder()\n" +
        "    }\n" +
        "}"

    return (
        <>
            <h4 className={"font-bold"}>Implementasi Bahasa Java</h4><br/>
            <br/>
            <Editor value={code} height="80vh" defaultLanguage={"java"}/>
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
        </>
    )
}