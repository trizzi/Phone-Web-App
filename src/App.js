import Navbar from './components/layout/Navbar';
import Phone from './components/phones/Phone';

import PhoneState from './context/phone-context/phoneState';

function App() {
	return (
		<PhoneState>
			<>
				<Navbar />
				<div className='container'>
					<Phone />
				</div>
			</>
		</PhoneState>
	);
}

export default App;
