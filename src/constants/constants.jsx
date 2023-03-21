// url: "https://dev.to/api/articles/fernandoblima/linked-list-queue-and-stack-data-structure-part-i-1pen";
export const paths = [
  {
    id: 1,
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
    description: "Ok",
    videoUrl: "https://youtu.be/PKE_Y9_gHMo",
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
    id: 4,
    title: "Disjoint Set",
    description: "Ok",
    videoUrl: "https://youtu.be/3gbO7FDYNFQ",
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
    id: 5,
    title: "Tree",
    description: (
      <p>
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
    id: 6,
    title: "Trie",
    description: "Ok",
    videoUrl: "https://youtu.be/zIjfhVPRZCg",
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
    id: 7,
    title: "Heap",
    description: "Ok",
    videoUrl: "https://youtu.be/t0Cq6tVNRBA",
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
    id: 8,
    title: "Graph",
    description: "Ok",
    videoUrl: "https://youtu.be/fv8aQxQ11kY",
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
];
