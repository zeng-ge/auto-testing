Vue.component('testing-menu', {
  props: ['items'],
  template: '\
    <ul>\
      <li v-for="item in items">{{item.text}}</li>\
    </ul>\
  '
})