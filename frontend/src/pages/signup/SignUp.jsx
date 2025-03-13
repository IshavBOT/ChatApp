// // import { Link } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";
// import { useState } from "react";
// // import useSignup from "../../hooks/useSignup";

// const SignUp = () => {
// 	const [inputs, setInputs] = useState({
// 		fullName: "",
// 		username: "",
// 		password: "",
// 		confirmPassword: "",
// 		gender: "",
// 	});

// 	const { loading, signup } = useSignup();

// 	const handleCheckboxChange = (gender) => {
// 		setInputs({ ...inputs, gender });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await signup(inputs);
// 	};

// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='John Doe'
// 							className='w-full input input-bordered  h-10'
// 							value={inputs.fullName}
// 							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='johndoe'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.username}
// 							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.password}
// 							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 							value={inputs.confirmPassword}
// 							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
// 						/>
// 					</div>

// 					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

// 					<Link
// 						to={"/login"}
// 						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
// 						href='#'
// 					>
// 						Already have an account?
// 					</Link>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
// 							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
			<div className='w-full p-6 rounded-xl shadow-2xl bg-gray-800/40 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-700/50'>
				<h1 className='text-3xl font-bold text-center text-white mb-6'>
					Sign Up to
					<span className='text-blue-500 ml-2'>ChatApp</span>
				</h1>

				<form className='space-y-4'>
					<div>
						<label className='block text-gray-300 text-xs font-medium mb-1'>
							Full Name
						</label>
						<input 
							type='text' 
							placeholder='Ishav Manav' 
							className='w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200'
						/>
					</div>

					<div>
						<label className='block text-gray-300 text-xs font-medium mb-1'>
							Username
						</label>
						<input 
							type='text' 
							placeholder='notishav' 
							className='w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200'
						/>
					</div>

					<div>
						<label className='block text-gray-300 text-xs font-medium mb-1'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200'
						/>
					</div>

					<div>
						<label className='block text-gray-300 text-xs font-medium mb-1'>
							Confirm Password
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full px-3 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-200'
						/>
					</div>

					<GenderCheckbox />

					<div className='flex items-center justify-between'>
						<a href='#' className='text-xs text-gray-400 hover:text-blue-500 transition duration-200'>
							Already have an account?
						</a>
					</div>

					<button className='w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200'>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;