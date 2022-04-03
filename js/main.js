  Vue.createApp({
    data() {
      return {
        param: false,
        ok:true,
        "type":"A",
      }
    }
  }).mount('#app')

const inner = 
  {
    data() {
      return {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        parentMessage: 'Родитель',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]


      }
    }
  }



  Vue.createApp(inner).mount('#app2')

  Vue.createApp(
    {
      data() {
        return {
          myObject: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
          }
        }
      }
    }
  ).mount('#app3')


  Vue.createApp(
    {
      data() {
        return {
          items: [
            { message: 'Foo1',id:1 },
            { message: 'Ba2r',id:2 },
            { message: 'Bar3',id:3 },
            { message: 'Bar4',id:4 },
            { message: 'Bar5',id:5 }
          ]
        }
      }
    }
  ).mount('#app4')
