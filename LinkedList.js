// insert element at the position index
// of the list
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        let node = new Node(element);
        let curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;
 
            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

// removes an element from the
// specified location
removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to remove an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // remove the element
            prev.next = curr.next;
        }
        this.size--;
 
        // return the remove element
        return curr.element;
    }
}
