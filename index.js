const robot = require('robotjs');

// Function to move the cursor
function moveCursor() {
	// Get the current mouse position
	const mouse = robot.getMousePos();

	// Move the mouse slightly to prevent screen off
	robot.moveMouse(mouse.x + 1, mouse.y);
	console.log('Mouse moved to:', mouse.x + 1, mouse.y);
}

// Interval in milliseconds to move the cursor
const intervalMs = 30000; // Adjust as needed

// Set an interval to move the cursor
const intervalId = setInterval(moveCursor, intervalMs);

// Log a message indicating the script is running
console.log('Cursor movement script running...');

// Function to stop the script
function stopScript() {
	clearInterval(intervalId);
	console.log('Cursor movement script stopped.');
}

// Listen for SIGINT (Ctrl+C) to stop the script
process.on('SIGINT', stopScript);
