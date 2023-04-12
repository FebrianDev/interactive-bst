export default function () {
    return (<>
            <p>Here are 14 binary tree problems in increasing order of difficulty. Some
                of the problems operate on binary search trees (aka "ordered binary trees")
                while others work on plain binary trees with no special ordering. The next
                section, <a href="#csoln">Section 3,</a> shows the solution code in C/C++.
                <a href="#java">Section
                    4</a> gives the background and solution code in Java. The basic structure
                and recursion of the solution code is the same in both languages -- the
                differences are superficial.</p><br/>
            <p>Reading about a data structure is a fine introduction, but at some point
                the only way to learn is to actually try to solve some problems starting
                with a blank sheet of paper. To get the most out of these problems, you
                should at least attempt to solve them before looking at the solution. Even
                if your solution is not quite right, you will be building up the right
                skills. With any pointer-based code, it's a good idea to make memory drawings
                of a a few simple cases to see how the algorithm should work.</p><br/>
            <h3 className={"font-bold"}>
                1. build123()</h3>
            <p>This is a very basic problem with a little pointer manipulation. (You can
                skip this problem if you are already comfortable with pointers.) Write
                code that builds the following little 1-2-3 binary search tree...</p>
            <p><tt>&nbsp;&nbsp;&nbsp; 2</tt>
                <br/><tt>&nbsp;&nbsp; / \</tt>
                <br/><tt>&nbsp; 1&nbsp;&nbsp; 3</tt></p>
            <p>Write the code in three different ways...</p>
            <ul>
                <li>
                    a: by calling newNode() three times, and using three pointer variables
                </li>

                <li>
                    b: by calling newNode() three times, and using only one pointer variable
                </li>

                <li>
                    c: by calling insert() three times passing it the root pointer to build
                    up the tree
                </li>
            </ul>
            (In Java, write a build123() method that operates on the receiver to change
            it to be the 1-2-3 tree with the given coding constraints. See <a href="#java">Section
            4</a>.)
            <p>struct node* build123() {}</p>
            <br/>
            <h3 className={"font-bold"}>
                2. size()</h3>
            <p>This problem demonstrates simple binary tree traversal. Given a binary
                tree, count the number of nodes in the tree.</p><br/>
            <p>int size(struct node* node) {}</p>
            <br/>
            <h3 className={"font-bold"}>
                3. maxDepth()</h3>
            <p>Given a binary tree, compute its "maxDepth" -- the number of nodes along
                the longest path from the root node down to the farthest leaf node. The
                maxDepth of the empty tree is 0, the maxDepth of the tree on the first
                page is 3.</p><br/>
            <p>int maxDepth(struct node* node) {}</p>
            <br/>
            <h3 className={"font-bold"}>
                4. minValue()</h3>
            <p>Given a non-empty binary search tree (an ordered binary tree),
                return the
                minimum data value found in that tree. Note that it is not
                necessary to
                search the entire tree. A maxValue() function is structurally
                very similar
                to this function. This can be solved with recursion or with a
                simple while
                loop.</p><br/>
            <p>int minValue(struct node* node) {}</p>
            <br/>
            <h3 className={"font-bold"}>
                5. printTree()</h3>
            <p> Given a binary search tree (aka an "ordered binary
                tree"), iterate over
                the nodes to print them out in increasing order. So the
                tree...</p>
            <tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp; 5</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp; / \</tt>
            <br/><tt>&nbsp;&nbsp; 1&nbsp;&nbsp; 3</tt>
            <p>Produces the output "1 2 3 4 5".
                This is known as an "inorder"
                traversal
                of the tree.</p>
            <p><b>Hint:</b> For each node,
                the strategy is: recur left,
                print the node
                data, recur right.</p><br/>
            <p>void printTree(struct
                node* node) {}</p><br/>
            <h3 className={"font-bold"}>
                6.
                printPostorder()</h3>
            <p>Given a binary
                tree, print out
                the nodes of the
                tree according
                to a bottom-up
                "postorder"
                traversal --
                both subtrees of
                a node are
                printed out
                completely
                before the node
                itself is
                printed, and
                each left
                subtree is
                printed before
                the right
                subtree. So the
                tree...</p>

            <tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp; 5</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp; 1&nbsp;&nbsp; 3</tt>
            <p>Produces
                the
                output
                "1
                3
                2
                5
                4".
                The
                description
                is
                complex,
                but
                the
                code
                is
                simple.
                This
                is
                the
                sort
                of&nbsp; bottom-up
                traversal
                that
                would
                be
                used,
                for
                example,
                to
                evaluate
                an
                expression
                tree
                where
                a
                node
                is
                an
                operation
                like
                '+'
                and
                its
                subtrees
                are,
                recursively,
                the
                two
                subexpressions
                for
                the
                '+'.</p><br/>
            <p>void
                printPostorder(struct
                node*
                node) {}</p><br/>
            <h3 className={"font-bold"}>
                7.
                hasPathSum()</h3>
            <p>We'll
                define
                a
                "root-to-leaf
                path"
                to
                be
                a
                sequence
                of
                nodes
                in
                a
                tree
                starting
                with
                the
                root
                node
                and
                proceeding
                downward
                to
                a
                leaf
                (a
                node
                with
                no
                children).
                We'll
                say
                that
                an
                empty
                tree
                contains
                no
                root-to-leaf
                paths.
                So
                for
                example,
                the
                following
                tree
                has
                exactly
                four
                root-to-leaf
                paths:</p>

            <tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                5</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            4&nbsp;&nbsp; 8</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;
            /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;
            13&nbsp; 4</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7&nbsp;&nbsp;&nbsp;
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</tt>
            <p>Root-to-leaf
                paths:</p>
            <br/><tt>&nbsp;&nbsp; path
            1:
            5
            4
            11
            7</tt>
            <br/><tt>&nbsp;&nbsp; path
            2:
            5
            4
            11
            2</tt>
            <br/><tt>&nbsp;&nbsp; path
            3:
            5
            8
            13</tt>
            <br/><tt>&nbsp;&nbsp; path
            4:
            5
            8
            4
            1</tt>
            <p>For
                this
                problem,
                we
                will
                be
                concerned
                with
                the
                sum
                of
                the
                values
                of
                such
                a
                path
                --
                for
                example,
                the
                sum
                of
                the
                values
                on
                the
                5-4-11-7
                path
                is
                5
                +
                4
                +
                11
                +
                7
                =
                27.</p><br/>
            <p>Given
                a
                binary
                tree
                and
                a
                sum,
                return
                true
                if
                the
                tree
                has
                a
                root-to-leaf
                path
                such
                that
                adding
                up
                all
                the
                values
                along
                the
                path
                equals
                the
                given
                sum.
                Return
                false
                if
                no
                such
                path
                can
                be
                found.
                (Thanks
                to
                Owen
                Astrachan
                for
                suggesting
                this
                problem.)</p><br/>
            <p>int
                hasPathSum(struct
                node*
                node,
                int
                sum) {}</p><br/>
            <h3 className={"font-bold"}>
                8.
                printPaths()</h3>
            <p>Given
                a
                binary
                tree,
                print
                out
                all
                of
                its
                root-to-leaf
                paths
                as
                defined
                above.
                This
                problem
                is
                a
                little
                harder
                than
                it
                looks,
                since
                the
                "path
                so
                far"
                needs
                to
                be
                communicated
                between
                the
                recursive
                calls. <b>Hint:</b>
                In
                C,
                C++,
                and
                Java,
                probably
                the
                best
                solution
                is
                to
                create
                a
                recursive
                helper
                function
                printPathsRecur(node,
                int
                path[],
                int
                pathLen),
                where
                the
                path
                array
                communicates
                the
                sequence
                of
                nodes
                that
                led
                up
                to
                the
                current
                call.
                Alternately,
                the
                problem
                may
                be
                solved
                bottom-up,
                with
                each
                node
                returning
                its
                list
                of
                paths.
                This
                strategy
                works
                quite
                nicely
                in
                Lisp,
                since
                it
                can
                exploit
                the
                built
                in
                list
                and
                mapping
                primitives.
                (Thanks
                to
                Matthias
                Felleisen
                for
                suggesting
                this
                problem.)</p>
            <p>Given
                a
                binary
                tree,
                print
                out
                all
                of
                its
                root-to-leaf
                paths,
                one
                per
                line.</p><br/>
            <p>void
                printPaths(struct
                node*
                node) {}</p><br/>
            <h3 className={"font-bold"}>
                9.
                mirror()</h3>
            <p>Change
            a
            tree
            so
            that
            the
            roles
            of
            the
            left
            and
            right
            pointers
            are
            swapped
            at
            every
            node.
            So
            the
                tree...</p>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp; 5</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp; 1&nbsp;&nbsp; 3</tt>
            <p>&nbsp;is
                changed
                to...</p>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp; 2</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3&nbsp;&nbsp; 1</tt>
            <p>The
                solution
                is
                short,
                but
                very
                recursive.
                As
                it
                happens,
                this
                can
                be
                accomplished
                without
                changing
                the
                root
                node
                pointer,
                so
                the
                return-the-new-root
                construct
                is
                not
                necessary.
                Alternately,
                if
                you
                do
                not
                want
                to
                change
                the
                tree
                nodes,
                you
                may
                construct
                and
                return
                a
                new
                mirror
                tree
                based
                on
                the
                original
                tree.</p><br/>
            <p>void
                mirror(struct
                node*
                node) {}</p><br/>
            <h3 className={"font-bold"}>
                10.
                doubleTree()</h3>
            <p>For
            each
            node
            in
            a
            binary
            search
            tree,
            create
            a
            new
            duplicate
            node,
            and
            insert
            the
            duplicate
            as
            the
            left
            child
            of
            the
            original
            node.
            The
            resulting
            tree
            should
            still
            be
            a
            binary
            search
                tree.</p>
            <p>&nbsp;So
                the
                tree...</p>
            <br/><tt>&nbsp;&nbsp;&nbsp; 2</tt>
            <br/><tt>&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp; 1&nbsp;&nbsp; 3</tt>
            <p>&nbsp;is
                changed
                to...</p>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp; 3</tt>
            <br/><tt>&nbsp;&nbsp;&nbsp; /&nbsp;&nbsp; /</tt>
            <br/><tt>&nbsp;&nbsp; 1&nbsp;&nbsp; 3</tt>
            <br/><tt>&nbsp; /</tt>
            <br/><tt>&nbsp;1</tt>
            <p>As
                with
                the
                previous
                problem,
                this
                can
                be
                accomplished
                without
                changing
                the
                root
                node
                pointer.</p><br/>
            <p>void
                doubleTree(struct
                node*
                node) {}</p><br/>
            <h3 className={"font-bold"}>
                11.
                sameTree()</h3>
            <p>Given
            two
            binary
            trees,
            return
            true
            if
            they
            are
            structurally
            identical
            --
            they
            are
            made
            of
            nodes
            with
            the
            same
            values
            arranged
            in
            the
            same
            way.
            (Thanks
            to
            Julie
            Zelenski
            for
            suggesting
            this
                problem.)</p><br/>
            <p>int
                sameTree(struct
                node*
                a,
                struct
                node*
                b) {}</p><br/>
            <h3 className={"font-bold"}>
                12.
                countTrees()</h3>
            <p>This
            is
            not
            a
            binary
            tree
            programming
            problem
            in
            the
            ordinary
            sense
            --
            it's
            more
            of
            a
            math/combinatorics
            recursion
            problem
            that
            happens
            to
            use
            binary
            trees.
            (Thanks
            to
            Jerry
            Cain
            for
            suggesting
            this
                problem.)</p>
            <p>Suppose
                you
                are
                building
                an
                N
                node
                binary
                search
                tree
                with
                the
                values
                1..N.
                How
                many
                structurally
                different&nbsp; binary
                search
                trees
                are
                there
                that
                store
                those
                values?
                Write
                a
                recursive
                function
                that,
                given
                the
                number
                of
                distinct
                values,
                computes
                the
                number
                of
                structurally
                unique
                binary
                search
                trees
                that
                store
                those
                values.
                For
                example,
                countTrees(4)
                should
                return
                14,
                since
                there
                are
                14&nbsp; structurally
                unique
                binary
                search
                trees
                that
                store
                1,
                2,
                3,
                and
                4.
                The
                base
                case
                is
                easy,
                and
                the
                recursion
                is
                short
                but
                dense.
                Your
                code
                should
                not
                construct
                any
                actual
                trees;
                it's
                just
                a
                counting
                problem.</p><br/>
            <p>int
                countTrees(int
                numKeys) {}</p><br/>

            <h3 className={"font-bold"}>
                Binary
                Search
                Tree
                Checking
                (for
                problems
                13
                and
                14)</h3>
            <p>This
            background
            is
            used
            by
            the
            next
            two
            problems:
            Given
            a
            plain
            binary
            tree,
            examine
            the
            tree
            to
            determine
            if
            it
            meets
            the
            requirement
            to
            be
            a
            binary
            search
            tree.
            To
            be
            a
            binary
            search
            tree,
            for
            every
            node,
            all
            of
            the
            nodes
            in
            its
            left
            tree
            must
            be &lt;=
            the
            node,
            and
            all
            of
            the
            nodes
            in
            its
            right
            subtree
            must
            be
            >
            the
            node.
            Consider
            the
            following
            four
                examples...</p>

            <tt>a.&nbsp; 5&nbsp;&nbsp; ->
                TRUE</tt>
            <br/><tt>&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp; 2&nbsp;&nbsp; 7</tt>
            <br/>&nbsp;
            <p>
                <tt>b.&nbsp; 5&nbsp;&nbsp; ->
                    FALSE,
                    because
                    the
                    6
                    is
                    not
                    ok
                    to
                    the
                    left
                    of
                    the
                    5</tt></p>
            <br/><tt>&nbsp;&nbsp; /
            \</tt>
            <br/><tt>&nbsp; 6&nbsp;&nbsp; 7</tt>
            <br/>&nbsp;
            <p>
                <tt>c.&nbsp;&nbsp; 5&nbsp; ->
                    TRUE</tt>
                <br/><tt>&nbsp;&nbsp;&nbsp; /
                \</tt>
                <br/><tt>&nbsp;&nbsp; 2&nbsp;&nbsp; 7</tt>
                <br/><tt>&nbsp; /</tt>
                <br/><tt>&nbsp;1</tt>
                <p>
                    <tt>d.&nbsp;&nbsp; 5&nbsp; ->
                        FALSE,
                        the
                        6
                        is
                        ok
                        with
                        the
                        2,
                        but
                        the
                        6
                        is
                        not
                        ok
                        with
                        the
                        5</tt></p>
                <br/><tt>&nbsp;&nbsp;&nbsp; /
                \</tt>
                <br/><tt>&nbsp;&nbsp; 2&nbsp;&nbsp; 7</tt>
                <br/><tt>&nbsp; /
                \</tt>
                <br/><tt>&nbsp;1&nbsp;&nbsp; 6</tt>
                <p>For
                    the
                    first
                    two
                    cases,
                    the
                    right
                    answer
                    can
                    be
                    seen
                    just
                    by
                    comparing
                    each
                    node
                    to
                    the
                    two
                    nodes
                    immediately
                    below
                    it.
                    However,
                    the
                    fourth
                    case
                    shows
                    how
                    checking
                    the
                    BST
                    quality
                    may
                    depend
                    on
                    nodes
                    which
                    are
                    several
                    layers
                    apart
                    --
                    the
                    5
                    and
                    the
                    6
                    in
                    that
                    case.</p>
                <br/>&nbsp;
                <h3 className={"font-bold"}>
                    13
                    isBST()
                    --
                    version
                    1</h3>
                <p>
                    Suppose
                    you
                    have
                    helper
                    functions
                    minValue()
                    and
                    maxValue()
                    that
                    return
                    the
                    min
                    or
                    max
                    int
                    value
                    from
                    a
                    non-empty
                    tree
                    (see
                    problem
                    3
                    above).
                    Write
                    an
                    isBST()
                    function
                    that
                    returns
                    true
                    if
                    a
                    tree
                    is
                    a
                    binary
                    search
                    tree
                    and
                    false
                    otherwise.
                    Use
                    the
                    helper
                    functions,
                    and
                    don't
                    forget
                    to
                    check
                    every
                    node
                    in
                    the
                    tree.
                    It's
                    ok
                    if
                    your
                    solution
                    is
                    not
                    very
                    efficient.
                    (Thanks
                    to
                    Owen
                    Astrachan
                    for
                    the
                    idea
                    of
                    having
                    this
                    problem,
                    and
                    comparing
                    it
                    to
                    problem
                    14)</p>
                <p>Returns
                    true
                    if
                    a
                    binary
                    tree
                    is
                    a
                    binary
                    search
                    tree.</p><br/>
                <p>int
                    isBST(struct
                    node*
                    node) {}</p>
                <br/>
                <h3 className={"font-bold"}>
                    14.
                    isBST()
                    --
                    version
                    2</h3>
                Version
                1
                above
                runs
                slowly
                since
                it
                traverses
                over
                some
                parts
                of
                the
                tree
                many
                times.
                A
                better
                solution
                looks
                at
                each
                node
                only
                once.
                The
                trick
                is
                to
                write
                a
                utility
                helper
                function
                isBSTRecur(struct
                node*
                node,
                int
                min,
                int
                max)
                that
                traverses
                down
                the
                tree
                keeping
                track
                of
                the
                narrowing
                min
                and
                max
                allowed
                values
                as
                it
                goes,
                looking
                at
                each
                node
                only
                once.
                The
                initial
                values
                for
                min
                and
                max
                should
                be
                INT_MIN
                and
                INT_MAX
                --
                they
                narrow
                from
                there.
                <p>/*
                    <br/>&nbsp;Returns
                    true
                    if
                    the
                    given
                    tree
                    is
                    a
                    binary
                    search
                    tree
                    <br/>&nbsp;(efficient
                    version).
                    <br/>*/
                    <br/>int
                    isBST2(struct
                    node*
                    node) {}</p>
                <br/> return(isBSTRecur(node,
                INT_MIN,
                INT_MAX));
                <br/>}
                <p>/*
                    <br/>&nbsp;Returns
                    true
                    if
                    the
                    given
                    tree
                    is
                    a
                    BST
                    and
                    its
                    <br/>&nbsp;values
                    are
                    >=
                    min
                    and &lt;=
                    max.</p>
                <br/>*/
                <br/>int
                isBSTRecur(struct
                node*
                node,
                int
                min,
                int
                max) {}</p>
            <br/>
            <h3 className={"font-bold"}>
                15.
                Tree-List</h3>
            The
            Tree-List
            problem
            is
            one
            of
            the
            greatest
            recursive
            pointer
            problems
            ever
            devised,
            and
            it
            happens
            to
            use
            binary
            trees
            as
            well.
            CLibarary
            #109
            <a href="http://cslibrary.stanford.edu/109/">http://cslibrary.stanford.edu/109/</a>&nbsp;
            works
            through
            the
            Tree-List
            problem
            in
            detail
            and
            includes
            solution
            code
            in
            C
            and
            Java.
            The
            problem
            requires
            an
            understanding
            of
            binary
            trees,
            linked
            lists,
            recursion,
            and
            pointers.
            It's
            a
            great
            problem,
            but
            it's
            complex.
            <br/>
            <br/>
        </>)
}