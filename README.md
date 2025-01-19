# MyStorage

A lightweight and flexible state management library for Vue.js, designed to be simple and modular while providing reactivity and global state sharing.

---

## Features

- 🔄 **Reactive State:** Built with Vue's reactivity system for efficient updates.
- 🔧 **Easy Integration:** Quickly set up and use in any Vue 3 application.
- 🛠️ **Customizable:** Update, reset, or extend the state with ease.
- 💾 **Framework-Agnostic:** Can be used outside of Vue for plain JavaScript or other frameworks.

---

## Installation

Install the package using npm or yarn:

```bash
npm i vultra
```

Usage

1. Create a Storage Object
   Use createStorage to initialize a reactive state object:

```javascript
import { createStorage } from "my-storage";

const storage = createStorage({
  count: 0,
  message: "Hello World!",
});

// Access state
console.log(storage.getState().count); // Output: 0

// Update state
storage.setState("count", 5);
console.log(storage.getState().count); // Output: 5

// Reset state to initial values
storage.resetState();
console.log(storage.getState().count); // Output: 0
```
