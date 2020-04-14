Step 1
Create public directory that will serve the static contents(assets)for a web application

Step 2
create index.html

- DocType - version of html
  -emmet plugin for the auto complete html tags

Step 3
live server - automatic reload (no configuration web server )
yarn global add(-install) live-server
if above commands does not work
please use npm install global live-server
live reload

Step 4
-refer cdb links in the script tags

- make sure that cdn sets "Access control allow origin" in http header
- add cross origin attribute - for better error handling experience

Step 5

- create an empty div with an id
- create an app.js with jsx, div reference in index.html and pass it to ReactDom render it
- step up the babel that compiles jsx(java script dialect ) and latest version of js into es5
- instal babel cli v 6.24.1 using npm or yarn

Step 6

- yarn init or npm init - to generate package.json
- Add following preset - babel-preset-react@6.24.1 babel-preset-env@1.5.2
  Notes
  - babel src/app.js --out-file=public/scripts/app.js presets=env, react --watch(look out changes in background)

Babel

- It is compiler, by default it doesnt convert anything
- We need add the following preset to make the babel working
- env, es2015, react(preset-flow,syntax-jsx,transform-react-jsx,transform-react-display-name)

Yarn Lock- to keep track of the dependencies version installed
