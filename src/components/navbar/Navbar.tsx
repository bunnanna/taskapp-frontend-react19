import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<nav className="px-2 py-4 bg-red-500 flex justify-between items-center">
			<ul className="_>li:list-none flex gap-2 text-neutral-50">
				<li>Home</li>
				<li>About</li>
			</ul>

			<div className="flex gap-2">
				<Button variant={"default"}>Login</Button>
				<Button variant={"secondary"}>SignUp</Button>
			</div>
		</nav>
	);
};

export default Navbar;
