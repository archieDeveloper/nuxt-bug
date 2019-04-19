export const state = () => ({});

export const mutations = {};

export const actions = {
	async get ({ commit, state }) {
		try {
			return await this.$axios.get('test');
		} catch (error) {
			return error;
		}
	}
};

export const getters = {};
