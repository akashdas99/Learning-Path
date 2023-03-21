// url: "https://dev.to/api/articles/fernandoblima/linked-list-queue-and-stack-data-structure-part-i-1pen";
export const paths = [
  {
    id: 1,
    slug: "dsa",
    title: "Data Structure & Algorithm",
    description:
      "A curated learning path for your journey to become proficient in Data Structure and Algorithm",
    size: 8,
  },
];
export const chapters = [
  {
    id: 1,
    title: "Linked List, Queue and Stack",
    description: (
      <p>
        <b>What is a Linked List?</b> <br /> Before we start to discuss, we need
        to formulate a clear understanding of what a linked list is. A
        collection structure represents a sequence of nodes. But, wait! ✋ What
        does node mean? 🤔 An object that contains value and pointer with
        reference to stores the address for the next element into the sequence
        of the list. Actually, you can imagine a pointer, as a place where you
        can find and obtain the stored value in the node, is a reference to a
        location in memory. The first node in the list represent a head and has
        a pointer to the next element, and as you can imagine the last node is
        the tail because has a null pointer to the next node. You also can use a
        pointer to the previous object. As a result, a Doubly Linked List type
        is created. Another important aspect to understand linked list is
        related to the efficient memory utilization. Is not necessary to
        pre-allocate memory, as a consequence you can add as much items you want
        in the list. However, some problems can show up if is required more
        memory than you can have, because each node has a pointer and other
        memory for itself.
        <br />
        <b>Terminology</b>
        <br />
        As you can see in the image in the section above, we define two
        properties: value: Element that holds the data. next: Point to the next
        node. prev (optional): Can be used to point to the previous node. You
        can see more about in Doubly Linked List Structure. Let's begin! Now
        that we are on the same page with the concepts, let’s start the
        discussion more deeply about Linked List methods, translate the concepts
        into to our code, and finally implement our data structure. At the
        beginning, we are going to focus in the Linked List, because it is the
        most common and simplest data structure linear collection of data
        elements. Let's start to work! 😃
        <br />
        <b>Singly Linked List</b>
        <br />
        Is called as singly because a node only hold a reference to the next
        element of the sequence and you cannot access previous elements because
        it does not store any pointer or reference to the previous node.
        <br />
        Stack
        <br /> Known as LIFO (last in, first out) data structure, you can
        visualize understanding how it works making an analogy when a set of
        items is stacked on top of each other, creating a pile of books. Like I
        said before, this structure has some similarities from Linked List and
        you can use addFromTail (Push) and removeFromTail (Pop) operations in
        your stack structure. Just like a queue, the operation that return an
        item at the top of the stack is called as peek. Queue The
        First-In-First-Out (FIFO) is an example of a linear data structure where
        the first element added to the queue will be the first to be removed.
        For instance, you can visualize this behavior where you are in a queue
        in a store, bank or supermarket. 🚶‍♂️🏦🚶‍♀️🚶‍♂️🚶‍♀️🚶‍♂️ A new element is added to
        the end of the list by the enqueuer (addFromTail) function and removed
        from the top of the list using the dequeue (removeFromTail) function.
        You can see other people or find in a book referencing the queue as
        removing or poling method, for me I prefer only dequeue. Other common
        operation in this structure is the peek that return the item at the top
        of the stack as peek. However, when should I use these structure data?
        🤔 It is suggested to use Queue when the order matter, like a queueing
        system for requests.
      </p>
    ),
    videoUrl: "https://www.youtube.com/watch?v=BnZLGy3g8y4&ab_channel=SCALER",
    additionalLinks: [
      "https://www.educative.io/answers/how-to-implement-stack-and-queue-using-linked-list",
      "https://www.geeksforgeeks.org/data-structures/linked-list/",
    ],
    mcqs: [
      {
        id: 1,
        question:
          " What is the time complexity to count the number of elements in the linked list?",
        answers: ["O(1)", "O(n)", "O(logn)", "O(n^2)"],
        correct: "O(n)",
      },
      {
        id: 2,
        question:
          "Process of inserting an element in stack is called ____________.",
        answers: ["Create", "Push", "Evaluation", "Pop"],
        correct: "Push",
      },
      {
        id: 3,
        question:
          " Process of removing an element from stack is called __________",
        answers: ["Create", "Push", "Evaluation", "Pop"],
        correct: "Pop",
      },
      {
        id: 4,
        question: "A queue is a ?",
        answers: [
          "FIFO (First In First Out) list",
          "LIFO (Last In First Out) list",
          "Ordered array",
          "Linear tree",
        ],
        correct: "FIFO (First In First Out) list",
      },
    ],
  },
  {
    id: 2,
    title: "Dictionary and HashTable ",
    description: (
      <p>
        In the previous post, we had learned about linked list, queue and stack.
        Now we will continue our journey and move on to covering the Dictionary
        and HashMap data structure.
        <br />
        <b>Dictionary</b>
        <br />
        Dictionary, which some people prefer refer as map structure, is a
        collections of pairs [key, value] of distinct elements that use a key to
        find a value. A little bit confusing, right? I will try to explain in a
        different way.
        <br />
        As the name suggest this structure is like a dictionary book, where we
        can use as an example of being applied to a real-world when you search
        and found a word followed by his definition. 📚 In our case, the word is
        the key and the description is the value stored.
        <br />
        At first, you might be wondering if there is some way we can use what we
        had learned in the last post and use the linked list to create this
        structure, right? Of course! We can use but we have to adapt the
        structure adding the key property because a linked list add a new
        element at the beginning of the list, resulting in an O(1) complexity of
        time. If we want to delete some value, we need to search the key and as
        you can remember, is not so efficient.
        <br />
        <b>HashTable</b>
        <br />
        We dont need to be hurry about that! We can create a function to convert
        the key in an integer to resolve and handle our problem. Then using the
        hash value created we can use as an index in our array to avoid the
        collisions and that is what makes the hash table particularly useful. Is
        it confused? I will try to explain.
        <br />
        We need to keep in mind that the hash table is another approach to
        implement the dictionary data structure and the difference between them
        is by the fact how we can store and access data. Just remember that a
        hash table is composed with two parts, an array and hash function.
        <br />
      </p>
    ),
    videoUrl: "https://youtu.be/sfWyugl4JWA",
    additionalLinks: [
      "https://learn.microsoft.com/en-us/dotnet/standard/collections/hashtable-and-dictionary-collection-types",
      "https://stackoverflow.com/questions/2061222/what-is-the-true-difference-between-a-dictionary-and-a-hash-table",
    ],
    mcqs: [
      {
        id: 1,
        question: "What is a hash table?",
        answers: [
          "A structure that maps values to keys",
          "A structure that maps keys to values",
          "A structure used for storage",
          "A structure used to implement stack and queue",
        ],
        correct: "A structure that maps keys to values",
      },
      {
        id: 2,
        question: "Which of these about a dictionary is false?",
        answers: [
          "Dictionaries are mutable",
          "Dictionaries aren't ordered",
          "The values of a dictionary can be accessed using keys",
          "The keys of a dictionary can be accessed using values",
        ],
        correct: "The keys of a dictionary can be accessed using values",
      },
      {
        id: 3,
        question:
          "Hashing technique which allocates fixed number of buckets is classified as",
        answers: [
          "dynamic hashing",
          "static hashing",
          "external hashing",
          "internal hashing",
        ],
        correct: "external hashing",
      },
      {
        id: 4,
        question:
          "If several elements are competing for the same bucket in the hash table, what is it called?",
        answers: [
          "Diffusion",
          "Replication",
          "Collision",
          "None of the mentioned",
        ],
        correct: "Collision",
      },
    ],
  },
  {
    id: 3,
    title: "Set and MultiSet",
    description: (
      <p>
        <b>Introduction</b> A set is a data structure that can store any number
        of unique values in any order you so wish. Set’s are different from
        arrays in the sense that they only allow non-repeated, unique values
        within them. Thankfully, programming languages tend to have the ability
        to convert the likes of an array into a set with minimal fuss. Let’s
        take a look at an example of this in Python. We’ll start off by defining
        an_array which will contain a number of repeated elements. We can then
        create a set using the set() function and pass in our an_array. This
        will automatically create a set of the unique values in our array for
        us. <br />
        Multisets in C++ are containers that are very similar to sets. Unlike
        sets, multisets can store duplicate elements in a sorted manner. The
        elements inside the multiset cannot be changed, once they are added to
        the multiset, they can only be inserted or deleted. A multiset is
        present in header file. The elements inside the multiset can be accessed
        using iterators. data_type: data type of the elements to be stored
        inside the multiset initial_values: optional parameter which initializes
        the multiset with the given values Note: By default the multiset stores
        values in non-decreasing order. To store the values in non-increasing
        order, we use an inbuilt comparator function
      </p>
    ),
    videoUrl: "https://youtu.be/PKE_Y9_gHMo",
    additionalLinks: [
      "https://www.geeksforgeeks.org/multiset-in-cpp-stl/",
      "https://dev.to/fernandoblima/set-and-multiset-data-structure-algorithm-part-iii-1ea8",
    ],
    mcqs: [
      {
        id: 1,
        question:
          " What is the worst-case running time of unions done by size and path compression?",
        answers: ["O(N)", "O(logN)", "O(N logN)", "O(M logN)"],
        correct: "O(M logN)",
      },
      {
        id: 2,
        question:
          "The members of two of the sets are relatively more common when the Jaccard Index is:",
        answers: ["Closer to 0", "Closer to 1", "Farther to 1", "Closer to -0"],
        correct: "The keys of a dictionary can be accessed using values",
      },
    ],
  },
  {
    id: 4,
    title: "Disjoint Set",
    description: (
      <p>
        <b>Introduction</b> Whenever we have been given a problem that contains
        n elements represented as separate sets initially and we need to the
        perform following operations: Combine two sets. Find the connectivity of
        two given elements i.e. whether they belong to the same set or not. Then
        it is advisable to use Disjoint-Set data structure to pose an efficient
        solution. Disjoint Set Union is sometimes also referred to as Union-Find
        because of its two important operations - Explore free masterclasses by
        our top instructors View All master class instructor Introduction to SQL
        for Data Science Shivank Agrawal 21 March 2023 | 8:00 PM 3.00 Hrs
        Register with 1-Click View Details master class instructor Monolithic
        and Microservices architecture Naman Bhalla 21 March 2023 | 8:00 PM 3.00
        Hrs Register with 1-Click View Details master class instructor What does
        it take to get a Data Science job at a Top Company? Apoorv Gupta 22
        March 2023 | 7:00 PM 1.00 Hrs Register with 1-Click View Details
        2,35,262+ learners have attended these Masterclasses. Disjoint Set: Two
        sets are called disjoint set if the intersection of two sets is � ϕ i.e.
        NULL. A Disjoint-Set data structure that keeps records of a set of
        elements partitioned into several non-overlapping (Disjoint) subsets.
        Union Find: Union-Find algorithm performs two very useful operations -
        Find: To find the subset a particular element 'k' belongs to. It is
        generally used to check if two elements belong to the same subset or
        not. Union: It is used to combine two subsets into one. A union query,
        say Union(x, y) combines the set containing element x and set containing
        element y.
        <br />
        <b>Algorithms</b>:<br /> Naive Implementation: The most basic
        implementation of the Disjoint set one can think of is to keep a track
        of the parent of every element present in a list/array. We will have a
        global array/list of size n where 'n' is the number of elements in the
        set. Finding the parent of an element 'u' is very easy, since we are
        keeping track of parent of every element. If parent[u]=u then we will
        return parent[u] in the other case we will recursively find the parent
        of parent[u] until the condition parent[u]=u satisfies. For merging two
        sets, Let we need to perform Union(u, v) then We will find parents of u
        and v. If they found different (which means u and v belongs to different
        sets) then we would merge them by making parent[u]=v or parent[v]=u.
      </p>
    ),
    videoUrl: "https://youtu.be/3gbO7FDYNFQ",
    additionalLinks: [
      "https://www.scaler.com/topics/data-structures/disjoint-set/",
      "https://www.geeksforgeeks.org/disjoint-set-data-structures/",
    ],
    mcqs: [
      {
        id: 1,
        question:
          "How many properties will an equivalent relationship satisfy?",
        answers: ["1", "2", "3", "4"],
        correct: "3",
      },
      {
        id: 2,
        question:
          "Path Compression algorithm performs in which of the following operations?",
        answers: [
          "Create operation",
          "Insert operation",
          "Find operation",
          "Delete operation",
        ],
        correct: "Find operation",
      },
      {
        id: 3,
        question:
          "What is the depth of any tree if the union operation is performed by height?",
        answers: ["O(N)", "O(log N)", "O(N log N)", "O(M log N)"],
        correct: "O(log N)",
      },
      {
        id: 4,
        question:
          "In the Union/Find algorithm, the ranks of the nodes on a path will increase monotonically from?",
        answers: [
          "leaf to root",
          "root to node",
          "root to leaf",
          "left subtree to right subtree",
        ],
        correct: "leaf to root",
      },
    ],
  },
  {
    id: 5,
    title: "Tree",
    description: (
      <p>
        <b>Introduction</b>
        <br />
        A tree data structure is a hierarchical structure that is used to
        represent and organize data in a way that is easy to navigate and
        search. It is a collection of nodes that are connected by edges and has
        a hierarchical relationship between the nodes. The topmost node of the
        tree is called the root, and the nodes below it are called the child
        nodes. Each node can have multiple child nodes, and these child nodes
        can also have their own child nodes, forming a recursive structure.
        <br />
        The data in a tree are not stored in a sequential manner i.e, they are
        not stored linearly. Instead, they are arranged on multiple levels or we
        can say it is a hierarchical structure. For this reason, the tree is
        considered to be a non-linear data structure.
        <br />
        <b>Binnary Tree</b>
        <br />
        Binnary Tree As the name suggests, a binary tree it is a tree whose
        elements have at most 2 children, called left and right. Simple right?
        We should keep in mind that every node is a representation of a subtree
        itself. That said, a node can have two subtrees.
        <br />
        <b>Binnary Search Tree (BST)</b>
        <br />
        Binary Search Tree is a rooted binary tree and each node store a key and
        can have two children like the binary tree. But what is the difference
        between them? An important thing to remember is that the root element
        must satisfy the property to be greater than all keys stored in the left
        sub-tree, and not greater than all keys in the right sub-tree which
        provides the efficient way of data sorting, searching and retriving.
      </p>
    ),
    videoUrl: "https://youtu.be/I_JuQ5ayPmc",
    additionalLinks: [
      "https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/",
      "https://www.programiz.com/dsa/trees",
    ],
    mcqs: [
      {
        id: 1,
        question:
          "The number of edges from the root to the node is called __________ of the tree.",
        answers: ["Height", "Depth", "Length", "Width"],
        correct: "Depth",
      },
      {
        id: 2,
        question: "What is a full binary tree?",
        answers: [
          "Each node has exactly zero or two children",
          "Each node has exactly two children",
          "All the leaves are at the same level",
          "Each node has exactly one or two children",
        ],
        correct: "Each node has exactly zero or two children",
      },
      {
        id: 3,
        question:
          "The no of external nodes in a full binary tree with n internal nodes is?",
        answers: ["n", "n+1", "2n", "2n+1"],
        correct: "n+1",
      },
      {
        id: 4,
        question:
          "Which of the following statement about binary tree is CORRECT?",
        answers: [
          "Every binary tree is either complete or full",
          "Every complete binary tree is also a full binary tree",
          "Every full binary tree is also a complete binary tree",
          "A binary tree cannot be both complete and full",
        ],
        correct: "Every full binary tree is also a complete binary tree",
      },
    ],
  },
  {
    id: 6,
    title: "Trie",
    description: (
      <p>
        <b>Definition:</b>
        <br /> A trie (derived from retrieval) is a multiway tree data structure
        used for storing strings over an alphabet. It is used to store a large
        amount of strings. The pattern matching can be done efficiently using
        tries. The trie shows words like allot, alone, ant, and, are, bat, bad.
        The idea is that all strings sharing common prefix should come from a
        common node. The tries are used in spell checking programs.
        Preprocessing pattern improves the performance of pattern matching
        algorithm. But if a text is very large then it is better to preprocess
        text instead of pattern for efficient search. A trie is a data structure
        that supports pattern matching queries in time proportional to the
        pattern size. If we store keys in a binary search tree, a well balanced
        BST will need time proportional to M * log N, where M is the maximum
        string length and N is the number of keys in the tree. Using Trie, the
        key can be searched in O(M) time. However, the penalty is on Trie
        storage requirements (Please refer to Applications of Trie for more
        details).
        <br />
        <b>Structure of Trie node:</b> Every node of Trie consists of multiple
        branches. Each branch represents a possible character of keys. Mark the
        last node of every key as the end of the word node. A Trie node field
        isEndOfWord is used to distinguish the node as the end of the word node.
        <br />
        <b>Insert Operation in Trie:</b> Inserting a key into Trie is a simple
        approach. Every character of the input key is inserted as an individual
        Trie node. Note that the children is an array of pointers (or
        references) to next-level trie nodes. The key character acts as an index
        to the array children. If the input key is new or an extension of the
        existing key, construct non-existing nodes of the key, and mark the end
        of the word for the last node. If the input key is a prefix of the
        existing key in Trie, Simply mark the last node of the key as the end of
        a word. The key length determines Trie depth.
        <br />
        Advantages of tries <br />
        1. In tries the keys are searched using common prefixes. Hence it is
        faster. The lookup of keys depends upon the height in case of binary
        search tree. 2. Tries take less space when they contain a large number
        of short strings. As nodes are shared between the keys. 3. Tries help
        with longest prefix matching, when we want to find the key. Comparison
        of tries with hash table 1. Looking up data in a trie is faster in worst
        case as compared to imperfect hash table. 2. There are no collisions of
        different keys in a trie. 3. In trie if single key is associated with
        more than one value then it resembles buckets in hash table. 4. There is
        no hash function in trie. 5. Sometimes data retrieval from tries is very
        much slower than hashing. 6. Representation of keys a string is complex.
        For example, representing floating point numbers using strings is really
        complicated in tries. 7. Tries always take more space than hash tables.
        8. Tries are not available in programming tool it. Hence implementation
        of tries has to be done from scratch. <br />
        <b>Applications of tries</b> <br />
        1. Tries has an ability to insert, delete or search for the entries.
        Hence they are used in building dictionaries such as entries for
        telephone numbers, English words. 2. Tries are also used in
        spell-checking softwares.
      </p>
    ),
    videoUrl: "https://youtu.be/zIjfhVPRZCg",
    additionalLinks: [
      "https://www.geeksforgeeks.org/trie-insert-and-search/",
      "https://www.scaler.com/topics/data-structures/trie-data-structure/",
    ],
    mcqs: [
      {
        id: 1,
        question:
          "What traversal over trie gives the lexicographical sorting of the set of the strings?",
        answers: ["postorder", "preorders", "inorder", "level order"],
        correct: "inorder",
      },
      {
        id: 2,
        question:
          "Which of the following is the efficient data structure for searching words in dictionaries?",
        answers: ["BST", "Linked List", "Balancded BST", "Trie"],
        correct: "Trie",
      },
      {
        id: 3,
        question:
          "What can be the maximum depth of the trie with n strings and m as the maximum sting the length?",
        answers: ["log2n", "log2m", "m", "n"],
        correct: "m",
      },
      {
        id: 4,
        question: "Which of the following is true about the trie?",
        answers: [
          "root is letter a",
          "path from root to the leat yields the string",
          "children of nodes are randomly ordered",
          "None of the mentioned",
        ],
        correct: "each node stores the associated keys",
      },
    ],
  },
  {
    id: 7,
    title: "Heap",
    description: (
      <p>
        <b>Introduction</b>
        <br />
        Heap data structure is a complete binary tree that satisfies the heap
        property, where any given node is always greater than its child node/s
        and the key of the root node is the largest among all other nodes. This
        property is also called max heap property. always smaller than the child
        node/s and the key of the root node is the smallest among all other
        nodes. This property is also called min heap property.
        <br />
        <b>Types of Heap Data Structure</b>
        <br />
        Generally, Heaps can be of two types: Max-Heap: In a Max-Heap the key
        present at the root node must be greatest among the keys present at all
        of it’s children. The same property must be recursively true for all
        sub-trees in that Binary Tree. Min-Heap: In a Min-Heap the key present
        at the root node must be minimum among the keys present at all of it’s
        children. The same property must be recursively true for all sub-trees
        in that Binary Tree.
      </p>
    ),
    videoUrl: "https://youtu.be/t0Cq6tVNRBA",
    additionalLinks: [
      "https://www.geeksforgeeks.org/heap-data-structure/",
      "https://www.educative.io/answers/what-is-a-heap",
    ],
    mcqs: [
      {
        id: 1,
        question:
          "A ________ is a special Tree-based data structure in which the tree is a complete binary tree.?",
        answers: ["Graph", "Heap", "List", "Stack"],
        correct: "Heap",
      },
      {
        id: 2,
        question: "How many type of heap are there?",
        answers: ["2", "3", "4", "5"],
        correct: "2",
      },
      {
        id: 3,
        question: "Heap can be used as ________________",
        answers: [
          "Priority queue",
          "Stack",
          "A decreasing order array",
          "Normal Array",
        ],
        correct: "Priority queue",
      },
      {
        id: 4,
        question: "What is the complexity of adding an element to the heap?",
        answers: ["O(log n)", "O(log h)", "O(h)", "Both A and C"],
        correct: "Both A and C",
      },
    ],
  },
  {
    id: 8,
    title: "Graph",
    description: (
      <p>
        <b>Graph Data Structure</b>
        <br /> In this tutorial, you will learn what a Graph Data Structure is.
        Also, you will find representations of a graph. A graph data structure
        is a collection of nodes that have data and are connected to other
        nodes. Let's try to understand this through an example. On facebook,
        everything is a node. That includes User, Photo, Album, Event, Group,
        Page, Comment, Story, Video, Link, Note...anything that has data is a
        node. Every relationship is an edge from one node to another. Whether
        you post a photo, join a group, like a page, etc., a new edge is created
        for that relationship.
        <br />
        <br />
        <b>Graph Terminology</b>
        <br />
        <b>Adjacency:</b> A vertex is said to be adjacent to another vertex if
        there is an edge connecting them. Vertices 2 and 3 are not adjacent
        because there is no edge between them.
        <br /> <b>Path: </b>A sequence of edges that allows you to go from
        vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from
        vertex 0 to vertex 2.
        <br /> <b>Directed Graph:</b> A graph in which an edge (u,v) doesn't
        necessarily mean that there is an edge (v, u) as well. The edges in such
        a graph are represented by arrows to show the direction of the edge.
        <br />
        <br />
        <b>Graph Representation</b>
        <br /> Graphs are commonly represented in two ways:
        <br /> 1. Adjacency Matrix An adjacency matrix is a 2D array of V x V
        vertices. Each row and column represent a vertex. If the value of any
        element a[i][j] is 1, it represents that there is an edge connecting
        vertex i and vertex j.
        <br />
        2. Adjacency List An adjacency list represents a graph as an array of
        linked lists. The index of the array represents a vertex and each
        element in its linked list represents the other vertices that form an
        edge with the vertex.
        <br />
        <b>Graph Operations</b> <br /> The most common graph operations are:{" "}
        <br /> Check if the element is present in the graph <br /> Graph
        Traversal <br /> Add elements(vertex, edges) to graph <br /> Finding the
        path from one vertex to another
      </p>
    ),
    videoUrl: "https://youtu.be/fv8aQxQ11kY",
    additionalLinks: [
      "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
      "https://www.educative.io/answers/what-is-a-graph-data-structure",
    ],
    mcqs: [
      {
        id: 1,
        question:
          "What is the number of edges present in a complete graph having n vertices?",
        answers: [
          "(n*(n+1))/2",
          "(n*(n-1))/2",
          "n",
          "Information given is insufficient",
        ],
        correct: "(n*(n-1))/2",
      },
      {
        id: 2,
        question:
          "A connected planar graph having 6 vertices, 7 edges contains _____________ regions.",
        answers: ["15", "3", "1", "11"],
        correct: "3",
      },
      {
        id: 3,
        question:
          "Which of the following properties does a simple graph not hold?",
        answers: [
          "Must be connected",
          "Must be unweighted",
          "Must have no loops or multiple edges",
          "Must have no multiple edges",
        ],
        correct: "Must be connected",
      },
      {
        id: 4,
        question:
          "What is the maximum number of edges in a bipartite graph having 10 vertices?",
        answers: ["24", "21", "25", "16"],
        correct: "25",
      },
    ],
  },
];
