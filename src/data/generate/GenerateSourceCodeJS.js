export default function generateJS(listLog) {
    if (listLog === null || listLog === undefined) return

    return `
    class Node {
        constructor(data) {
            this.data = data
            this.left = null
            this.right = null
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null
        }
    
        /*Insert Data Start*/
        insert(data) {
            const node = this.root
            if (node === null) {
                this.root = new Node(data)
                return
            } else {
                function searchTree(nodes) {
                    if (data < nodes.data) {
                        if (nodes.left === null) {
                            nodes.left = new Node(data)
                            return
                        } else if (nodes.data !== null) {
                            return searchTree(nodes.left)
                        }
                    } else if (data > nodes.data) {
                        if (nodes.right === null) {
                            nodes.right = new Node(data)
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
    
        /*Insert Data End*/
    
        /*Search Data Start*/
        search(data) {
            this.searchData(this.root, data)
        }
    
        searchData(node, data) {
            if (node === null) {
                return null
            } else if (data < node.data) {
                return this.search(node.left, data)
            } else if (data > node.data) {
                return this.search(node.right, data)
            } else {
                return node.data
            }
        }
    
        /*Search Data End*/
    
        /*Delete Data Start*/
        remove(data) {
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
    
        /*Delete Data End*/
    
        /*Inorder Start*/
        inorder() {
            this.inorder_recursive(this.root)
        }
    
        inorder_recursive(node) {
            if (node !== null) {
                this.inorder_recursive(node.left)
                console.log(node.data)
                this.inorder_recursive(node.right)
            }
        }
    
        /*Inorder End*/
    
        /*Preorder Start*/
        preorder() {
            this.preorder_recursive(this.root)
        }
    
        preorder_recursive(node) {
            if (node !== null) {
                console.log(node.data)
                this.preorder_recursive(node.left)
                this.preorder_recursive(node.right)
            }
        }
    
        /*Preorder End*/
    
        /*Postorder Start*/
        postorder() {
            this.postorder_recursive(this.root)
        }
    
        postorder_recursive(node) {
            if (node !== null) {
                this.postorder_recursive(node.left)
                this.postorder_recursive(node.right)
                console.log(node.data)
            }
        }
    
        /*Postorder End*/
    }
    
    const bst = new BinarySearchTree()
    ${listLog.map(d => "bst." + d.toString() + "\n\t").toString().replace(/,/g, "")}
    `
}
