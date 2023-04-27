import Node from "./Node"
import Log from "./Log"

export default class BinarySearchTree {

    constructor() {
        this.root = null
        this.newLog = new Log()
        this.log = ""
        this.listPreOrder = []
        this.listPostOrder = []
        this.listInOrder = []
        this.explain = []
        this.deleteFail = null
    }

    getLogList() {
        var ths = this
        return ths.newLog.getLogList()
    }

    getLog() {
        var ths = this
        return ths.newLog.logs
    }

    clearExplain() {
        var ths = this
        ths.explain = []
    }

    getExplain() {
        var ths = this
        return ths.explain
    }

    insert(data) {
        var ths = this
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            ths.newLog.logInsert(data)
            ths.explain.push(`- ${data} sebagai root`)
            return
        } else {
            function searchTree(nodes) {
                ths.explain.push(`- Bandingkan ${data} dengan ${nodes.data}`)
                if (data < nodes.data) {
                    ths.explain.push(`- Karena ${data} lebih kecil daripada ${nodes.data}, maka pergi ke simpul sebelah kiri`)
                    if (nodes.left === null) {
                        ths.explain.push(`- Lokasi ditemukan! Tambahkan ${data} ke dalam simpul`)
                        nodes.left = new Node(data)
                        ths.newLog.logInsert(data)
                        return
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left)
                    }
                } else if (data > nodes.data || data === nodes.data) {
                    ths.explain.push(`- Karena ${data} lebih besar daripada ${nodes.data}, maka pergi ke simpul sebelah kanan`)
                    if (nodes.right === null) {
                        ths.explain.push(`- Lokasi ditemukan! Tambahkan ${data} ke dalam simpul`)
                        nodes.right = new Node(data)
                        ths.newLog.logInsert(data)
                        return
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.right)
                    }
                } else {
                    return null
                }
            }

            searchTree(node)
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    // search for a node with given data
    search(node, data) {
        var ths = this
        // if trees is empty return null
        if (node === null) {
            ths.explain.push(`- Data ${data} tidak ditemukan!`)
            return ""
        }

            // if data is less than node's data
        // move left
        else if (data < node.data) {
            ths.explain.push(`- Bandingkan ${data} dengan ${node.data}`)
            ths.explain.push(`- Karena ${data} lebih kecil daripada ${node.data}, maka pergi ke simpul sebelah kiri`)
            return this.search(node.left, data)
        }
            // if data is less than node's data
        // move left
        else if (data > node.data) {
            ths.explain.push(`- Bandingkan ${data} dengan ${node.data}`)
            ths.explain.push(`- Karena ${data} lebih besar daripada ${node.data}, maka pergi ke simpul sebelah kanan`)
            return this.search(node.right, data)
        }
            // if data is equal to the node data
        // return node
        else {
            ths.explain.push(`- Data ${data} berhasil ditemukan`)
            this.newLog.logSearch(node.data)
            return node.data
        }
    }

    getRootNode() {
        return this.root
    }

    delete(data) {
        this.explain.push(`- Cari data ${data}`)
        this.root = this.removeData(this.root, data)
    }

    removeData(nodes, data) {
        if (nodes === null) {
            this.explain.push(`- Data ${data} tidak dapat ditemukan!`)
            this.deleteFail = true
            return null
        }

        this.explain.push(`- Bandingkan ${data} dengan ${nodes.data}`)

        if (data < nodes.data) {
            this.explain.push(`- Karena ${data} lebih kecil daripada ${nodes.data}, maka pergi ke simpul sebelah kiri`)
            nodes.left = this.removeData(nodes.left, data)
            return nodes
        } else if (data > nodes.data) {
            this.explain.push(`- Karena ${data} lebih besar daripada ${nodes.data}, maka pergi ke simpul sebelah kanan`)
            nodes.right = this.removeData(nodes.right, data)
            return nodes
        } else {
            this.deleteFail = false
            this.explain.push(`- Lokasi ditemukan! Hapus data ${data}`)
            this.newLog.logDelete(data)
            if (nodes.left === null && nodes.right === null) {
                nodes = null
                return nodes
            } else if (nodes.left === null) {
                nodes = nodes.right
                return nodes
            } else if (nodes.right === null) {
                nodes = nodes.left
                return nodes
            }
            const min = this.findMinNode(nodes.right)
            nodes.data = min.data
            nodes.right = this.removeData(nodes.right, min.data)
            return nodes
        }
    }

    getListInOrder() {
        var ths = this
        ths.newLog.logInOrder()
        return ths.listInOrder
    }

    getListPreOrder() {
        var ths = this
        ths.newLog.logPreOrder()
        return ths.listPreOrder
    }

    getListPostOrder() {
        var ths = this
        ths.newLog.logPostOrder()
        return ths.listPostOrder
    }

    // Performs inorder traversal of a tree
    inorder() {
        this.inorder_recursive(this.root)
    }

    inorder_recursive(node) {
        if (node !== null) {
            this.explain.push(`- Jika data ${node.data} tidak null, maka kunjungi sub pohon sebelah kiri\n`)
            this.inorder_recursive(node.left)
            this.explain.push(`- Dapatkan data ${node.data}\n`)
            console.log(node.data)
            this.listInOrder.push(node.data)
            this.explain.push(`Hasil ${this.listInOrder}\n\n`)
            this.explain.push(`- Jika ${node.data} tidak null, maka kunjungi sub pohon sebelah kanan\n`)
            this.inorder_recursive(node.right)
        } else {
            this.explain.push(`- Karena simpul sama dengan null, maka berhenti melakukan kunjungan pada sub pohon tujuan\n`)
        }
    }

    // Performs preorder traversal of a tree
    preorder() {
        this.preorder_recursive(this.root)
    }

    preorder_recursive(node) {
        if (node !== null) {
            console.log(node.data)
            this.listPreOrder.push(node.data)
            this.explain.push(`- Dapatkan data ${node.data}\n`)
            this.explain.push(`Hasil ${this.listPreOrder}\n\n`)
            this.explain.push(`- Jika data ${node.data} tidak null, maka kunjungi sub pohon sebelah kiri\n`)
            this.preorder_recursive(node.left)
            this.explain.push(`- Jika ${node.data} tidak null, maka kunjungi sub pohon sebelah kanan\n`)
            this.preorder_recursive(node.right)
        } else {
            this.explain.push(`- Karena simpul sama dengan null, maka berhenti melakukan kunjungan pada sub pohon tujuan\n`)
        }
    }

    // Performs postorder traversal of a tree
    postorder() {
        this.postorder_recursive(this.root)
    }

    postorder_recursive(node) {
        if (node !== null) {
            this.explain.push(`- Jika data ${node.data} tidak null, maka kunjungi sub pohon sebelah kiri\n`)
            this.postorder_recursive(node.left)
            this.explain.push(`- Jika ${node.data} tidak null, maka kunjungi sub pohon sebelah kanan\n`)
            this.postorder_recursive(node.right)
            this.explain.push(`- Dapatkan data ${node.data}\n`)
            console.log(node.data)
            this.listPostOrder.push(node.data)
            this.explain.push(`Hasil ${this.listPostOrder}\n\n`)
        } else {
            this.explain.push(`- Karena simpul sama dengan null, maka berhenti melakukan kunjungan pada sub pohon tujuan\n`)
        }
    }

    clearList() {
        this.listPreOrder = ['Preorder ']
        this.listPostOrder = ['Postorder ']
        this.listInOrder = ['Inorder ']
    }
}