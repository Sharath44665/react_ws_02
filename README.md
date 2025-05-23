## getting started with projects

1. pics
2. books
3. deep-dive-hooks
4. comps
5. redux store  👉 [click here for demo](https://codesandbox.io/p/sandbox/rtk-forked-k6d6rt?file=%2Fsrc%2Fstore%2Findex.js%3A31%2C38)
6. media
7. typescript
8. ts-demo
9. location-search
10. registry

**useEffect usecases:**

![useEffect usecases](./img/useEffect_usecases.png) 

**useCallback**

![usecallback](./img/useCallback.png)

**js demo:**

![js demo](./img/jsDemoConsole.png)

**useRef:**

![intro](./img/useRefIntro.png)

![impl](./img/useRefImpl.png)

**Navigation forward backward clicks**
![navigationOne](./img/navigating.png)

**Sorting Number:**

``` js
let numbers = [42, 3, 100, 8];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [3, 8, 42, 100]
```

Here, `(a, b) => a - b` ensures that:
- If `a - b` is negative, a appears before b.
- If `a - b` is positive, b appears before a.


> for descending order, change like this: 
> numbers.sort((a, b) => b - a);

**Sorting String:**

``` js
const data = [ 't', 'A', 'a', 'B', 'b']
data.sort() // output: ['A', 'B', 'a', 'b', 't']

data.sort( (a, b) =>  a.localeCompare(b) ) // output: ['a', 'A', 'b', 'B', 't']
```

**Object Sorting:**

String: 

![string object](./img/obj_string_comparision1.png)

integer:

![object integer](./img/obj_comparision_integer.png)


**useReducer Demo exp:**

![user reducer exp](./img/useReducerExp.png)

![exp2](./img/reducerExp2.png)

![exp3](./img/reducerExp3.png)

![exp4](./img/reducerExp4.png)

![exp5](./img/reducerExp5.png) 

**reducer vs immer:**

![reducer vs immer](./img/reducer_vs_immer.png)

**Showing some internal content in redux toolkit**

![store info 1](./img/storeInfo.png)

![store info 2](./img/storeInfo2.png)



