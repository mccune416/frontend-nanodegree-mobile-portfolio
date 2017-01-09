# Changes Made

## index.html
- Customized index.html with my own content
## views/js/main.js
- Inlined CSS
- Optimized Images
- Background pizzas were put on their own layer
- for loop in changePizzaSizes optimized by taking determineDx out from loop
- In updatePositions I took phase out of the for loop and put it in its own for loop to append each phase to a list phases. This way the next for loop only has to look inside a list rather than do more calculations.
