/* eslint-disable react/prop-types */
import loadable from "@loadable/component"

const PageSpeed = loadable(() => import('./PageSpeed'))

export default function Insight({ number, identifier }) {
    return (
        <div className="flex-col max-w-[128px]">
            <PageSpeed number={number} />
            <div className="justify-around w-full flex">
                <h2 className="self-center">
                    {identifier}
                </h2>
            </div>
        </div>
    )
}
