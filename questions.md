## Answers

### 1: Difference between Component & PureComponent
Component and PureComponent are the same. PureComponents do not have a state ? 

### 2: Context + ShouldComponentUpdate are dangerous
If not well handled they may generate "infinite" re-renders of the component.

### 3: 3 Ways of passing information from child to parent
1. Using a global variable / state. The child modified the state, and the parent reacts.
2. Using an event system, where a child could trigger it, and the parent intercept it and act according to the event.
For example: 
    The child may trigger an event called : 'inputChanged'.
    The parent listen to this event constantly.
    When the child triggers this event, the parent will react.
3. Using the observer / observable pattern.

### Preventing re-redering with two different ways
1. Using ShouldComponentUpdate
2. Using Context

### Fragments
The fragment give the ability to regroup html elements instead of using a "dummy" div. The fragment is removed by react at rendering.
In case of using CSS Flex boxes.
For example:
`<section>
    <div>
        <div/>
        <div/>
    </div>
    <div/>
</section>`

In this case, if we have display flex columns in the section, we will have two columns. If we use fragment instead of the first div, we will have 3 columns.
`<section>
    <>
        <div/>
        <div/>
    </>
    <div/>
</section>`

### 3 Examples of HOC
I did not understand the question, could not answer it.


### The difference between exceptions handling in promises, and async...await
1. Handling async await implies using the try catch syntax, we lose the parallelization.
2. In promises, we can chain directly the catch function, gives the ability to locate the errors compared to try catch.


### Arguments of setState
It takes two arguments, the new state, and a callback. The callback is executed once the state has been updated. It is async as updating the state occurs after a rendering.

### Migrating from Class to Function component
1. Remove the class declaration and replace it with variable function which takes the props as argument.
2. The render method, is replaced by a return.
3. The componentDidMount, componentDidUpdate, componentDidUnmount can be replaced with useEffect.
4. State variables needs to be replaced with the useState hook.

These are the main steps, but there may be some details and exceptions depending on the component complexity.

### CSS with components
1. CSS in JS.
2. Within the component directly.
3. Imporing CSS file inside the component.
4. CSS Scoping

### Rendering HTML
Using SSR and react utilities to do it.