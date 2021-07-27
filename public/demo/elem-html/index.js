import iDraw from 'idraw';
const data = {
  elements: [
    {
      name: "html-001",
      x: 200,
      y: 120,
      w: 150,
      h: 100,
      type: "html",
      angle: 0,
      desc: {
        html: `
          <style>
          .btn-box {
            margin: 10px 0;
          }
          .btn {
            line-height: 1.5715;
            position: relative;
            display: inline-block;
            font-weight: 400;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            border: 1px solid transparent;
            box-shadow: 0 2px #00000004;
            cursor: pointer;
            user-select: none;
            height: 32px;
            padding: 4px 15px;
            font-size: 14px;
            border-radius: 2px;
            color: #000000d9;
            background: #fff;
            border-color: #d9d9d9;
          }
          .btn-primary {
            color: #fff;
            background: #1890ff;
            border-color: #1890ff;
            text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
            box-shadow: 0 2px #0000000b;
          }
          </style>
          <div>
            <div class="btn-box">
              <button class="btn">
                <span>Button</span>
              </button>
            </div>
            <div class="btn-box">
              <button class="btn btn-primary">
                <span>Button Primary</span>
              </button> 
            </div>
          </div>
        `,
      },
    },
  ],
}

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
});
idraw.setData(data)
idraw.selectElementByIndex(0);
