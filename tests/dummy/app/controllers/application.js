import Ember from 'ember';
import { set } from '@ember/object';

export default Ember.Controller.extend({
  completedTodos: Ember.computed.filterBy('model', 'isComplete'),

  onToggle(todoId) {
    let todos = this.get('model').map(todo => {
      if (todo.id === todoId) {
        set(todo, 'isComplete', !todo.isComplete);
      }

      return todo;
    });

    this.set('model', todos);
  },

  actions: {
    resetAll() {
      const updated = this.get('model').map(todo => {
        set(todo, 'isComplete', false);
        return todo;
      });
      this.set('model', updated);
    },
  },
});
