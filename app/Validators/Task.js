'use strict'

class Task {
  get rules () {
    return {
      name: 'required|max:30'
    }
  }

  get messages() {
    return {
      'required': '{{ field }} is required.',
      'max': 'max 30 characters'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = Task
