export const state = () => ({
    all: [
      {
        id: 'Bulbizarre',
        content:
          ' st le faux texte standard de l\'imprimerie depuis les anné'
      },
      {
        id: 'Salamèche',
        content:
          ' qui quod? Architecto atque dolor ea, inventore molestias nisi'
      },
      {
        id: 'Carapuce',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Aspicot',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Roucool',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Rattata',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Piafabec',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Abo',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Pikachu',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Sabelette',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Mélofée',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
      {
        id: 'Groupix',
        content:
          ' ndard. De nombreuses suites logicielles de mise en page '
      },
    ]
  });
  export const mutations = {
    add(state, projet) {
      console.log(projet);
      state.all.push(projet)
    },
    remove(state, {todo}) {
      state.all.splice(state.all.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  };
  
  export const actions = {
    addProject({commit}, params) {
      console.log('test');
      commit('add', params);
    }
  };