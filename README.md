# DevLand UI components
A set of components crafted form scratch to be used in DevLand projects

## Get Started
Install the library with
```
npm i @devland-ui/components
```

## Initial Setup

In order for the library to be used you need to
set up the `theme` to be used by the components,
this is done by setting up the `Configuration` component at the top of the app,
making sure all the library components are children of it

```tsx
import { Configuration, Pallete } from '@devland-ui/components';

const palette: Pallete = {
  BRAND: '#a32c87',
  ACCENT: '#a32c87',
  BACKGROUND: '#ffffff',
};

// ... most likly in your App.(js|jsx|tsx)
const App = ({ children }) => {
  return (
    <Configuration palette={palette}>
      {children}
    </Configuration>
  );
};
```

The `Palette` object definition is

```ts
export type Palette = {
  BRAND: string;
  ACCENT: string;
  BACKGROUND: string;
  SUCCESS?: string;
  INFO?: string;
  WARNING?: string;
  ERROR?: string;
}
```
### Dark mode

To implement a dark mode all is needed is
for the `BACKGROUND` attr of the `Pallete` to be a dark color,
keep in mind that the colors are adjusted to meet the accessibility standard
for the contrast ratio between background and the color in fonts,
a darker color, like a `#1c1c1c` is a good choice.

### Notifications

In order for the notifications to show the `NotificationCenter` component
must be present in the tree, preferably at the top

```tsx
// keeping up with the previous example
import { Configuration, Pallete, NotificationCenter } from '@devland-ui/components';

const palette: Pallete = {
  BRAND: '#a32c87',
  ACCENT: '#a32c87',
  BACKGROUND: '#ffffff',
};

const App = ({ children }) => {
  return (
    <Configuration palette={palette}>
      {children}
      <NotificationCenter />
    </Configuration>
  );
};
```

### Fonts

The `Title`, `Text`, `Paragraph` and `Button` components do not define a `font-family`,
so you can define it in a global style file, this allows for more customization
when deciding over your typography, it would look something like

```scss
@font-face {
  font-family: 'Bitter';
  font-weight: 400;
  font-display: swap;
  src: url('../../assets/fonts/Bitter-Regular.ttf');
}

@font-face {
  font-family: 'Bitter';
  font-weight: 700;
  font-display: swap;
  src: url('../../assets/fonts/Bitter-ExtraBold.ttf');
}

@font-face {
  font-family: 'Bitter';
  font-weight: 200;
  font-display: swap;
  src: url('../../assets/fonts/Bitter-ExtraLight.ttf');
}
```

In turn these components use numbers to define their `font-weight`

```ts
const weightMap = {
  light: 200,
  normal: 400,
  bold: 700,
};
```
