import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.email(),
	password: z.string().min(8),
});

type FormType = z.infer<typeof formSchema>;

const SignUpPage = () => {
	const form = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (body: FormType) => {
		console.log(body);
	};
	return (
		<div className="grow flex items-center justify-center">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Create New Account</CardTitle>
					<CardDescription>
						Enter your Detail below to create an account
					</CardDescription>
					<CardAction>
						<Button variant="link">Login</Button>
					</CardAction>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col gap-6"
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} autoComplete="additional-name" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="m@example.com"
												autoComplete="username"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="password"
												autoComplete="current-password"
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full">
								Sign in
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default SignUpPage;
