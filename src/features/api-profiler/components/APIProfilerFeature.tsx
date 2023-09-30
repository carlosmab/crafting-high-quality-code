

interface Props {
  title: string, 
  items: string[],
  status: string,
}

function APIProfilerFeature({title, items, status}: Props) {
  return (
    <div >
      <h3>{title}</h3>
      <p>{status}</p>
      <div>{items.map((item, itemIndex) => 
        <p key={itemIndex}>{item}</p>)
      }</div>            
    </div>
  )
}

export default APIProfilerFeature
