---
sidebar_position: 1
---

References used to create this template:

- [Create Monorepo Project from Scratch](https://react.qubitpi.org/learn/start-a-new-react-project#create-monorepo-from-scratch)
- [Typedoc](https://qubitpi.github.io/typedoc-site/guides/installation/#integrating-with-docusaurus)

```console
yarn prettier --ignore-path .gitignore . --check
```

### Import SVG

```typescript
import MySvg from "./example.svg"

function MyComponent(): JSX.Element {
  return (
    <div className="svgIcon">
      <img src={MySvg} alt="MySvg" />
    </div>
);
}
```