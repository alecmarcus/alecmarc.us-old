const projects = env.projects

export const state = () => ({
  projectArray: Object.keys(projects),
  activeProjectId: null,
  activeProject: null
})

export const mutations = {
  setActiveProject(state, projectId) {
    if (projectId != null) {
      state.activeProjectId = projectId
      state.activeProject = projects[projectId]
    } else {
      state.activeProjectId = null
      state.activeProject = null
    }
  }
}

function setActiveProject(store, projectId) {
  store.commit('setActiveProject', projectId)
}

export const actions = {
  setActiveProject
}
