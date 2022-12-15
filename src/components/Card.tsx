
function Card({ el }) {
  return (
    <div className= "card">
		<h3>{el.id}. {el.term}</h3>
		<p>{el.meaning}</p>
	</div>  
				
  )
}

export default Card