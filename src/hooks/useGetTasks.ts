import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/getTasks";

export const useGetTasks = () => {
	return useQuery({
		queryFn: getTasks,
		queryKey: ["tasks"],
	});
};
