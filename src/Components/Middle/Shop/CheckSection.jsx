import { useRef } from "react";


const CheckSection = (prop) => {
  const {title, options, filterType} = prop;
  const checkRefs = useRef(null);

  const onChoose = (e, index) => {
    if ( e.target.checked && filterType === 'numeric') {
      checkRefs.current.forEach((key, ref) => {
        if ( index !== key )ref.checked = false;
      })
    }
  }
  

  return (
    <div>
      <h2>{title}</h2>
      {
        options.map((option, index) => {
          return <div key={option.label + 'check'}>
            <input 
            className="mr-2"
            ref={(node) => {
              if ( checkRefs.current === null )
                checkRefs.current = new Map();
              if ( node ) checkRefs.current.set(node, index);
              else checkRefs.current.delete(index);
            }} 
            type="checkbox" name={title} value={option.value} 
            onChange={(e) => onChoose(e, index)}
            />
            <label>{option.label}</label>
          </div>
        })
      }
    </div>
  ) 
}


export default CheckSection