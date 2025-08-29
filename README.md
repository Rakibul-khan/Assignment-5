What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The differents lies on their selection mechanism whether its static or live .
getElementById selects only specfic id and its return single element or null if not found. getElementsByClassName selects all elements which matches with same class and its return an HTML collection which is live 
and if not found it returns an empty HTML collection array like object. querySelector slight same as id but with querySelector we can target any spefic id,class,tag even an attribute and its only selects the first
element which is mathes and its return only single element. If not found its returns null. querySelectorAll as All means it selects all the elements which matches the same class,tags and its returns and NodeList(array like object) which is static.

How do you create and insert a new element into the DOM?
Ans: To create the new element in DOM. we can simply use a variable name = document.creteElement("tagName")then which element we want create just name that element for example if i want to create a div i will write div inside the tagName then insert the tagName by using appendChild(variableName) to the parentElement 
 
What is Event Bubbling and how does it work?
Ans: 
What is Event Delegation in JavaScript? Why is it useful?
Ans:
What is the difference between preventDefault() and stopPropagation() methods?
Ans:
