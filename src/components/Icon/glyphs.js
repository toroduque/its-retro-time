import React from 'react'

const glyphs = {
    circle: (
        <circle cx="16.5" cy="16.5" r="15.5" fillRule="evenodd"/>
    ),
    close: (
        <path d="M32 4.122L28.878 1 16.5 13.378 4.122 1 1 4.122 13.378 16.5 1 28.878 4.122 32 16.5 19.622 28.878 32 32 28.878 19.622 16.5z" fillRule="nonzero"/>
    ),
    cross: (
        <path d="M32 18.714H18.714V32h-4.428V18.714H1v-4.428h13.286V1h4.428v13.286H32z" fillRule="nonzero"/>
    ),
    
    delete: (
        <path d="M23.25 11.549v17.58h-14V11.55h14zM20.625 1h-8.75l-1.75 1.758H4v3.516h24.5V2.758h-6.125L20.625 1zm6.125 7.032h-21V29.13c0 1.934 1.575 3.516 3.5 3.516h14c1.925 0 3.5-1.582 3.5-3.516V8.032z" fillRule="nonzero"/>
    ),

    github: (
        <path d="M16.608.455C7.614.455.32 7.748.32 16.745c0 7.197 4.667 13.302 11.14 15.456.815.15 1.112-.353 1.112-.785 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353.148-1.052.569-1.77 1.034-2.177-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.233 1.677-4.371-.168-.412-.727-2.069.16-4.311 0 0 1.367-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549 15.62 15.62 0 0 1 4.078.549c3.11-2.108 4.475-1.67 4.475-1.67.889 2.242.33 3.899.163 4.311C26.37 12.66 27 14.115 27 15.893c0 6.258-3.809 7.635-7.437 8.038.584.503 1.105 1.497 1.105 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.294.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29" fillRule="evenodd"/>
    ),

    hamburger: (
        <g fillRule="evenodd">
            <path d="M1 4h31v4H1zM1 14h31v4H1zM1 24h31v4H1z"/>
        </g>
    ),

    mode: (
        <path d="M15.71.5L7.027 14.71h17.369L15.71.5zm0 6.063l3.048 4.99h-6.11l3.063-4.99zm8.685 11.305a7.096 7.096 0 0 0-7.106 7.106 7.096 7.096 0 0 0 7.106 7.105 7.096 7.096 0 0 0 7.105-7.105 7.096 7.096 0 0 0-7.105-7.106zm0 11.053a3.949 3.949 0 0 1-3.948-3.947 3.949 3.949 0 0 1 3.948-3.948 3.949 3.949 0 0 1 3.947 3.948 3.949 3.949 0 0 1-3.947 3.947zM1.5 31.29h12.632V18.658H1.5v12.631zm3.158-9.473h6.316v6.316H4.658v-6.316z" fillRule="nonzero"/>
    ),
    pencil: (
        <path d="M1 25.542V32h6.457l19.046-19.048-6.458-6.458L1 25.542zm5.028 3.014H4.444V26.97l15.601-15.603 1.584 1.584-15.6 15.604zM31.496 5.529l-4.03-4.03A1.69 1.69 0 0 0 26.245 1c-.447 0-.878.172-1.205.5L21.888 4.65l6.457 6.458 3.151-3.151a1.715 1.715 0 0 0 0-2.429z" fillRule="nonzero"/>
    ),
    share: (
        <path d="M26.167 22.912c-1.225 0-2.32.467-3.158 1.198l-11.487-6.458a4.93 4.93 0 0 0 .145-1.09 4.93 4.93 0 0 0-.145-1.09L22.88 9.078a4.905 4.905 0 0 0 3.287 1.26C28.84 10.337 31 8.252 31 5.67 31 3.085 28.841 1 26.167 1c-2.675 0-4.834 2.085-4.834 4.669 0 .373.065.731.145 1.089L10.12 13.154a4.905 4.905 0 0 0-3.287-1.26C4.16 11.894 2 13.979 2 16.562c0 2.584 2.159 4.669 4.833 4.669a4.905 4.905 0 0 0 3.287-1.26l11.471 6.473c-.08.327-.129.67-.129 1.012 0 2.505 2.11 4.544 4.705 4.544 2.594 0 4.704-2.039 4.704-4.544 0-2.506-2.11-4.544-4.704-4.544zm0-18.8c.886 0 1.61.7 1.61 1.557 0 .856-.724 1.556-1.61 1.556-.886 0-1.611-.7-1.611-1.556 0-.856.725-1.557 1.61-1.557zM6.833 18.118c-.886 0-1.61-.7-1.61-1.556 0-.856.724-1.556 1.61-1.556.886 0 1.611.7 1.611 1.556 0 .856-.725 1.556-1.61 1.556zm19.334 10.925c-.886 0-1.611-.7-1.611-1.556 0-.856.725-1.556 1.61-1.556.887 0 1.612.7 1.612 1.556 0 .856-.725 1.556-1.611 1.556z" fillRule="nonzero"/>
    ),
    users: (
        <path d="M11.56 18.77C7.764 18.77.2 20.75.2 24.697v2.964h22.721v-2.964c0-3.946-7.563-5.927-11.36-5.927zm-7.408 5.927c1.335-.917 4.563-1.976 7.409-1.976s6.073 1.06 7.409 1.976H4.152zm7.903-7.903a5.934 5.934 0 0 0 5.927-5.927 5.934 5.934 0 0 0-5.927-5.928 5.934 5.934 0 0 0-5.928 5.928 5.934 5.934 0 0 0 5.928 5.927zm0-8.397a2.466 2.466 0 0 1 2.47 2.47 2.466 2.466 0 0 1-2.47 2.47 2.466 2.466 0 0 1-2.47-2.47 2.466 2.466 0 0 1 2.47-2.47zM22.92 18.77c1.923 1.439 3.249 3.357 3.249 5.893v2.998h6.63v-2.998c0-3.46-5.801-5.43-9.879-5.893zm-1.58-1.976c3.05 0 5.532-2.659 5.532-5.927 0-3.269-2.482-5.928-5.532-5.928a5.15 5.15 0 0 0-2.371.593 9.67 9.67 0 0 1 1.58 5.335 9.67 9.67 0 0 1-1.58 5.334 5.15 5.15 0 0 0 2.37.593z" fillRule="nonzero"/>
    )
}

export default glyphs