<div align="center">
  <h1>Webpack Framework</h1>

  <p>Use Webpack without worrying about configurations.</p>
  
  <p style="color:red">This is an alpha version (2024/07/27), please wait few days for documentation and a more stable version.</p>
  
  <p>I am currently redesigning it (old version in old directory).</p>
</div>

## Usage

### Initialise a new repository :

1. Create your new repository:<br/>
   `git init` or `git clone ... && cd ...`
2. Add Webpack-Framework:<br/>
   `git submodule add git@github.com:denis-migdal/Webpack-Framework.git ./build/WebpackFramework`<br/>
   💡 Alternatively, you can also use a symbolic link :<br/>
   `mkdir ./build && ln -s ... ./build/WebpackFramework`
3. Initialize the new repository:<br/>
   `./build/WebpackFramework/init.sh`
4. Complete informations in `package.json`.<br/>

⚠ markdown-loader is currently bugged, `markdown-loader/src/loader.js` needs to be :

```javascript
/* eslint-disable @babel/no-invalid-this */
import {parse, use} from "marked";

const extensions = [];

export function markdownLoader(markdown) {
  const options = this.getOptions();

  for(let extension of options.extensions) {
    if( extensions.includes(extension) )
      break;

    use(extension);
    extensions.push(extension);
  }

  return parse(markdown, options.options);
}
```

### Configuration

Webpack is configured through `webpack.config.js`.

[TODO] config

## Projects using WebpackFramework

### My projects

[TODO] update

## TODOLIST

- [ ] Add examples
- [ ] Only install required deps depending on the project...