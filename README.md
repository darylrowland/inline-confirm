inline-confirm
==============

AngularJS Inline Confirm Icon/Button/Text Directive

Fork from https://github.com/darylrowland

Improved to add:
 - icon type display (Nice with bootstrap glyphicon)
 - Custom text on confirmation elements 'yes' and 'no' (Usefull for translation)
 - hide option for the action element

Very simple directive that lets you quickly and easily create inline confirm icon or buttons or links for your Angular projects.
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

| Attribute     | Description | Required  | Default |
| ------------- |-------------| ----------|-------- |
| type          | The type of the element which will trigger the action  | Yes        | |
| text          | The text to display, e.g. Delete, when this button/link is in its default state | Yes | |
| yestext       | The text for the 'confirmation' element | No | 'Yes' |
| notext        | The text for the 'cancellation' element | No | 'No' |
| confirmfunction | The function that should be called when the user clicks on the 'yes' button | Yes | |
| mainclass     | Any classes you want to apply to the main element holding the all inline confirmation | No | |
| actionclass   | Classes for the element which will trigger the inline confirmation | No | |
| confirmclass  | Any classes you want to apply to the confirmation element ('yes' and 'no') | No | |
| confirmclass  | Any classes you want to apply to the confirmation element ('yes' and 'no') | No | |
| hideonconfirm | Set to true if you want to hide the element which will trigger the action. | No | false |

##License
MIT License.


