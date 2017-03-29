/* eslint linebreak-style: ["error", "windows"]*/

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';
import Admin from './containers/Admin';
import App from './containers/App';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer } = getAsyncInjectors(store);

  return [

    {
      path: '/',
      component: App,
      indexRoute: {
        getComponent(nextState, cb) {
          System.import('views/Home')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
      childRoutes: [
        {
          path: '/',
          name: 'home',
          getComponent(nextState, cb) {
            System.import('views/Home')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/blog',
          name: 'blog',
          getComponent(nextState, cb) {
            System.import('views/Blog')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/resume',
          name: 'resume',
          getComponent(nextState, cb) {
            System.import('views/Resume')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/about',
          name: 'about',
          getComponent(nextState, cb) {
            System.import('views/AboutMe')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/contact',
          name: 'contact',
          getComponent(nextState, cb) {
            System.import('views/Contact')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          getComponent(nextState, cb) {
            System.import('views/Portfolio')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '/admin',
      component: Admin,
      indexRoute: {
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            import('./reducers/loginReducer'),
      import('./views/Login'),
  ]);

  const renderRoute = loadModule(cb);

  importModules.then(([reducer, component]) => {
    injectReducer('login', reducer.default);
    renderRoute(component);
  });

  importModules.catch(errorLoading);
},
      },
childRoutes: [
  {
    path: '/dashboard',
    name: 'dashboard',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
            import('./reducers/personalInfoReducer'),
            import('./reducers/aboutMeReducer'),
            import('./reducers/contactInfoReducer'),
            import('./reducers/skillReducer'),
            import('./reducers/educationReducer'),
            import('./views/Dashboard'),
]);

const renderRoute = loadModule(cb);

importModules.then(([personalInfoReducer, aboutMeReducer, contactInfo, skill, education, component]) => {
  injectReducer('personalInfo', personalInfoReducer.default);
  injectReducer('aboutMe', aboutMeReducer.default);
  injectReducer('contactInfo', contactInfo.default);
  injectReducer('skill', skill.default);
  injectReducer('education', education.default);
  renderRoute(component);
});

importModules.catch(errorLoading);
        },
        }
      ]
    },
{
  path: '*',
    name: 'notfound',
      getComponent(nextState, cb) {
    System.import('views/PageNotFound')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
},
  ];
}
