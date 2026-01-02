## 11.15 Mouse Events

Mouse events occur when the user interacts with the mouse, such as clicking, double-clicking, or moving the cursor over an element. These events are crucial for creating interactive web applications.

### Common Mouse Events

| Event | Description |
| :--- | :--- |
| `onclick` | Occurs when the mouse button is clicked (pressed and released). |
| `ondblclick` | Occurs when the mouse button is double-clicked. |
| `onmousedown` | Occurs when the mouse button is pressed down. |
| `onmouseup` | Occurs when the mouse button is released. |
| `onmousemove` | Occurs when the mouse pointer moves. |
| `onmouseover` | Occurs when the mouse pointer enters an element. |
| `onmouseout` | Occurs when the mouse pointer leaves an element. |

### Example: Tracking Mouse Position

In this example, we track the coordinates (X and Y position) of the mouse cursor as it moves.

**JavaScript Code (`06-mouse-ev.js`):**

```javascript
function showPosition(event) {
    // Get the X and Y coordinates of the mouse pointer
    document.getElementById('xPos').innerHTML = event.clientX;
    document.getElementById('yPos').innerHTML = event.clientY;
}
```

**HTML Usage:**
```html
<body onmousemove="showPosition(event)">
    <p>X Position: <span id="xPos"></span></p>
    <p>Y Position: <span id="yPos"></span></p>
</body>
```
