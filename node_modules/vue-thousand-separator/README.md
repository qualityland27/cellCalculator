# vue-thousand-separator
`vue-thousand-separator` is a plugin for Vue component.<br>
This plugin provides the directive which format a input value to the one with a thousand separator by using [autoNumeric](https://github.com/autoNumeric/autoNumeric) inside.

## How to use
### 1. Install
#### npm
`npm install vue-thousand-separator`

#### yarn
`yarn add vue-thousand-separator`

### 2. Import and use

```
import VueThousandSeparator from 'vue-thousand-separator';

Vue.use(VueThousandSeparator);
```

### 3. Attach v-separator directive

```
<template>
  <div>
    <app-text-field v-separator />
  </div>
</template>
```

Note that the component to attach directive should include `<input type="text">`.<br>
For example, the `<app-text-field />` is expected to the like below.

```
<template>
  <div class="AppTextField">
    <label>Text Field</label>
    <input type="text" :value="value" />
  </div>
</template>
```

### 4. Get numeric value
You need to use input event to get the value like below.

```
<template>
  <div>
    <app-text-field v-separator @input="v => this.val = v" />
  </div>
</template>

<script>
export default {
  data() {
    val: 0
  }
}
</script>
```

## License
Code released under [MIT license](LICENSE).
