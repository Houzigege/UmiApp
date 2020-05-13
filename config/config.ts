import { defineConfig } from 'umi';
import routes from './routers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
});
