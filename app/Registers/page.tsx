const Registers = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-4 sm:p-6 md:p-8">
            <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-md w-full transform hover:scale-105 transition-all duration-300">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Daftar Akun Baru</h1>
                <form className="space-y-6">
                    <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-indigo-600 transition-colors duration-200">Nama</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                            placeholder="Nama Lengkap Anda" 
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-indigo-600 transition-colors duration-200">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                            placeholder="anda@example.com" 
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-indigo-600 transition-colors duration-200">Kata Sandi</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" 
                                placeholder="Masukkan kata sandi yang kuat" 
                            />
                            <button 
                                type="button" 
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-indigo-600 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
                        >
                            Daftar Sekarang
                        </button>
                    </div>
                </form>
                <div className="mt-8 text-center">
                    <span className="text-sm text-gray-600">Sudah punya akun? </span>
                    <a href="/Logins" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">Masuk sekarang</a>
                </div>
            </div>
        </div>
    )
    }
    
    export default Registers