import loadable from '@loadable/component'
const Insights = loadable(() => import('./Insights'))

export default function Performance() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <h1>Image goes Here</h1>
      </div>
      <div className="w-1/2">
        <Insights />        
      </div>
    </div>
  )
}
