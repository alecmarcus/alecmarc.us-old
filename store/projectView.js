import projects from '~/assets/projects.json'

export const state = () => ({
  activeProjectId: projects[Object.keys(projects)[0]].id,
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
