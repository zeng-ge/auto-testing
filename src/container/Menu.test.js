describe('testing-menu', function(){
  var vueContainer = null;
  var vueInstance = null;
  var menuComponent = null;
  var items = []

  beforeAll(function(){
    items = [
      {name: 'java', text: 'Java'},
      {name: 'c', text: 'C'}
    ];
    menuComponent = Vue.component('testing-menu');
    vueContainer = document.createElement('div');
    // vueContainer.id = 'testing-menu';
    // vueContainer.appendChild(document.createElement('testing-menu'));
    document.body.appendChild(vueContainer);
    // vueInstance = new Vue({
    //   el: vueContainer
    // })
  })

  it('should menu is component', function(){
    expect(menuComponent.name).toEqual('VueComponent');
  })

  it('should init component successful', function(){
    var instance = new menuComponent({propsData: {items: items}});
    var vm = instance.$mount();
    expect(vm.items.length).toBe(2);
    expect(vm.items[0]).toEqual(items[0]);
  })

  it('should update component successful', function(done){
    var instance = new menuComponent();
    var vm = instance.$mount();
    vm.items = items.slice(1);
    Vue.nextTick(function(){
      expect(vm.$el.children.length).toBe(1)
      done()
    })
  })

  afterAll(function(){
    // document.body.removeChild(vueContainer)
  })
})