import React from 'react'
import { observer } from 'mobx-react'
import tuzi from '../../assets/tuzi.png'
import cxy from '../../assets/cxy.jpeg'
import './index.less'

function Moon() {
    return  <div className="moon">
            <img src={cxy} className="cxy"/>
            <img src={tuzi} className='tuzi' />
        </div>
}

export default observer(Moon)
