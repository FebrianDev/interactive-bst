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
    }

    getLogList() {
        var ths = this
        return ths.newLog.getLogList()
    }

    getLog(){
        var ths = this
        return ths.newLog.logs
    }

    insert(data) {
        var ths = this
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            ths.newLog.logInsert(data)
            return
        } else {
            function searchTree(nodes) {
                // debugger;
                if (data < nodes.data) {
                    if (nodes.left === null) {
                        nodes.left = new Node(data)
                        ths.newLog.logInsert(data)
                        return
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left)
                    }
                } else if (data > nodes.data) {
                    if (nodes.right === null) {
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
        // if trees is empty return null
        if (node === null)
            return null

            // if data is less than node's data
        // move left
        else if (data < node.data) {
            return this.search(node.left, data)
        }
            // if data is less than node's data
        // move left
        else if (data > node.data) {
            return this.search(node.right, data)
        }
            // if data is equal to the node data
        // return node
        else {
            this.newLog.logSearch(node.data)
            return node.data
        }
    }

    getRootNode() {
        return this.root
    }

    delete(data) {
        this.root = this.removeData(this.root, data)
    }

    removeData(nodes, data) {
        if (nodes === null) {
            return null
        } else if (data < nodes.data) {
            nodes.left = this.removeData(nodes.left, data)
            return nodes
        } else if (data > nodes.data) {
            nodes.right = this.removeData(nodes.right, data)
            return nodes
        } else {
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
    inorder(){
        this.inorder_recursive(this.root)
    }

    inorder_recursive(node) {
        if (node !== null) {
            this.inorder_recursive(node.left)
            console.log(node.data)
            this.listInOrder.push(node.data)
            this.inorder_recursive(node.right)
        }
    }

    // Performs preorder traversal of a tree
    preorder(){
        this.preorder_recursive(this.root)
    }

    preorder_recursive(node) {
        if (node !== null) {
            console.log(node.data)
            this.listPreOrder.push(node.data)
            this.preorder_recursive(node.left)
            this.preorder_recursive(node.right)
        }
    }

    // Performs postorder traversal of a tree
    postorder(){
        this.postorder_recursive(this.root)
    }

    postorder_recursive(node) {
        if (node !== null) {
            this.postorder_recursive(node.left)
            this.postorder_recursive(node.right)
            console.log(node.data)
            this.listPostOrder.push(node.data)
        }
    }

    clearList() {
        this.listPreOrder = ['Preorder ']
        this.listPostOrder = ['Postorder ']
        this.listInOrder = ['Inorder ']
    }
}