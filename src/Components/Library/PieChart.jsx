import React from 'react'

const PieChart = ({radius, items, strokeWidth, gap, rounded}) => {
    const width = (radius + strokeWidth + 8) * 2;
    const height = width; 
    const circum = 2 * radius * Math.PI; 
    let formerLength = 0;
    
  return (
    <div>
        <svg width={width} height={height}>
        
            {
                items.map((item, index) => {
                    const length = circum * item.percentage; 
                    const invisiblePart = circum - length;

                    if ( index > 0 )
                        formerLength += invisiblePart;

                    return <circle
                    r={radius}
                    cx={width / 2}
                    cy={height / 2}
                    fill='transparent'
                    stroke={item.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${length - gap} ${invisiblePart + gap}`}
                    strokeDashoffset={-formerLength}
                    strokeLinecap={ rounded ? 'round' : 'square'}
                    >

                    </circle>
                })
            }
        </svg>
    </div>
  )
}

export default PieChart