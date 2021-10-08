import Navbar from './components/Navbar';
import Phone from './components/phones/Phone';

import { useState } from 'react';

function App() {
	const [phones, setPhones] = useState([
		{
			id: 1,
			img: 'https://res.cloudinary.com/ezetradein/image/upload/v1605058424/ezetradein-website/products/smartphones/Samsung/s10.png',
			name: 'Samsong',
			carrier: 'carrier locked',
			storage_size: '250gb',
			price: '$240',
			quantity: '22',
		},
		{
			id: 1,
			img: 'https://res.cloudinary.com/ezetradein/image/upload/v1605058424/ezetradein-website/products/smartphones/Samsung/s10.png',
			name: 'Samsong',
			carrier: 'carrier locked',
			storage_size: '250gb',
			price: '$240',
			quantity: '22',
		},
		{
			id: 1,
			img: 'https://res.cloudinary.com/ezetradein/image/upload/v1605058424/ezetradein-website/products/smartphones/Samsung/s10.png',
			name: 'Samsong',
			carrier: 'carrier locked',
			storage_size: '250gb',
			price: '$240',
			quantity: '22',
		},
		{
			id: 1,
			img: 'https://res.cloudinary.com/ezetradein/image/upload/v1605058424/ezetradein-website/products/smartphones/Samsung/s10.png',
			name: 'Samsong',
			carrier: 'carrier locked',
			storage_size: '250gb',
			price: '$240',
			quantity: '22',
		},
		{
			id: 1,
			img: 'https://res.cloudinary.com/ezetradein/image/upload/v1605058424/ezetradein-website/products/smartphones/Samsung/s10.png',
			name: 'Samsong',
			carrier: 'carrier locked',
			storage_size: '250gb',
			price: '$240',
			quantity: '22',
		},
	]);

	return (
		<>
			<Navbar />
			<div className='container'>
				<Phone phones={phones} />
			</div>
		</>
	);
}

export default App;
