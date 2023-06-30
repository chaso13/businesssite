import React from 'react'
import HeroDivider from '../../assets/hero-divider.svg'

export default function ScrollForMore() {
  return (
    <div id="div_block-577-315" class="ct-div-block h-[200px] ml-[12px] " style={{ position: 'relative', display: 'flex', flexDirection: 'row' }}>
      <img id="image-578-315" alt="" src={HeroDivider} style={{ position: 'absolute', top: '-150%'}}class="ct-image" />
      <div style={{ transform: 'rotate(-90deg)', left: '-40px', position: 'absolute', top: '-100%' }} id="text_block-579-315" class="ct-text-block">
        Scroll to read more&nbsp;
      </div>
    </div>
  )
}