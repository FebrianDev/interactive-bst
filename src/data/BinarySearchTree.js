import Node from "./Node"
import Log from "./Log";

export default class BinarySearchTree {

    constructor() {
        this.root = null;
        this.newLog = new Log()
    }

    getLog() {
        var ths = this
        return ths.newLog.getLog()
    }

    getLogList() {
        var ths = this
        return ths.newLog.getLogList()
    }

    add(data) {
        var ths = this
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            ths.newLog.logInsert(data)
            return;
        } else {
            function searchTree(nodes) {
                // debugger;
                if (data < nodes.data) {
                    if (nodes.left === null) {
                        nodes.left = new Node(data);
                        ths.newLog.logInsert(data)
                        return;
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.left);
                    }
                } else if (data > nodes.data) {
                    if (nodes.right === null) {
                        nodes.right = new Node(data);
                        ths.newLog.logInsert(data)
                        return;
                    } else if (nodes.data !== null) {
                        return searchTree(nodes.right);
                    }
                } else {
                    return null;
                }
            }

            searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        if (current === null) {
            return null;
        }
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMax() {
        let current = this.root;
        if (current === null) {
            return null;
        }
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    // search for a node with given data
    search(node, data) {
        var ths = this
        // if trees is empty return null
        if (node === null)
            return null;

            // if data is less than node's data
        // move left
        else if (data < node.data)
            return this.search(node.left, data);

            // if data is less than node's data
        // move left
        else if (data > node.data)
            return this.search(node.right, data);

            // if data is equal to the node data
        // return node
        else
            return node.data;
    }

    getRootNode() {
        return this.root;
    }

    remove(data) {
        var ths = this

        function removeData(nodes, datas) {
            if (nodes === null) {
                return null;
            } else if (datas < nodes.data) {
                nodes.left = removeData(nodes.left, datas);
                return nodes;
            } else if (datas > nodes.data) {
                nodes.right = removeData(nodes.right, datas);
                return nodes;
            } else {
                ths.newLog.logDelete(datas)
                if (nodes.left === null && nodes.right === null) {
                    nodes = null;
                    return nodes;
                } else if (nodes.left === null) {
                    nodes = nodes.right;
                    return nodes;
                } else if (nodes.right === null) {
                    nodes = nodes.left;
                    return nodes;
                }
                const min = this.findMinNode(nodes.right);
                nodes.data = min.data;
                nodes.right = removeData(nodes.right, min.data);
                return nodes;
            }
        }

        this.root = removeData(this.root, data);
    }

    print() {
        return this.root;
    }

    // Performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Performs preorder traversal of a tree
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Performs postorder traversal of a tree
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}