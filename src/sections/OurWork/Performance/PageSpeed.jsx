/* eslint-disable react/prop-types */


export default function PageSpeed({ number }) {
    return (
        <div className="flex justify-around w-32">
            <svg viewBox="0 0 36 36" className="block max-w-[80%] max-h-[128px] fill-page-speed-fill stroke-[0.6] stroke-page-speed-fill">
                <path
                    className="fill-page-speed-fill stroke-page-speed-fill opacity-20 stroke-[2.2]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path style={{ strokeLinecap: 'round' }} className="fill-none stroke-[2.2] animate-fill-circle"
                    strokeDasharray={`${number}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="22" className="stroke-page-speed-text text-[0.7em] font-thin" style={{ textAnchor: "middle" }}>
                    {number}
                </text>
            </svg>
        </div>
    )
}
