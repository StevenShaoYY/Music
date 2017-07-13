/**
 * Created by shaojunyan on 2017-7-7.
 */
import {playMode} from 'common/js/config';
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {}
};

export default state;
