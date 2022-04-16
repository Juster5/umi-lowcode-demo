import { init, plugins } from '@alilc/lowcode-engine';
import { useEffect } from 'react';
import '../universal/global.scss';
import registerPlugins from '../universal/plugin';
import { scenarioSwitcher } from '../sample-plugins/scenario-switcher';

export default function IndexPage() {
  useEffect(() => {
    const preference = new Map();
    preference.set('DataSourcePane', {
      importPlugins: [],
      dataSourceTypes: [
        {
          type: 'fetch',
        },
        {
          type: 'jsonp',
        },
      ],
    });

    (async function main() {
      // await plugins.register(scenarioSwitcher);
      await registerPlugins();

      init(
        document.getElementById('root')!,
        {
          // designMode: 'live',
          // locale: 'zh-CN',
          enableCondition: true,
          enableCanvasLock: true,
          // 默认绑定变量
          supportVariableGlobally: true,
          // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
          // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
          simulatorUrl: [
            'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
            'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js',
          ],
        },
        preference,
      );
    })();
    // init(document.getElementById('root'), {
    //   enableCondition: true,
    //   enableCanvasLock: true,
    // });
  }, []);
  return <div></div>;
}
