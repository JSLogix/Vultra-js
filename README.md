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

1. Create a Storage Object
   Use createStorage to initialize a reactive state object:

typescript
Copy
Edit
import { createStorage } from 'my-storage';

const storage = createStorage({
count: 0,
message: 'Hello World!',
});

// Access state
console.log(storage.getState().count); // Output: 0

// Update state
storage.setState('count', 5);
console.log(storage.getState().count); // Output: 5

// Reset state to initial values
storage.resetState();
console.log(storage.getState().count); // Output: 0 2. Vue Integration
A. Provide the Store
Set up a global store in your main Vue application file:

typescript

<script>

// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { provideStore } from 'vultra';

const app = createApp(App);

// Provide the store with initial state
provideStore({
count: 0,
message: 'Welcome to MyStorage!',
});

app.mount('#app');
</script>

B. Use the Store in Components
Access the store in any Vue component using useStore:

vue

<!-- App.vue -->
<script setup>
import { useStore } from 'vultra';

const store = useStore();

// Increment function
const increment = () => {
  store.setState('count', store.getState().count + 1);
};
</script>

<template>
  <div>
    <p>Count: {{ store.getState().count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
API Reference
createStorage(initialState: T)
Creates a reactive storage object.

initialState: The initial state object.
Returns: An object with the following methods:
getState(): Returns the current state as a readonly object.
setState(key: keyof T, value: T[keyof T]): Updates a specific state property.
updateState(newState: Partial<T>): Merges new state values into the current state.
resetState(): Resets the state to its initial values.
provideStore(initialState: T)
Provides a store globally using Vue's provide API.

initialState: The initial state object.
useStore()
Retrieves the provided store in any Vue component.

Advanced Features
Reset State
Reset the state back to its initial values:

typescript
store.resetState();
Update Multiple Properties
Merge partial updates into the state:

typescript
Copy
Edit
store.updateState({ count: 10, message: 'Updated!' });
Framework-Agnostic Usage
You can also use this library outside of Vue:

javascript

<script>
import { createStorage } from 'vultra';

const storage = createStorage({ count: 0 });

storage.setState('count', 10);
console.log(storage.getState().count); // Output: 10
</script>

Roadmap
Add persistence with localStorage or sessionStorage.
Plugin system for extending functionality.
TypeScript enhancements for better type inference.
Vue DevTools integration.
Contributing
Contributions are welcome! Please follow these steps:
