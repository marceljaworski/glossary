import { useEffect, useState } from 'react';
import { BsBackspace } from "react-icons/bs";
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
	const letterList = (letter: any ) => terms.filter(el => el.term.charAt(0) == letter.toUpperCase())
	const abc= ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W", "X", "Y", "Z"]
	const [newTerm, setnewTerm] = useState<ITerm>({
		id: terms.length,
		term:"",
		meaning: "",
		isOpen: false,
	
	})
	const handleInput = (event: any) => {
		setnewTerm({
			...newTerm,
			[event.target.name]: event.target.value,
		});
		
	};
	const clickHandler = () => {
		const termsCopy = [...terms];
		termsCopy.push(newTerm)
		setTerms(termsCopy)
		setnewTerm({
			id: terms.length,
			term:"",
			meaning: "",
			isOpen: false,
		
		})
	}
	const handleDelete = (el: any) => {
		const termsCopy = terms.filter((term) => {
			return term.id !== el.id
		})
		setTerms(termsCopy)
	}
	return (
		<>
			<div className="addWord">
				<input type="text" placeholder='Term' onChange={handleInput} value={newTerm.term} name="term"></input>
				<input type="text" placeholder='Meaning' onChange={handleInput} value={newTerm.meaning} name="meaning"></input>
				<button onClick={clickHandler}>Add new Word</button>	
			</div>
			<p>There are {terms.length} <i>terms</i></p>
			<div className= "glossaryContainer">
				{abc.map( (letter: string, index: number) =>
					<div className='letterContainer' key={index}>
						<h3><i>{letter}</i></h3>
						{letterList(letter).map( (el: ITerm,) =>
							<div className= "card" key={el.id}>
								
								<h3 onClick={() => handleFlashcard(el)}>{el.term}</h3><BsBackspace className= "delete" onClick={() => handleDelete(el)} />
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