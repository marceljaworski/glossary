import data from '../data/data.json'

export const PageWelcome = () => {
	
	return (
		<>
			<p>Welcome to this site.</p>
			<div className= "glossaryContainer">
				{data.glossary.map( (el) =>
				<div className= "glossaryCard" key={el.id}>
					<h3>{el.id}. {el.term}</h3>
					<p>{el.meaning}</p>
				</div>  
				
				)}
			</div>


		</>
	);
};