import projects from '~/assets/projects.json'

export const state = () => ({
  activeProjectId: projects[Object.keys(projects)[0]].id,
  activeProject: null
})

export const mutations = {
  setActiveProject(state, projectId) {
    state.activeProjectId = projectId
    state.activeProject = projects[projectId]
  }
}

function setActiveProject(store, projectId) {
  store.commit('setActiveProject', projectId)
}

function throttled(delay, fn) {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export const actions = {
  setActiveProject,
  throttled,
  setActiveProjectThrottled: throttled(750, setActiveProject)
}
