type TypeDemoItem = {
  name: string;
  key: string;
  exclude?: string[]
}

type TypeDemoList = {
  name: String;
  list: TypeDemoItem[]
}[]

const demoList: TypeDemoList = [
  {
    name: 'Quick Start',
    list: [
      {
        name: 'Basic',
        key: 'basic',
      },
      {
        name: 'Options',
        key: 'options',
      },
      {
        name: 'Config',
        key: 'config',
      },
    ]
  },
  {
    name: 'Elements\' Types',
    list: [
      {
        name: 'Text',
        key: 'elem-text',
        exclude: ['data.js'],
      },
      {
        name: 'Rect',
        key: 'elem-rect',
        exclude: ['data.js'],
      },
      {
        name: 'Circle',
        key: 'elem-circle',
        exclude: ['data.js'],
      },
      {
        name: 'Image',
        key: 'elem-image',
        exclude: ['data.js'],
      },
      {
        name: 'SVG',
        key: 'elem-svg',
        exclude: ['data.js'],
      },
      {
        name: 'HTML',
        key: 'elem-html',
        exclude: ['data.js'],
      },
    ]
  },
  {
    name: 'API',
    list: [
      {
        name: 'idraw.setData',
        key: 'api-setData',
      },
      {
        name: 'idraw.getData',
        key: 'api-getData',
      },
      {
        name: 'idraw.resetSize',
        key: 'api-resetSize',
      },
      {
        name: 'idraw.selectElement',
        key: 'api-selectElement',
      },
      {
        name: 'idraw.selectElementByIndex',
        key: 'api-selectElementByIndex',
      },
      {
        name: 'idraw.updateElement',
        key: 'api-updateElement',
      },
      {
        name: 'idraw.addElement',
        key: 'api-addElement',
      },
      {
        name: 'idraw.deleteElement',
        key: 'api-deleteElement',
      },
      {
        name: 'idraw.moveDownElement',
        key: 'api-moveDownElement',
      },
      {
        name: 'idraw.moveUpElement',
        key: 'api-moveUpElement',
      },
      {
        name: 'idraw.scale',
        key: 'api-scale',
      },
      {
        name: 'idraw.scrollLeft',
        key: 'api-scrollLeft',
      },
      {
        name: 'idraw.scrollTop',
        key: 'api-scrollTop',
      },
      {
        name: 'idraw.on',
        key: 'api-on',
      },
      {
        name: 'idraw.off',
        key: 'api-off',
      },
    ]
  },
]

export default demoList;