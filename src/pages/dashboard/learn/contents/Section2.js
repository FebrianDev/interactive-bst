import picture1 from "../../../../assets/materi/Picture1.png"
import picture2 from "../../../../assets/materi/Picture2.png"
import picture3 from "../../../../assets/materi/Picture3.png"
import picture4 from "../../../../assets/materi/Picture4.png"
import picture5 from "../../../../assets/materi/Picture5.png"
import picture6 from "../../../../assets/materi/Picture6.png"

export default function () {
    return (<>
        <h4 className={"font-bold text-lg"}>Contoh Implementasi Binary Search Tree</h4><br/>
        <p>Jika diketahui sederetan data 5, 3, 7, 1, 4 maka implementasi data tersebut ke dalam struktur data BST adalah
            sebagai berikut:</p><br/>
        <p className={"font-bold"}>Implementasi Insert</p>
        <p>Insert data 5 sebagai root</p>
        <img src={picture1}/>
        <p>Insert data 3, bandingkan 3 dengan 5, karena 3 lebih kecil daripada 5, maka pergi ke simpul sebelah kiri,
            karena simpul
            disebelah kiri sama dengan null, maka insert data 3 ke dalam simpul sebelah kiri yang bernilai null
            tersebut.
        </p>
        <img src={picture2}/>
        <p>Insert data 7, bandingkan 7 dengan 5, karena 7 > 5, maka pergi ke simpul sebelah kanan, karena simpul
            disebelah kanan sama dengan null, maka insert data 7 ke dalam simpul sebelah kanan yang bernilai null
            tersebut.Insert data 7, bandingkan 7 dengan 5, karena 7 > 5, maka pergi ke simpul sebelah kanan, karena
            simpul disebelah kanan sama dengan null, maka insert data 7 ke dalam simpul sebelah kanan yang bernilai null
            tersebut.</p>
        <img src={picture3}/>
        <p>Insert data 1, bandingkan 1 dengan 5, karena 1 lebih kecil daripada 5 maka pergi ke simpul sebelah kiri.
            Kemudian bandingkan 1
            dengan 3, karena 1 lebih kecil daripada 3 maka pergi ke simpul sebelah kiri, karena simpul disebelah kiri
            sama dengan null,
            maka insert data 1 ke dalam simpul sebelah kiri yang bernilai null tersebut.
        </p>
        <img src={picture4}/>
        <p>Insert data 4, bandingkan 4 dengan 5, karena 4 lebih kecil daripada 5 maka pergi ke sebelah kiri. Kemudian
            bandingkan 4 dengan
            3, karena 4 > 3 maka pergi ke simpul sebelah kanan, karena simpul disebelah kanan sama dengan null, maka
            insert data 4 ke dalam simpul sebelah kanan yang bernilai null tersebut.
        </p>
        <img src={picture5}/><br/>
        <p className={"font-bold"}>Implementasi Delete</p>
        <p>Delete data 4, bandingkan 4 dengan 5, karena 4 lebih kecil daripada 5 maka pergi ke sebelah kiri simpul 5.
            Kemudian bandingkan 4
            dengan 3, karena 4 > 3 maka pergi ke simpul sebelah kanan. Karena data 4 berhasil ditemukan, maka hapus
            simpul yang bernilai 4 tersebut.
        </p>
        <img src={picture6}/>
        <p className={"font-bold"}>Implementasi Search</p>
        <p>
            Search data 1, bandingkan 1 dengan 5, karena 1 lebih kecil daripada 5 maka pergi ke simpul sebelah kiri.
            Kemudian bandingkan 1 dengan 3, karena 1 lebih kecil daripada 3 maka pergi ke simpul sebelah kiri. Karena
            data yang dicari ada
            pada simpul, maka tampilkan pesan kalau data berhasil ditemukan.
        </p><br/>
        <p className={"font-bold"}>Implementasi Preorder</p>
        <p>
            Dapatkan data 5 karena sebagai root, kemudian kunjungi simpul sebelah kiri dan dapatkan data 3, kemudian
            kunjungi simpul sebelah kiri lagi dan dapatkan data 1. Karena data simpul 1 sudah tidak memiliki child dan
            data simpul 3 tidak memiliki child sebelah kanan, maka balik ke data simpul 5, kemudian kunjungi simpul
            sebelah kanan dan dapatkan data 7. Sehingga hasil operasi preorder adalah 5 3 1 7.
        </p><br/>
        <p className={"font-bold"}>Implementasi Postorder</p>
        <p>
            Kunjungi simpul sebelah kiri dari data simpul 5, kunjungi lagi simpul sebelah kiri dari data simpul 3,
            karena disebelah kiri simpul 1 sudah tidak ada atau bernilai null, maka dapatkan data simpul 1, kemudian
            kembali ke simpul 3 dan dapatkan data 3. Kemudian kembali ke root yaitu simpul 5 dan kunjungi simpul sebelah
            kanan dan dapatkan data simpul 7, kembali lagi ke simpul 5 dan dapatkan data simpul 5. Sehingga hasil
            operasi postorder adalah 1 3 5 5.</p><br/>
        <p className={"font-bold"}>Implementasi Inorder</p>
        <p>
            Kunjungi simpul sebelah kiri dari data simpul 5, kunjungi lagi simpul sebelah kiri dari data simpul 3,
            karena disebelah kiri simpul 1 sudah tidak ada atau bernilai null, maka dapatkan data simpul 1, kemudian
            kembali ke simpul 3 dan dapatkan data 3. Kemudian kembali ke root yaitu simpul 5 dan dapatkan data simpul 5.
            Kemudian kunjungi simpul sebelah kanan dan dapatkan data simpul 7. Sehingga hasil operasi inorder adalah 1
            3 5 7.
        </p><br/><br/>
        <a href={"https://www.geeksforgeeks.org/binary-search-tree-data-structure/"}>https://www.geeksforgeeks.org/binary-search-tree-data-structure/</a><br/>
        <a href={"chat.openai.com"}>chat.openai.com</a><br/>
        <a href={"https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf"}>https://informatika.unsyiah.ac.id/irvanizam/teaching/SD/bst.pdf</a><br/>
        <a href={"https://www.programiz.com/dsa/binary-search-tree"}>https://www.programiz.com/dsa/binary-search-tree</a><br/>
        <a href={"https://www.javatpoint.com/binary-search-tree"}>https://www.javatpoint.com/binary-search-tree</a><br/>
        <a href={"https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm"}>https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm</a><br/><br/><br/>

    </>)
}