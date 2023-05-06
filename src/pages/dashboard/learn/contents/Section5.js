import Editor from "@monaco-editor/react";
import React from "react";

export default function (){
    const code = "class Node\n" +
        "{\n" +
        "    public Node LeftNode { get; set; }\n" +
        "    public Node RightNode { get; set; }\n" +
        "    public int Data { get; set; }\n" +
        "}\n" +
        "\n" +
        "class BinarySearchTree\n" +
        "{\n" +
        "    public Node Root { get; set; }\n" +
        "\n" +
        "    /*Insert Start*/\n" +
        "    public void insert(int value)\n" +
        "    {\n" +
        "        Node before = null, after = this.Root;\n" +
        "\n" +
        "        while (after != null)\n" +
        "        {\n" +
        "            before = after;\n" +
        "            if (value < after.Data) //Is new node in left tree? \n" +
        "                after = after.LeftNode;\n" +
        "            else if (value > after.Data) //Is new node in right tree?\n" +
        "                after = after.RightNode;\n" +
        "        }\n" +
        "\n" +
        "        Node newNode = new Node();\n" +
        "        newNode.Data = value;\n" +
        "\n" +
        "        if (this.Root == null) //Tree ise empty\n" +
        "            this.Root = newNode;\n" +
        "        else\n" +
        "        {\n" +
        "            if (value < before.Data)\n" +
        "                before.LeftNode = newNode;\n" +
        "            else\n" +
        "                before.RightNode = newNode;\n" +
        "        }\n" +
        "    }\n" +
        "    /*Insert End*/\n" +
        "\n" +
        "    /*Search Start*/\n" +
        "    public Node search(int value)\n" +
        "    {\n" +
        "        return this.Search(value, this.Root);\n" +
        "    }\n" +
        "    \n" +
        "    private Node Search(int value, Node parent)\n" +
        "    {\n" +
        "        if (parent != null)\n" +
        "        {\n" +
        "            if (value == parent.Data) return parent;\n" +
        "            if (value < parent.Data)\n" +
        "                return Search(value, parent.LeftNode);\n" +
        "            else\n" +
        "                return Search(value, parent.RightNode);\n" +
        "        }\n" +
        "\n" +
        "        return null;\n" +
        "    }\n" +
        "    /*Search End*/\n" +
        "\n" +
        "    /*Delete Start*/\n" +
        "    public void delete(int value)\n" +
        "    {\n" +
        "        this.Root = Remove(this.Root, value);\n" +
        "    }\n" +
        "\n" +
        "    private Node Remove(Node parent, int key)\n" +
        "    {\n" +
        "        if (parent == null) return parent;\n" +
        "\n" +
        "        if (key < parent.Data) parent.LeftNode = Remove(parent.LeftNode, key);\n" +
        "        else if (key > parent.Data)\n" +
        "            parent.RightNode = Remove(parent.RightNode, key);\n" +
        "\n" +
        "        // if value is same as parent's value, then this is the node to be deleted  \n" +
        "        else\n" +
        "        {\n" +
        "            // node with only one child or no child  \n" +
        "            if (parent.LeftNode == null)\n" +
        "                return parent.RightNode;\n" +
        "            else if (parent.RightNode == null)\n" +
        "                return parent.LeftNode;\n" +
        "\n" +
        "            // node with two children: Get the inorder successor (smallest in the right subtree)  \n" +
        "            parent.Data = MinValue(parent.RightNode);\n" +
        "\n" +
        "            // Delete the inorder successor  \n" +
        "            parent.RightNode = Remove(parent.RightNode, parent.Data);\n" +
        "        }\n" +
        "\n" +
        "        return parent;\n" +
        "    }\n" +
        "\n" +
        "    private int MinValue(Node node)\n" +
        "    {\n" +
        "        int minv = node.Data;\n" +
        "\n" +
        "        while (node.LeftNode != null)\n" +
        "        {\n" +
        "            minv = node.LeftNode.Data;\n" +
        "            node = node.LeftNode;\n" +
        "        }\n" +
        "\n" +
        "        return minv;\n" +
        "    }\n" +
        "    \n" +
        "    /*Delete End*/\n" +
        "\n" +
        "    /*Preorder Start*/\n" +
        "    public void preOrder(Node parent)\n" +
        "    {\n" +
        "        if (parent != null)\n" +
        "        {\n" +
        "            Console.Write(parent.Data + \" \");\n" +
        "            preOrder(parent.LeftNode);\n" +
        "            preOrder(parent.RightNode);\n" +
        "        }\n" +
        "    }\n" +
        "    /*Preorder End*/\n" +
        "\n" +
        "    /*Inorder Start*/\n" +
        "    public void inOrder(Node parent)\n" +
        "    {\n" +
        "        if (parent != null)\n" +
        "        {\n" +
        "            inOrder(parent.LeftNode);\n" +
        "            Console.Write(parent.Data + \" \");\n" +
        "            inOrder(parent.RightNode);\n" +
        "        }\n" +
        "    }\n" +
        "    /*Inorder End*/\n" +
        "\n" +
        "    /*Postorder Start*/\n" +
        "    public void postOrder(Node parent)\n" +
        "    {\n" +
        "        if (parent != null)\n" +
        "        {\n" +
        "            postOrder(parent.LeftNode);\n" +
        "            postOrder(parent.RightNode);\n" +
        "            Console.Write(parent.Data + \" \");\n" +
        "        }\n" +
        "    }\n" +
        "    /*Postorder End*/\n" +
        "}\n" +
        "\n" +
        "public class Program\n" +
        "{\n" +
        "    public static void Main()\n" +
        "    {\n" +
        "        BinarySearchTree bst = new BinarySearchTree();\n" +
        "\n" +
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
            <h4 className={"font-bold"}>Implementasi Bahasa C#</h4><br/>
            <br/>
            <Editor value={code} height="80vh" defaultLanguage={"csharp"}/>
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
            <a href={"https://www.geeksforgeeks.org/binary-search-tree-data-structure/"}>https://www.geeksforgeeks.org/binary-search-tree-data-structure/</a><br/>
            <a href={"chat.openai.com"}>chat.openai.com</a><br/>
            <a href={"https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf"}>https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf</a><br/>
            <a href={"https://www.programiz.com/dsa/binary-search-tree"}>https://www.programiz.com/dsa/binary-search-tree</a><br/>
            <a href={"https://www.javatpoint.com/binary-search-tree"}>https://www.javatpoint.com/binary-search-tree</a><br/>
            <a href={"https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm"}>https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm</a><br/><br/><br/>

        </>
    )
}