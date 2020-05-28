import { Effect, Reducer, Action } from '@/interfaces/models/dva';
import * as authService from '../services/api';

export const namespace = 'user';

const initialState: any = {
  msg: '',
  status: '',
  loading: false,
  name: '456',
};

const reducers: Partial<Record<any, Reducer<any>>> = {
  updateState(state, { payload }: Action<any>) {
    return { ...state, ...payload };
  }
};

const effects: Partial<Record<any, Effect>> = {
  *login({ type, payload }, { put, call }) {
    try {
      yield put({type: 'updateState', payload: {loading: true} });
      const login = yield call(authService.a, payload);
      console.log(login);
      yield put({type: 'updateState', payload: {loading: false, name: payload.name} });
    } catch (err) {
      console.error(err);
      const { msg = '登录失败' } = err || {};
      yield put({type: 'updateState', payload: { msg, loading: false, status: 'error' } });
    }
  },
};

export default {
  namespace,
  state: initialState,
  effects,
  reducers,
};
