import React from 'react'

interface ListProps {
    title: string
    start: string
    end: string
    place: string
    details: string
}
interface StickyListProps {
    data: ListProps[]
}

export function StickyList({ data }: StickyListProps) {

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className="col-md-6 mb-5 px-4">
                        <div className="topInfo">
                            <span className="data"> {item.start} - {item.end} </span>
                            <h6>{item.place}</h6>
                        </div>

                        <div className="jobInfo">
                        <h4>
                            <span>{item.title}</span>
                        </h4>
                        <p> {item.details} </p>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
