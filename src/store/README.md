Global Redux store, implemented by Redux-Toolkit

You can also add something like a ui section of the store to handle modals, toasts, sidebar toggling, and other global UI state, which I find better than having `const [isOpen, setIsOpen] = useState(false)` all over the place.

In the rootReducer you would import all your slices and combine them with combineReducers, and in index.js you would configure the store.
