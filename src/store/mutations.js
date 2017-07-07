/**
 * Created by shaojunyan on 2017-7-7.
 */
import * as types from './mutation-types';

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  }
};
export default mutations;
