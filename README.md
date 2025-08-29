1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The differents lies on their selection mechanism whether its static or live .
getElementById selects only specfic id and its return single element or null if not found. getElementsByClassName selects all elements which matches with same class and its return an HTML collection which is live 
and if not found it returns an empty HTML collection array like object. querySelector slight same as id but with querySelector we can target any spefic id,class,tag even an attribute and its only selects the first
element which is mathes and its return only single element. If not found its returns null. querySelectorAll as All means it selects all the elements which matches the same class,tags and its returns and NodeList(array like object) which is static.

2. How do you create and insert a new element into the DOM?
Ans: To create the new element in DOM. we can simply use a variable name = document.creteElement("tagName")then which element we want create just name that element for example if i want to create a div i will write div inside the tagName then insert the tagName by using appendChild(variableName) to the parentElement 
 
3. What is Event Bubbling and how does it work?
Ans: Event bubbling is a process starts from the target element then it's goes to upwards first the child then the parent then the grandparent and last to the document at the root . Now how does it work : For example I have one parent button inside that I have one more child button now if i add click event on the child and also the parent to specify any task now if click the child button the parent button also will excute because its bubble to upwards .
4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a technique where instead of attaching several event listners individually we just add to the parent of the elements. For Example if I have a ul and 4 li instead of giving event listers to li I just simply add one event lister to ul .The parent of li's . It is useful beacause its gives better performance , works with dynamic elements and also clean code.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: PreventDefault as it's name Default it's stop the default behaviour of elements but it will not stop the event-Bubbling.
stopPropagation is a opposite of the preventDafault its stop the event-Bubbling but not stop the default behaviour of elements.
