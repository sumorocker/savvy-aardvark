# DecodeMTL React starter kit

This starter kit lets you get started more easily with a basic React project.

We are using React and React Router for the UI.

We are using Superagent to make HTTP requests to the GitHub API to retrieve some dummy data.

We are using Gulp to automate our development workflow: `gulpfile.js` defines some tasks that will
automatically compile our front-end assets, and even refresh the browser for us as necessary.

We can write our SASS in the SCSS directory, and our main application is started by running
the `js/main.js` file. Everything under the `scss` and `js` directories is compiled by Gulp (thru Browserify)
into the `build/` directory. Our `index.html` then loads the built version.

In `main.js`, after initializing some libraries, we are defining our route structure. We are using
the nested routes feature of React Router to allow us to have an `App` component with a constant
header.

If you look in `js/components/App.js` you will see that as part of the `render` method of the
`App` component, we are rendering `{this.props.children}`. This will render the component defined
by the current sub-route in our routes structure.

For example, if we are on the URL `/`, then React Router will render the `App` component, and will
pass the `Home` component as `this.props.children`. This is because `Home` is defined as our
`IndexRoute`, meaning the default route for this sub-path.

If we are on `/repos`, then React Router will also render the `App` component, because the
path to `/repos` is `/` followed by `repos` in our route structure. However this time around,
`this.props.children` will be set to an instance of the `Repos` component.

## Getting started
1. Clone this repo and remove the `.git` directory to only keep the files
2. Go through the code to make sure you understand what is going on. **Ask your teacher
/ TAs if something is unclear**.
3. Run `npm install` to load all the libraries from `package.json`. This may be a good time
to explore all the libraries that we are installing, read their READMEs and ask questions about them.
4. To start working on your project, run `gulp` from the command line. If you do not have it
installed, you may need to run `npm install -g gulp` before.
5. Make changes to your code, and see how browsersync immediately pushes these changes to your browser!
6. ...
7. Profit :dollar:
