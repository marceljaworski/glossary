import data from '../data/data.json'
import Card from '../components/Card'

export const PageWelcome = () => {
	
	return (
		<>
			<p>Welcome to this site.</p>
			<div className= "glossaryContainer">
				{data.glossary.map( (el:any) =>
				<Card el={el} key={el.id}/>
				)}
			</div>


		</>
	);
};