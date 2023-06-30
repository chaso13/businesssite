import loadable from "@loadable/component"

const Insight = loadable(() => import("./Insight"))
//https://www.googleapis.com/pagespeedonline/v5/runPagespeed?fields=lighthouseResult/categories/*/score&category=performance&category=best-practices&category=accessibility&category=seo&url=https://www.deadly-accurate.com/
export default function Insights() {
const numbers = [
    { num: 100, ide: 'Performance' },
    { num: 96, ide: 'Accessibility' },
    { num: 100, ide: 'Best Practices' },
    { num: 100, ide: 'SEO' }
]
return (
            <div className="flex flex-row select-none">
                {
                    numbers.map((numbers, index) => (
                        <Insight key={index} number={numbers.num} identifier={numbers.ide} />
                    ))
                }
            </div>
)
}