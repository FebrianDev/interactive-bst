export default function () {
    return (
        <>
            <h4 className={"font-bold text-lg"}>Apa Itu Binary Search Tree</h4>
            <p>
                Binary search tree (BST) merupakan salah satu struktur data yang digunakan untuk menyimpan sekumpulan
                elemen yang terurut(ordered Binary Tree) secara teratur. BST terdiri dari node-node yang memiliki
                maksimal dua anak, yaitu left child dan right child. Setiap node pada BST memiliki nilai kunci yang unik
                dan diurutkan secara teratur, yaitu setiap node pada sub-pohon kiri dari suatu node harus memiliki nilai
                kunci yang lebih kecil dari nilai kunci node tersebut, dan setiap node pada sub-pohon kanan harus
                memiliki nilai kunci yang lebih besar.
            </p>
            <br/>
            <p>
                Dengan cara ini, pencarian elemen pada BST dapat dilakukan secara efisien dengan menggunakan teknik
                pencarian biner (binary search), yaitu dengan membandingkan nilai kunci yang dicari dengan nilai kunci
                pada node saat ini dan bergerak ke kiri atau kanan sesuai dengan hasil perbandingan tersebut. Oleh
                karena itu, BST sering digunakan untuk implementasi struktur data seperti tabel pencarian (dictionary),
                index pada database, dan pohon pengambilan keputusan (decision tree).
            </p>
            <br/>
            <h4 className={"font-bold text-lg"}>Operasi Binary Search Tree</h4>
            <p>Dalam Binary Search Tree terdapat berbagai macam operasi, diantaranya adalah </p><br/>
            <p><b>Insert</b> : Menyisipkan elemen baru ke dalam BST. Prosesnya dimulai dengan membandingkan nilai kunci
                dari
                elemen baru dengan nilai kunci pada node saat ini. Jika nilai kunci baru lebih kecil, elemen baru akan
                disisipkan pada sub-pohon kiri dari node tersebut. Jika nilai kunci baru lebih besar, elemen baru akan
                disisipkan pada sub-pohon kanan. Jika nilai kunci baru sama dengan nilai kunci pada node saat ini,
                elemen baru akan menggantikan nilai kunci node tersebut.</p><br/>
            <p><b>Delete</b> : Menghapus sebuah elemen dari BST. Prosesnya dimulai dengan mencari elemen yang akan
                dihapus. Jika
                elemen ditemukan, terdapat beberapa kasus yang harus dipertimbangkan, seperti apakah elemen yang dihapus
                adalah leaf node, apakah memiliki satu anak, atau apakah memiliki dua anak. Setelah itu, elemen yang
                dihapus akan digantikan dengan elemen yang tepat untuk menjaga properti BST.</p><br/>
            <p><b>Search</b> : Mencari elemen pada BST. Prosesnya dimulai dengan membandingkan nilai kunci dari elemen
                yang
                dicari dengan nilai kunci pada node saat ini. Jika nilai kunci lebih kecil, pencarian dilanjutkan pada
                sub-pohon kiri. Jika nilai kunci lebih besar, pencarian dilanjutkan pada sub-pohon kanan. Jika nilai
                kunci sama dengan nilai kunci pada node saat ini, elemen ditemukan.</p><br/>
            <p><b>Traversal</b> : Melintasi seluruh node pada BST secara berurutan. Terdapat tiga jenis traversal pada
                BST,
                yaitu inorder, preorder, dan postorder. Inorder traversal mengunjungi node-node pada sub-pohon kiri,
                kemudian mengunjungi node saat ini, dan terakhir mengunjungi node-node pada sub-pohon kanan. Preorder
                traversal mengunjungi node saat ini, kemudian mengunjungi node-node pada sub-pohon kiri, dan terakhir
                mengunjungi node-node pada sub-pohon kanan. Postorder traversal mengunjungi node-node pada sub-pohon
                kiri, kemudian mengunjungi node-node pada sub-pohon kanan, dan terakhir mengunjungi node saat ini.</p>
            <br/>
            <a href={"https://www.geeksforgeeks.org/binary-search-tree-data-structure/"}>https://www.geeksforgeeks.org/binary-search-tree-data-structure/</a><br/>
            <a href={"chat.openai.com"}>chat.openai.com</a><br/>
            <a href={"https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf"}>https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf</a><br/>
            <a href={"https://www.programiz.com/dsa/binary-search-tree"}>https://www.programiz.com/dsa/binary-search-tree</a><br/>
            <a href={"https://www.javatpoint.com/binary-search-tree"}>https://www.javatpoint.com/binary-search-tree</a><br/>
            <a href={"https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm"}>https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm</a><br/><br/><br/>

        </>
    )
}