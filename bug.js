```javascript
// someComponent.js
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
```
This code will not work in the tailwind build because it uses a gradient that is not defined in the tailwind config file. To fix this, you need to add the gradient to your tailwind config file.