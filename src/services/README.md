JavaScript modules, isolated to easy export/import into project without modify many files

a plain JavaScript module that the rest of the application is using, it can be handy. A common contrived example is a LocalStorage module, which might look like this:

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
