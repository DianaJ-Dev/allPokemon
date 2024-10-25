# @semillero/all-pokemon

## Package info

### Package installation

Installation using NPM

```bash
npm install @semillero/all-pokemon
```

### Entry points & exports

- (Default entry point)
  - AllPokemon (Class)
- all-pokemon.js
  - all-pokemon (Custom Element)


## AllPokemon (Class) all-pokemon (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { AllPokemon } from '@semillero/all-pokemon';

class ExampleElement extends AllPokemon {
  ...
}
```

Use the custom element (defined globally):

```js
import '@semillero/all-pokemon/all-pokemon.js';
```

```html
<all-pokemon ...>
  ...
</all-pokemon>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <all-pokemon></all-pokemon>
```

### Properties

- **name**: string = "Cells" (attribute: name)
    Description for property
