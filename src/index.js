module.exports = function(sch, option) {
  const renderData = {};
  return {
    panelDisplay: [
        {
            panelName: 'component.wxml',
            panelValue: renderData.wxml,
            panelType: 'xml'
        },
        {
            panelName: 'component.wxss',
            panelValue: renderData.wxss,
            panelType: 'style'
        },
        {
            panelName: 'component.js',
            panelValue: renderData.js,
            panelType: 'js'
        },
        {
            panelName: 'component.json',
            panelValue: renderData.json,
            panelType: 'json'
        }
    ],
    noTemplate: true,
    prettierOpt: {}                                             // 非必须，用于执行模板渲染后代码格式化配置
  };
}
