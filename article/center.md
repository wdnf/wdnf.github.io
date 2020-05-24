# Centering a element using CSS

 Margin method:
 ```css
 child {
     margin: 0 auto;
 }
 ```
 *Restrictions: Parent and child must be display: block, if you **don't** specify `display` it should work anyways*
 
 Flex method
 ```css
 parent {
     display: flex;
     justify-content: center;
     align-items: center;
     /* and text-align: center; for text  */
 }
 ```
 
 Transform method
 ```css
 parent {
     position: relative;
 }
 child {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
 }
 ```
 
 Grid method
 ```css
 .parent {
   display: grid;
   place-items: center;
 }
 ```
 Hope it helped ;)
  - Oliver
