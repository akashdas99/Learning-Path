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
          " What is the time complexity to count the number of elements in the linked list?",
        answers: ["O(1)", "O(n)", "O(logn)", "O(n^2)"],
        correct: "O(n)",
      },
      {
        id: 3,
        question:
          " What is the time complexity to count the number of elements in the linked list?",
        answers: ["O(1)", "O(n)", "O(logn)", "O(n^2)"],
        correct: "O(n)",
      },
      {
        id: 4,
        question:
          " What is the time complexity to count the number of elements in the linked list?",
        answers: ["O(1)", "O(n)", "O(logn)", "O(n^2)"],
        correct: "O(n)",
      },
    ],
  },
  {
    id: 2,
    title: "Dictionary and HashTable ",
    description: "Ok",
  },
  {
    id: 3,
    title: "Set and MultiSet",
    description: "Ok",
  },
  {
    id: 4,
    title: "Disjoint Set",
    description: "Ok",
  },
  {
    id: 5,
    title: "Trie",
    description: "Ok",
  },
  {
    id: 6,
    title: "Heap",
    description: "Ok",
  },
  {
    id: 7,
    title: "Graph",
    description: "Ok",
  },
];
