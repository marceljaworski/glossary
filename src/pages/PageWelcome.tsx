import { useEffect, useState } from 'react';
import data from '../data/data.json';


interface ITerm {
	id: number;
	term: string;
	meaning: string;
	isOpen: boolean;
	
}
const zahl: number = 1;
console.log(zahl)
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
	const aList = (letter: any ) => terms.filter(el => el.term.charAt(0) == letter.toUpperCase())
	const abc= ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W", "X", "Y", "Z"]

	// console.log()
	// const handleSubmit = (event: any ) => {
	// 	const name= target.name
	// 	const _term: ITerm = {
	// 		id: terms.length,

	// 		isOpen: false,
	// 	};
	// }

	return (
		<>
			{/* <div className="addWord">
				<form onSubmit={handleSubmit}>
					<label>
						Term:
						<input type="text" name= "term" value={target} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div> */}
			<p>There are {terms.length} <i>terms</i></p>
			<div className= "glossaryContainer">
				{abc.map( (letter: string) =>
					<div className='letterContainer'>
						<h3><i>{letter}</i></h3>
						{aList(letter).map( (el: ITerm) =>
							<div className= "card" key={el.id}>
							<h3 onClick={() => handleFlashcard(el)}>{el.term}</h3>
								{el.isOpen && (
									<div className="textContainer">
										
										<p>{el.meaning}</p>
									</div>
								)}
						</div>  
						)}

					</div>

				)}
			</div>
		</>
	);
};