inline-confirm
==============

AngularJS Inline Confirm Button/Text Directive

Very simple directive that lets you quickly and easily create inline confirm buttons or links for your Angular projects.
I use this a lot for delete buttons.

Usage:
1. Include the inline-confirm.js file in your app
2. Add the directive "inlineConfirm" to your Angular app
3. Create a new element in your code for your inline confirmer, e.g. 

In html:
<inline-confirm icon="icon-trash-can" text="Delete", mainclass="btn", type="button" confirmfunction="myFunc(param1, param2)"/>

Or in jade:
inline-confirm(icon="icon-trash-can", text='Delete', mainclass="btn btn-orange", type="button", confirmfunction="myFunc(param1, param2)")


