import iDraw from 'idraw';

const data = {
  // bgColor: '#f0f0f0',
  elements: [
    {
      name: "rect-001",
      x: 10,
      y: 10,
      w: 200,
      h: 100,
      type: "rect",
      desc: {
        color: "#f0f0f0",
        borderRadius: 20,
        borderWidth: 6,
        borderColor: "#bd0b64",
      },
    },
    {
      name: "rect-002",
      x: 80,
      y: 80,
      w: 200,
      h: 120,
      // angle: 30,
      type: "rect",
      desc: {
        color: "#cccccc",
        borderRadius: 60,
        borderWidth: 6,
        borderColor: "#bd0b64",
      },
    },
    {
      name: "rect-003",
      x: 160,
      y: 160,
      w: 200,
      h: 20,
      type: "rect",
      angle: 80,
      desc: {
        color: "#c0c0c0",
        borderRadius: 20,
        borderWidth: 6,
        borderColor: "#bd0b64",
      },
    },
    {
      name: "rect-004",
      x: 400 - 20,
      y: 300 - 20,
      w: 200,
      h: 100,
      type: "rect",
      lock: true,
      desc: {
        color: "#e0e0e0",
        borderRadius: 20,
        borderWidth: 6,
        borderColor: "#bd0b64",
      },
    },
  ],
};


const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
idraw.initData(data)
idraw.draw();
