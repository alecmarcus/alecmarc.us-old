import projects from '~/assets/projects.json'

export const state = () => ({
  activeProject: null,
  activeProjectId: null,
  activeProjectIndex: null,
  projectArray: Object.keys(projects)
})

export const mutations = {
  setActiveProject(state, projectId) {
    if (projectId != null) {
      state.activeProject = projects[projectId]
      state.activeProjectId = projectId
      state.activeProjectIndex = state.projectArray.indexOf(projectId)
    } else {
      state.activeProject = null
      state.activeProjectId = null
      state.activeProjectIndex = null
    }
  }
}

export const getters = {
  nextProjectId(state) {
    const index =
      state.activeProjectIndex + 1 < state.projectArray.length
        ? state.activeProjectIndex + 1
        : 0
    return state.projectArray[index]
  },
  prevProjectId(state) {
    const index =
      state.activeProjectIndex - 1 >= 0
        ? state.activeProjectIndex - 1
        : state.projectArray.length - 1
    return state.projectArray[index]
  }
}

export const actions = {
  setActiveProject(store, projectId) {
    store.commit('setActiveProject', projectId)
  }
}
