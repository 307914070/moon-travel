import './App.css'
import { observer } from 'mobx-react'
import Goddess from './components/goddess'
import Scene from './components/scene'
import Energy from './components/energy'
import Cake from './components/cake'
import { useEffect } from 'react'
import store from './store'

function App() {

  const reset = () => {
    alert(1)
  }

  // 到达月球
  useEffect(() => {
    if (store.arrive) {
      const congratulations = document.createElement('div')
      congratulations.classList.add('congratulations')
      congratulations.innerHTML = '经过你的努力!<br />嫦娥终于与你在月球相见.<br />祝你们中秋快乐！'
      document.body.appendChild(congratulations)
    }
  }, [store.arrive])

  // 登月失败
  useEffect(() => {
    if (store.travelFailed) {
      const congratulations = document.createElement('div')
      congratulations.classList.add('congratulations')
      congratulations.innerHTML = `很不幸，嫦娥姐姐登月过程中发生意外； <br />你只好一个人在广寒宫过中秋了。 `
      document.body.appendChild(congratulations)
      document.querySelector('.goddess')?.classList.add('failed');
    }
  }, [store.travelFailed])

  return (
    <div className="App">
      <Scene />
      <Goddess />
      <Energy />
      <Cake />
    </div>
  )
}

export default observer(App)
