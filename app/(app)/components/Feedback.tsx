'use client'

import { useState } from "react"

export default function Feedback(){
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="Feedback">
            Feedback
        </div>
    )
}

function FeedbackForm(){
    return (
        <div className="FeedbackForm">

        </div>
    )
}