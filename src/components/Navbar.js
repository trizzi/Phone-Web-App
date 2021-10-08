const Navbar = () => {
	return (
		<div className='navbar bg-dark grid-2'>
			<form>
				<h2>Shop Our Latest Available Stock Here</h2>
				<input
					type='text'
					name='search'
					placeholder='Enter Search Term (e.g iPhone x, 128GB or A1)'
				/>
				<button className='btn '>
					Search
					<i className='fas fa-arrow-right'></i>
				</button>
			</form>
			<div>
				<img src='' alt='' />
			</div>
		</div>
	);
};

export default Navbar;
