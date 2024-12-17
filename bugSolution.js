```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);',
        'gradient-to-r': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);'
      }
    }
  },
  plugins: [],
}
```
By adding the gradient to the `tailwind.config.js` file, Tailwind CSS will now recognize and apply the gradient correctly.