import SnackBar from '../../component/UI/SnackBar/SnackBar.vue'
import LoadingDialog from '../../component/UI/LoadingDialog/LoadingDialog.vue'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    SnackBar, LoadingDialog
  },
  created: function () {
    Vue.prototype.$stub = () => {
      this.$store.commit('setMessage', 'NOCH NICHT IMPLEMENTIERT')
    }
  }
}
