global shared/reusable pure components, such as input, select, dropdown, buttons, ...

Component.js - The actual React component
Component.styles.js - The Styled Components file for the component
Component.test.js - The tests
Component.stories.js - The Storybook file

Index.ts: an index of all the components, indexes the entire Component directory and look something like this:

```
import { TextField } from './TextField/TextField'
import { Select } from './Select/Select'
import { Radio } from './Radio/Radio'

export { TextField, Select, Radio }
```

when you need to use one or more of the components, you can easily import them all at once.

```
import { TextField, Select, Radio } from '@components/forms'
```
