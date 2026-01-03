## 11.27 Arrays
Consider a scenario where you want to store the names of 100 employees within an IT department. This can be done by creating 100 variables and storing the names. However, keeping track of 100 variables is a tedious task and it results in inefficient memory utilization. The solution to this problem is to create an array variable to store the names of 100 employees.
![Memory Utilization](images/Figure%2011.33-Memory%20Utilization%20Using%20an%20Array.png)
An array is a collection of values stored in adjacent memory locations. These array values are referenced using a common array name. The values of an array variable must be of the same data type. These values that are also referred to as elements and can be accessed by using subscript or index numbers. The subscript number determines the position of an element in an array list.

JavaScript supports two types of arrays that are as follows:
- Single-dimensional array
- Multi-dimensional array
#### What is Adjacent Memory Location (AML)
Think of computer memory like a **row of lockers**:
- Each locker stores a small piece of data.
- Lockers are numbered in order: 1, 2, 3, 4, …
If a program (process) uses lockers **3, 4, 5, and 6**, those lockers are **adjacent** because they are **side by side**.
![Adjacent Memory Location](images/adjacent-memory-location.png)
## 11.27.1 Single-Dimensional Array
In a single-dimensional array, the elements are stored in a single row in the allocated memory.
![Single Dimensional Array](images/Figure%2011.35-Single-Dimensional%20Array.png)
As shown in figure 11.35, the first element has the index number zero and the last 
array element has an index number one less than the total number of element. This arrangement helps in efficient storage of data, In addition, it also helps to sort data easily and track the data length. The array variable can be created using the `Array` object and `new` keyword along with the size of the array element.

The syntax to declare and initialize a single-dimensional array is as follows:
**Syntax**
```
var variable_name = new Array(size); //Declaration
variable_name[index] = 'value';
```
**where**,
`variable_name`: Is the name of the variable.
`size`: Is the number of elements to be declared in the array.
`index`: Is the index position.

**Code Snippet 36:**
Code Snippet 36 shows different ways to declare and initialize a single-dimensional array.
```
<script>
	// Declaration using Array Pbject and then Initialization
	varmartial_status = newArray(3);
	martial_status[0] = 'Single';
	martial_status[1] = 'Married';
	martial_status[2] = 'Divorced';
	
	// Declaration and Initialization
	varmartial_status = newArray('Single', 'Married', 'Divorced');
	
	// Declaration and Initialization Without Array
	varmartial_status['Single', 'Married', 'Divorced'];
</script>
```
## 11.28 Array Methods
An array is a set of values grouped together and identified by a single name. In JavaScript, the `Array` object allows you to create arrays. It provides the `length` property that allows you to determine the number of elements in the array. Various methods of the `Array` object allow to access and manipulate the array elements.

| Method   | Description                                          |
| -------- | ---------------------------------------------------- |
| `concat` | Combines one or more array variables.                |
| `join`   | Joins all the array elements of an array.            |
| `pop`    | Retrieves the last element of an array.              |
| `push`   | Appends one or more elements to the end of an array. |
| `sort`   | Sorts the array elements in an alphabetical order.   |

