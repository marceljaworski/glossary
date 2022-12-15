import { useEffect, useState } from 'react';
import data from '../data/data.json'
import Card from '../components/Card'

interface ITerm {
	term: string;
	meaning: string;
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
	return (
		<>
			<p>There are {terms.length}</p>
			<div className= "glossaryContainer">
				{terms.map( (el:any) =>
				<Card el={el} key={el.id}/>
				)}
			</div>


		</>
	);
};