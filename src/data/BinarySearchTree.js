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
            ths.explain.push(`${data} as root`)
            return
        } else {
            function searchTree(nodes) {
                ths.explain.push(`Comparing ${data} with ${nodes.data}`)
                if (data < nodes.data) {
                    ths.explain.push(`${data} is smaller than ${nodes.data}, so go left`)
                    if (nodes.left === null) {
                        ths.explain.push(`Location found! Inserting ${data}`)
                        nodes.left = new Node(data)
                        ths.newLog.logInsert(data)
                        return
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left)
                    }
                } else if (data > nodes.data || data === nodes.data) {
                    ths.explain.push(`${data} is larger than ${nodes.data}, so go right`)
                    if (nodes.right === null) {
                        ths.explain.push(`Location found! Inserting ${data}`)
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
        if (node === null) {
            console.log("Not Found")
            this.explain.push(`Value ${data} is not found in the BST`)
            return ""
        }

        // if data is less than node's data
        // move left
        else if (data < node.data) {
            this.explain.push(`Comparing ${data} with ${node.data}`)
            this.explain.push(`${data} is less than ${node.data}, so go left`)
            return this.search(node.left, data)
        }
            // if data is less than node's data
        // move left
        else if (data > node.data) {
            this.explain.push(`Comparing ${data} with ${node.data}`)
            this.explain.push(`${data} is greater than ${node.data}, so go right`)
            return this.search(node.right, data)
        }
            // if data is equal to the node data
        // return node
        else {
            this.explain.push(`Found value ${data}`)
            this.newLog.logSearch(node.data)
            return node.data
        }
    }

    getRootNode() {
        return this.root
    }

    delete(data) {
        this.explain.push(`Search ${data}`)
        this.root = this.removeData(this.root, data)
    }

    removeData(nodes, data) {
        this.explain.push(`Comparing ${data} with ${nodes.data}`)
        if (nodes === null) {
            this.explain.push(`Can't find ${data}`)
            return null
        } else if (data < nodes.data) {
            this.explain.push(`${data} is smaller than ${nodes.data}, so go left`)
            nodes.left = this.removeData(nodes.left, data)
            return nodes
        } else if (data > nodes.data) {
            this.explain.push(`${data} is larger than ${nodes.data}, so go right`)
            nodes.right = this.removeData(nodes.right, data)
            return nodes
        } else {
            this.explain.push(`Location found! Remove ${data}`)
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
            this.inorder_recursive(node.left)
            console.log(node.data)
            this.listInOrder.push(node.data)
            this.inorder_recursive(node.right)
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
            this.preorder_recursive(node.left)
            this.preorder_recursive(node.right)
        }
    }

    // Performs postorder traversal of a tree
    postorder() {
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