import Editor from "@monaco-editor/react";
import React from "react";

export default function () {
    const code = "\n" +
        "    class Node {\n" +
        "        constructor(data) {\n" +
        "            this.data = data\n" +
        "            this.left = null\n" +
        "            this.right = null\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    class BinarySearchTree {\n" +
        "        constructor() {\n" +
        "            this.root = null\n" +
        "        }\n" +
        "    \n" +
        "        /*Insert Data Start*/\n" +
        "        insert(data) {\n" +
        "            const node = this.root\n" +
        "            if (node === null) {\n" +
        "                this.root = new Node(data)\n" +
        "                return\n" +
        "            } else {\n" +
        "                function searchTree(nodes) {\n" +
        "                    if (data < nodes.data) {\n" +
        "                        if (nodes.left === null) {\n" +
        "                            nodes.left = new Node(data)\n" +
        "                            return\n" +
        "                        } else if (nodes.data !== null) {\n" +
        "                            return searchTree(nodes.left)\n" +
        "                        }\n" +
        "                    } else if (data > nodes.data) {\n" +
        "                        if (nodes.right === null) {\n" +
        "                            nodes.right = new Node(data)\n" +
        "                            return\n" +
        "                        } else if (nodes.data !== null) {\n" +
        "                            return searchTree(nodes.right)\n" +
        "                        }\n" +
        "                    } else {\n" +
        "                        return null\n" +
        "                    }\n" +
        "                }\n" +
        "    \n" +
        "                searchTree(node)\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        findMinNode(node) {\n" +
        "            if (node.left === null) {\n" +
        "                return node\n" +
        "            } else {\n" +
        "                return this.findMinNode(node.left)\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Insert Data End*/\n" +
        "    \n" +
        "        /*Search Data Start*/\n" +
        "        search(data) {\n" +
        "            this.searchData(this.root, data)\n" +
        "        }\n" +
        "    \n" +
        "        searchData(node, data) {\n" +
        "            if (node === null) {\n" +
        "                return null\n" +
        "            } else if (data < node.data) {\n" +
        "                return this.search(node.left, data)\n" +
        "            } else if (data > node.data) {\n" +
        "                return this.search(node.right, data)\n" +
        "            } else {\n" +
        "                return node.data\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Search Data End*/\n" +
        "    \n" +
        "        /*Delete Data Start*/\n" +
        "        remove(data) {\n" +
        "            this.root = this.removeData(this.root, data)\n" +
        "        }\n" +
        "    \n" +
        "        removeData(nodes, data) {\n" +
        "            if (nodes === null) {\n" +
        "                return null\n" +
        "            } else if (data < nodes.data) {\n" +
        "                nodes.left = this.removeData(nodes.left, data)\n" +
        "                return nodes\n" +
        "            } else if (data > nodes.data) {\n" +
        "                nodes.right = this.removeData(nodes.right, data)\n" +
        "                return nodes\n" +
        "            } else {\n" +
        "                this.newLog.logDelete(data)\n" +
        "                if (nodes.left === null && nodes.right === null) {\n" +
        "                    nodes = null\n" +
        "                    return nodes\n" +
        "                } else if (nodes.left === null) {\n" +
        "                    nodes = nodes.right\n" +
        "                    return nodes\n" +
        "                } else if (nodes.right === null) {\n" +
        "                    nodes = nodes.left\n" +
        "                    return nodes\n" +
        "                }\n" +
        "                const min = this.findMinNode(nodes.right)\n" +
        "                nodes.data = min.data\n" +
        "                nodes.right = this.removeData(nodes.right, min.data)\n" +
        "                return nodes\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Delete Data End*/\n" +
        "    \n" +
        "        /*Inorder Start*/\n" +
        "        inorder() {\n" +
        "            this.inorder_recursive(this.root)\n" +
        "        }\n" +
        "    \n" +
        "        inorder_recursive(node) {\n" +
        "            if (node !== null) {\n" +
        "                this.inorder_recursive(node.left)\n" +
        "                console.log(node.data)\n" +
        "                this.inorder_recursive(node.right)\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Inorder End*/\n" +
        "    \n" +
        "        /*Preorder Start*/\n" +
        "        preorder() {\n" +
        "            this.preorder_recursive(this.root)\n" +
        "        }\n" +
        "    \n" +
        "        preorder_recursive(node) {\n" +
        "            if (node !== null) {\n" +
        "                console.log(node.data)\n" +
        "                this.preorder_recursive(node.left)\n" +
        "                this.preorder_recursive(node.right)\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Preorder End*/\n" +
        "    \n" +
        "        /*Postorder Start*/\n" +
        "        postorder() {\n" +
        "            this.postorder_recursive(this.root)\n" +
        "        }\n" +
        "    \n" +
        "        postorder_recursive(node) {\n" +
        "            if (node !== null) {\n" +
        "                this.postorder_recursive(node.left)\n" +
        "                this.postorder_recursive(node.right)\n" +
        "                console.log(node.data)\n" +
        "            }\n" +
        "        }\n" +
        "    \n" +
        "        /*Postorder End*/\n" +
        "    }\n" +
        "    \n" +
        "    const bst = new BinarySearchTree()\n" +
        "    bst.insert(5)\n" +
        "\tbst.insert(3)\n" +
        "\tbst.insert(1)\n" +
        "\tbst.insert(7)\n" +
        "\tbst.insert(4)\n" +
        "\tbst.remove(4)\n" +
        "\tbst.search(1)\n" +
        "\tbst.preorder()\n" +
        "\tbst.postorder()\n" +
        "\tbst.inorder()\n" +
        "\t\n"

    return (
        <>
            <h4 className={"font-bold"}>Implementasi Bahasa Javascript</h4><br/>
            <br/>
            <Editor value={code} height="80vh" defaultLanguage={"javascript"}/>
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