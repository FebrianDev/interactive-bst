export default function (listLog) {

    if(listLog === null) return

    return `
      class Node
{
    public Node LeftNode { get; set; }
    public Node RightNode { get; set; }
    public int Data { get; set; }
}

class BinarySearchTree
{
    public Node Root { get; set; }

    /*Insert Start*/
    public void insert(int value)
    {
        Node before = null, after = this.Root;

        while (after != null)
        {
            before = after;
            if (value < after.Data) //Is new node in left tree? 
                after = after.LeftNode;
            else if (value > after.Data) //Is new node in right tree?
                after = after.RightNode;
        }

        Node newNode = new Node();
        newNode.Data = value;

        if (this.Root == null) //Tree ise empty
            this.Root = newNode;
        else
        {
            if (value < before.Data)
                before.LeftNode = newNode;
            else
                before.RightNode = newNode;
        }
    }
    /*Insert End*/

    /*Search Start*/
    public Node search(int value)
    {
        return this.Search(value, this.Root);
    }
    
    private Node Search(int value, Node parent)
    {
        if (parent != null)
        {
            if (value == parent.Data) return parent;
            if (value < parent.Data)
                return Search(value, parent.LeftNode);
            else
                return Search(value, parent.RightNode);
        }

        return null;
    }
    /*Search End*/

    /*Delete Start*/
    public void delete(int value)
    {
        this.Root = Remove(this.Root, value);
    }

    private Node Remove(Node parent, int key)
    {
        if (parent == null) return parent;

        if (key < parent.Data) parent.LeftNode = Remove(parent.LeftNode, key);
        else if (key > parent.Data)
            parent.RightNode = Remove(parent.RightNode, key);

        // if value is same as parent's value, then this is the node to be deleted  
        else
        {
            // node with only one child or no child  
            if (parent.LeftNode == null)
                return parent.RightNode;
            else if (parent.RightNode == null)
                return parent.LeftNode;

            // node with two children: Get the inorder successor (smallest in the right subtree)  
            parent.Data = MinValue(parent.RightNode);

            // Delete the inorder successor  
            parent.RightNode = Remove(parent.RightNode, parent.Data);
        }

        return parent;
    }

    private int MinValue(Node node)
    {
        int minv = node.Data;

        while (node.LeftNode != null)
        {
            minv = node.LeftNode.Data;
            node = node.LeftNode;
        }

        return minv;
    }
    
    /*Delete End*/

    /*Preorder Start*/
    public void preOrder(Node parent)
    {
        if (parent != null)
        {
            Console.Write(parent.Data + " ");
            preOrder(parent.LeftNode);
            preOrder(parent.RightNode);
        }
    }
    /*Preorder End*/

    /*Inorder Start*/
    public void inOrder(Node parent)
    {
        if (parent != null)
        {
            inOrder(parent.LeftNode);
            Console.Write(parent.Data + " ");
            inOrder(parent.RightNode);
        }
    }
    /*Inorder End*/

    /*Postorder Start*/
    public void postOrder(Node parent)
    {
        if (parent != null)
        {
            postOrder(parent.LeftNode);
            postOrder(parent.RightNode);
            Console.Write(parent.Data + " ");
        }
    }
    /*Postorder End*/
}

public class Program
{
    public static void Main()
    {
        BinarySearchTree bst = new BinarySearchTree();
        ${listLog.map(d => "bst." + d.toString() + ";\n\t").toString().replace(/,/g, "")}
    }
}
    `
}