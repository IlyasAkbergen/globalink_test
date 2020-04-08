import auth from './auth'
import companies from './companies'

const requireModule = require.context('.', true, /\.js$/)
const modules = {
  auth,
  companies,
};

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.js)/g, '')
  const [moduleName, imported] = path.split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
});

export default modules