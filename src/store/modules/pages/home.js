import api from '@/api';

const types = {
  SET_RECORDS: 'SET_RECORDS',
};

const state = {
  records: null,
};

const getters = {
  getRecords: (state) => state.records,
};

const mutations = {
  [types.SET_RECORDS](state, payload) {
    state.records = payload;
  },
};

const actions = {
  async getRecords({ commit }, data) {
    const response = await api.getDiversityRecords(data.table, data.params);
    commit(types.SET_RECORDS, response.data);
    return response;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
