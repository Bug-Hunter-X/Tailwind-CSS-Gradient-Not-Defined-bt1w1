# Tailwind CSS Gradient Not Defined

This repository demonstrates an uncommon bug in Tailwind CSS where a gradient is used that is not defined in the `tailwind.config.js` file.  This results in the gradient not rendering correctly or at all.

## Bug Description

The `someComponent.js` file uses a linear gradient (`bg-gradient-to-r from-blue-500 to-purple-500`) that is not explicitly defined in the Tailwind configuration. This causes the gradient to be ignored, resulting in a plain background color.