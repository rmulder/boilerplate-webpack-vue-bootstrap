export default {
  name: 'snack-bar',
  props: ['type', 'message'],
  computed: {
    active: function () {
      return this.message !== null && typeof this.message !== typeof undefined && this.dismissed === false
    }
  },
  data: function () {
    return {
      dismissed: false
    }
  },
  methods: {
    dismiss: function () {
      this.dismissed = true
    }
  },
  watch: {
    message: function (newVal) {
      if (newVal === null) {
        this.dismissed = false
      }
    }
  }
}
