import { Outlet } from "react-router-dom";

const PageLayout = () => {
	return (
		<div className="flex flex-col gap-5 min-h-[100dvh]">
			<nav className="px-2 py-4 bg-red-500 flex justify-between items-center">
				<ul className="_>li:list-none flex gap-2 text-neutral-50">
					<li>Home</li>
					<li>About</li>
				</ul>

				<div className="flex gap-2">
					<button
						type="button"
						className="px-3 py-1 rounded-full cursor-pointer bg-gray-50 text-black border-gray-600 border-[0.5px]"
					>
						Login
					</button>
					<button
						type="button"
						className="px-3 py-1 rounded-full cursor-pointer text-gray-50 bg-black border-gray-300"
					>
						SignUp
					</button>
				</div>
			</nav>
			<div className="container mx-auto grow p-1">
				<Outlet />
			</div>
		</div>
	);
};

export default PageLayout;
