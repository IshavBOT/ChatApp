 const Login = () => {
 	return (
 		<div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
 			<div className='w-full p-6 rounded-xl shadow-2xl bg-gray-800/40 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-700/50'>
 				<h1 className='text-3xl font-bold text-center text-white mb-6'>
 					Login to
 					<span className='text-blue-500 ml-2'>ChatApp</span>
 				</h1>
 				<form className='space-y-4'>
 					<div>
 						<label className='block text-gray-300 text-xs font-medium mb-1'>
 							Username
 						</label>
 						<input 
 							type='text' 
 							placeholder='Enter username' 
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
 					<div className='flex items-center justify-between'>
 						<a href='#' className='text-xs text-gray-400 hover:text-blue-500 transition duration-200'>
 							{"Don't"} have an account?
 						</a>
 					</div>
 					<button className='w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200'>
 						Sign In
 					</button>
 				</form>
 			</div>
 		</div>
 	);
 };
 export default Login;