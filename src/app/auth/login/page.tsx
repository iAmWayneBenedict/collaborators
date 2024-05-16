import BannerGradient from "@/components/layouts/users/BannerGradient";
import BannerContent from "@/components/layouts/users/BannerContent";
import Layout from "@/components/layouts/users/Layout";
import Container from "@/components/layouts/Container";
import LoginForm from "./components/Form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
	const { user } = await validateRequest();
	if (user) redirect("/");
	return (
		<Layout>
			<Container className="mt-32 lg:mt-48 2xl:mt-52 flex flex-row h-full gap-10 lg:gap-16">
				<div className="hidden md:flex">
					<BannerGradient classNames="w-[25vw] max-w-[25rem] h-full" />
				</div>
				<div className="w-full">
					<BannerContent
						title={`Resource Hub: \n Sign In for Software Goodness`}
						description={`Dive into a wealth of coding libraries, frameworks, and tools curated just for you. \n Remember, your next breakthrough awaits! 🚀
                        `}
					/>
					<LoginForm />
				</div>
			</Container>
		</Layout>
	);
}
