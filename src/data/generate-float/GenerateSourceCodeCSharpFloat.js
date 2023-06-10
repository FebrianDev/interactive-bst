export default function (listLog) {
    listLog.map((d) => console.log("List1" + d))
    if (listLog === null) return

    return `
    using System;\n
      class Node
{
    public Node LeftNode { get; set; }
    public Node RightNode { get; set; }
    public double Data { get; set; }
}

class BinarySearchTree
{
    public Node Root { get; set; }

    /*Insert Start*/
    public void insert(double value)
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
    public Node search(double value)
    {
        return this.Search(value, this.Root);
    }
    
    private Node Search(double value, Node parent)
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
    public void delete(double value)
    {
        this.Root = Remove(this.Root, value);
    }

    private Node Remove(Node parent, double key)
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

    private double MinValue(Node node)
    {
        double minv = node.Data;

        while (node.LeftNode != null)
        {
            minv = node.LeftNode.Data;
            node = node.LeftNode;
        }

        return minv;
    }
    
    /*Delete End*/

    /*Preorder Start*/
    public void preorder(Node parent)
    {
        if (parent != null)
        {
            Console.Write(parent.Data + " ");
            preorder(parent.LeftNode);
            preorder(parent.RightNode);
        }
    }
    /*Preorder End*/

    /*Inorder Start*/
    public void inorder(Node parent)
    {
        if (parent != null)
        {
            inorder(parent.LeftNode);
            Console.Write(parent.Data + " ");
            inorder(parent.RightNode);
        }
    }
    /*Inorder End*/

    /*Postorder Start*/
    public void postorder(Node parent)
    {
        if (parent != null)
        {
            postorder(parent.LeftNode);
            postorder(parent.RightNode);
            Console.Write(parent.Data + " ");
        }
    }
    /*Postorder End*/ 
}
`+`
public class Program
{
    public static void Main()
    {
        BinarySearchTree bst = new BinarySearchTree();
       
        ${listLog.map(d => {
        const newData = d.toString().replace(/,/g, "")
        if (newData === "preorder()") return ("bst.preorder(bst.Root)" + ";") + "\n\t"

        else if (newData === "postorder()") return ("bst.postorder(bst.Root)" + ";") + "\n\t"
        else if (newData === "inorder()") return ("bst.inorder(bst.Root)" + ";") + "\n\t"
        else return ("bst." + newData + ";").toString() + "\n\t"
    })

    }
    }
}
    `.replaceAll(/,/g, "")
}
