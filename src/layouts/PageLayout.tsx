import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
	return (
		<div className="flex flex-col gap-5 min-h-[100dvh]">
			<Navbar />
			<div className="container mx-auto grow p-1">
				<Outlet />
			</div>
		</div>
	);
};

export default PageLayout;
