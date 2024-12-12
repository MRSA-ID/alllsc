import Image from "next/image";
import React from "react";

const ContactUs = () => {
	return (
		<div className="min-h-screen w-full flex justify-center relative">
			<div className="absolute inset-0 z-[-1]">
				<Image
					src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fcontact-us%2Fbg.png&w=1920&q=100"
					alt={"Contact Us Background"}
					fill
					sizes="100vw"
					blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fcontact-us%2Fbg.png&w=1920&q=100"
					className="pointer-events-none"
					style={{
						position: "absolute",
						height: "100%",
						width: "100%",
						inset: "0px",
						objectFit: "cover",
						color: "transparent",
					}}
				/>
				<div className="absolute inset-0 bg-[rgba(12,33,65,0.5)] backdrop-blur-sm"></div>
			</div>
			<div className="px-4 sm:px-8 lg:px-16 py-8 container max-w-[1000px] z-10 relative">
				<div className="text-2xl font-bold text-white mb-8 mt-12 text-center">
					Any Questions? Ask Our Assistance Here!
				</div>
				<div className="grid md:grid-cols-2 gap-8 px-6">
					<div className="col-span-2 md:col-span-1 group">
						<label
							htmlFor="First Name"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							First Name
						</label>
						<input
							type="text"
							id="First Name"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
					<div className="col-span-2 md:col-span-1 group">
						<label
							htmlFor="Last Name"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							Last Name
						</label>
						<input
							type="text"
							id="Last Name"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
					<div className="col-span-2 md:col-span-1 group">
						<label
							htmlFor="Email"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							Email
						</label>
						<input
							type="email"
							id="Email"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
					<div className="col-span-2 md:col-span-1 group">
						<label
							htmlFor="Contact Number"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							Contact Number
						</label>
						<input
							type="text"
							id="Contact Number"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
					<div className="col-span-2 group">
						<label
							htmlFor="Subject"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							Subject
						</label>
						<input
							type="text"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
					<div className="col-span-2 group">
						<label
							htmlFor="Message"
							className="font-semibold text-[#AAAEB6] group-focus-within:text-[#FFF] group-active:text-[#FFF]">
							Message
						</label>
						<input
							type="text"
							className="flex h-10 w-full border border-input bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 !border-0 !bg-transparent active:bg-transparent !border-b rounded-none focus:!border-white focus:!text-[#FFF] active:!text-[#FFF] text-[#AAAEB6] font-normal px-0"
						/>
					</div>
				</div>
				<div className="flex md:justify-end justify-center mt-6 px-6">
					<button
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 font-bold !bg-[#FFF] !text-[#000] px-8"
						disabled>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
