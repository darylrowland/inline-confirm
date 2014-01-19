inline-confirm
==============

AngularJS Inline Confirm Button/Text Directive

Very simple directive that lets you quickly and easily create inline confirm buttons or links for your Angular projects.
I use this a lot for delete buttons.

##Usage:
1. Include the inline-confirm.js file in your app
2. Add the directive "inlineConfirm" to your Angular app
3. Create a new element in your code for your inline confirmer, e.g. 

In html:
```html
<inline-confirm icon="icon-trash-can" text="Delete" mainclass="btn" type="button" confirmfunction="myFunc(param1, param2)"/>
```

Or in jade:
```html
inline-confirm(icon="icon-trash-can", text='Delete', mainclass="btn btn-orange", type="button", confirmfunction="myFunc(param1, param2)")
```

##Attributes
There are a number of attributes you can set to configure the directive, these are detailed below:

| Attribute     | Description | Required  |
| ------------- |-------------| ---------|
| icon          | An icon class to use, e.g. for something like a trash can. Best used with icon fonts like font awesome | No        |
| text | The text to display, e.g. Delete, when this button/link is in its default state | Yes |
| mainclass | Any classes you want to apply for styling the button/link, separated by spaces | No |
| confirmfunction | The function that should be called when the user clicks on the 'yes' button | Yes |

##License
You're free to use & modify this code however you see fit. Let me know about any enhancements you make though please!


