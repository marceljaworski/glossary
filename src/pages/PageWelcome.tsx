import { useEffect, useState } from 'react';
import data from '../data/data.json'
import Card from '../components/Card'

interface ITerm {
	term: string;
	meaning: string;
	isOpen: boolean;
}
export const PageWelcome = () => {
	const [terms, setTerms] = useState<ITerm[]>([])
	
	useEffect(() => {
		const _terms: ITerm[] = [];
        data.glossary.forEach((rawTerm: any) => {
            const _term: ITerm = {
                ...rawTerm,
                isOpen: false,
            };
            _terms.push(_term);
        });
		setTerms(_terms);
	}, [])
	const handleFlashcard = (el: ITerm) => {
		el.isOpen = !el.isOpen;
		setTerms([...terms]);
	}
	return (
		<>
			<p>There are {terms.length}</p>
			<div className= "glossaryContainer">
				{terms.map( (el:any) =>
				 	<div className= "card">
					 	<h3 onClick={() => handleFlashcard(el)}>{el.term}</h3>
				 			{el.isOpen && (<p>{el.meaning}</p>)}
			 		</div>  
				)}
			</div>


		</>
	);
};