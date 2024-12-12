"use client";
import React, { useState } from "react";
import { Pagination } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
	const [page, setPage] = useState(1);
	const itemsPerPage = 12;

	const data = [
		{
			id: "1",
			title: "Donggi Senoro LNG",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FDS.png&w=256&q=75",
		},
		{
			id: "2",
			title: "Pertamina EP Asset 4",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPEP_Asset_4.png&w=256&q=75",
		},
		{
			id: "3",
			title: "Pertamina Hulu Energi (WMO)",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FWMO-removebg-preview.png&w=256&q=75",
		},
		{
			id: "4",
			title: "ENI Muara Bakau",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FENI_EhPyc5I.png&w=256&q=75",
		},
		{
			id: "5",
			title: "Pertamina Hulu Sanga Sanga",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPHSS.png&w=256&q=75",
		},
		{
			id: "6",
			title: "Pertamina Hulu Sanga Sanga",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPHSS.png&w=256&q=75",
		},
		{
			id: "7",
			title: "Bhimasena Power Indonesia",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FBPI.png&w=256&q=75",
		},
		{
			id: "8",
			title: "Chiyoda Saipem Tripatra SAE (CSTS)",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FCSTS.png&w=256&q=75",
		},
		{
			id: "9",
			title: "LRT Jabodebek",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FLRT.png&w=256&q=75",
		},
		{
			id: "10",
			title: "Badak LNG",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FBadakLNG.png&w=256&q=75",
		},
		{
			id: "11",
			title: "Pertamina EP Ramba",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPEP_Ramba.png&w=256&q=75",
		},
		{
			id: "12",
			title: "Pertamina EP Cepu",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPEPC.png&w=256&q=75",
		},
		{
			id: "13",
			title: "Pertamina Hulu Mahakam",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fbrand_logo%2FPHM.png&w=256&q=75",
		},
	];

	// Calculate total pages
	const totalPages = Math.ceil(data.length / itemsPerPage);
	// Handle page change
	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};
	// Get current page data
	const getCurrentPageData = () => {
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return data.slice(startIndex, endIndex);
	};

	return (
		<div className="bg-[#FFF] text-[#19253E]">
			<div className="w-full h-screen flex relative text-[#FFF] !justify-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-1.jpg&w=1920&q=75"
						alt={"Alt cover image"}
						fill
						sizes="(max-width: 100vw)"
						blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-1.jpg&w=1920&q=75"
						className="object-cover"
					/>
					<div
						style={{
							position: "absolute",
							top: "0",
							left: "0",
							right: "0",
							bottom: "0",
							background:
								"linear-gradient(to bottom, rgba(37, 57, 97, 0.4), rgba(37, 57, 97, 0.4))",
							zIndex: "1",
						}}></div>
					{/* <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, rgba(37, 57, 97, 0.4), rgba(37, 57, 97, 0.4));z-index:1"></div> */}
				</div>
				<div className="relative flex justify-center z-10">
					<div className="container px-4 sm:px-8 lg:px-16 md:w-3/4 h-full flex text-center md:text-start items-center relative z-10">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
							From 1990, ALSSA Corp has been strengthening their presence until
							<span className="text-[#E4C87E]"> now</span>.
						</h1>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-full">
				<div className="py-8 container px-4 sm:px-8 lg:px-16">
					<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
						<h1 className="hidden md:block font-normal">About</h1>
						<h1 className="font-bold md:font-black">
							<span className="md:hidden">About</span>
							ALSSA Corp
						</h1>
					</div>
					<div className="flex flex-col gap-4 text-[#253961] text-justify">
						<p>
							ALSSA Corp is a dynamic and forward-thinking technology company
							that is committed to shaping the future through innovation and
							cutting-edge solutions. With a passion for leveraging technology
							to drive positive change, we aim to empower businesses and
							individuals to thrive in the digital era.
						</p>
						<div className="md:hidden">
							<div className="font-bold flex gap-2 items-center justify-end w-full">
								<p className="cursor-pointer">Read More</p>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"></path>
								</svg>
							</div>
						</div>
						<div className="hidden md:flex flex-col gap-4">
							<p>
								Founded on the principles of excellence and integrity in 1990 by
								Mr. HSU Sugiarto, ALSSA Corp has established itself as a trusted
								leader in the trunking provider landscape. We believe in pushing
								the boundaries of what is possible and constantly challenging
								ourselves to deliver solutions that exceed expectations. ALSSA
								Corp received the title as National Provider Trunking Company in
								2011. As a Nationwide Trunking Provider Company, ALSSA Corp was
								keen on improving their quality and expanding network. With
								that, ALSSA Corp has successfully broaden their existence.
							</p>
							<p>
								Collaboration is at the heart of our approach. We actively seek
								partnerships and collaborations with industry leaders, academic
								institutions, and forward-thinking organizations to foster an
								environment of knowledge exchange and innovation. Through these
								collaborations, we aim to drive collective progress and address
								complex challenges in today&apos;s rapidly evolving digital
								landscape.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-end relative text-[#FFF] !h-[300px] hidden md:block">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-3.jpg&w=1920&q=75"
						alt={"Alt cover image"}
						fill
						sizes="(max-width: 100vw)"
						blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-3.jpg&w=1920&q=75"
						className="object-cover"
					/>
					<div
						style={{
							position: "absolute",
							top: "0",
							left: "0",
							right: "0",
							bottom: "0",
							background:
								"linear-gradient(to bottom, rgba(37, 57, 97, 0.4), rgba(37, 57, 97, 0.4))",
							zIndex: "1",
						}}></div>
				</div>
				<div className="relative z-10"></div>
			</div>

			<div className="flex justify-center w-full">
				<div className="md:pt-8 pb-8 container px-4 sm:px-8 lg:px-16">
					<div className="hidden md:block">
						<div className="text-3xl pb-8">
							<h1 className="font-normal">ALSSA Corp</h1>
							<h1 className="font-black">Nowadays</h1>
						</div>
						<div className="flex flex-col gap-4 text-[#253961]">
							<p>
								In the face of unprecedented challenges brought on by the global
								pandemic, ALSSA Corp stood strong and adapted swiftly to ensure
								business continuity and support our valued customers. Through a
								combination of resilience, innovation, and unwavering
								commitment, we not only survived but thrived during these
								uncertain times.
							</p>
							<p>
								Understanding the unique challenges faced by businesses during
								this era, ALSSA Corp swiftly pivoted to develop and enhance
								customer-centric solutions. We closely engaged with our clients,
								identifying their evolving needs and rapidly implementing
								tailored software solutions to address remote collaboration,
								workflow optimization, and data security challenges. By
								prioritizing customer success, we ensured our clients could
								adapt and thrive in the face of adversity.
							</p>
						</div>
					</div>
					<div className="grid grid-cols md:grid-cols-2 md:pt-8 gap-8 text-center md:text-start">
						<div>
							<p
								className="font-bold text-2xl mb-4 text-[#1F2839] md:text-[#B69D74DD]"
								style={{
									textShadow:
										"rgb(255, 255, 255) 0px 4px 4px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 4px 4px",
								}}>
								Goals
							</p>
							<p className="text-[#253961]">
								Ensure customer satisfaction by consistently providing the best
								solutions that meet their needs and exceed their expectations.
							</p>
						</div>
						<div>
							<p
								className="font-bold text-2xl mb-4 text-[#1F2839] md:text-[#B69D74DD]"
								style={{
									textShadow:
										"rgb(255, 255, 255) 0px 4px 4px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 4px 4px",
								}}>
								Values
							</p>
							<p className="text-[#253961]">
								Strive for excellence in all aspects of our business, aiming for
								the highest quality and performance to fulfill customer
								satisfactions
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center ">
				<div className="relative">
					<div className="w-full h-screen flex relative text-[#FFF] !h-min justify-center items-center px-4 sm:px-8 lg:px-16">
						<div className="absolute inset-0 z-0">
							<Image
								src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-4.jpg&w=1920&q=75"
								alt={"Alt cover image"}
								fill
								sizes="(max-width: 100vw)"
								blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-4.jpg&w=1920&q=75"
								className="object-cover"
							/>
							<div
								style={{
									position: "absolute",
									top: "0",
									left: "0",
									right: "0",
									bottom: "0",
									background: " rgba(37, 57, 97, 0.6)",
									zIndex: "1",
								}}></div>
						</div>
						<div className="relative z-10">
							<div className="text-justify border-t px-[23.5px] sm:px-8 lg:px-[147px] pt-[25px] font-semibold text-[18px] md:text-[28px] mt-[26px] md:mt-[45px]">
								“Innovation, collaboration, and unwavering commitment, ALSSA
								Corporindo is driving transformative change and empowering
								businesses to thrive in the dynamic Indonesian market.”
							</div>
							<div className="border-b px-[23.5px] sm:px-8 lg:px-[147px] mt-[30px] pb-[25px] mb-[26px] md:mb-[45px]">
								<div className="font-bold text-[18px] md:text-[20px]">
									Dian Susanti
								</div>
								<div className="font-medium text-[15px] md:text-[18px]:">
									Owner
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center bg-[#F2F2F2] w-full">
				<div className="py-8 container max-w-[1000px] px-4 sm:px-8 lg:px-16 ">
					<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
						<h1 className="hidden md:block font-normal">Our</h1>
						<h1 className="font-bold md:font-black">
							<span className="md:hidden">Our</span>
							Clients
						</h1>
					</div>
					<div className="w-full flex flex-col items-center">
						<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-[1200px]">
							{getCurrentPageData().map((client) => (
								<div
									className="rounded-lg border bg-card text-card-foreground shadow-sm aspect-square flex items-center justify-center p-0 overflow-hidden w-full h-fit"
									key={client.id}>
									<div className="p-2 bg-transparent h-full">
										<Image
											src={client.uri}
											alt={"Alt_" + client.title + "_" + client.id}
											width={500}
											height={500}
											sizes="500px"
											blurDataURL={client.uri}
											className="object-contain h-full"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full max-w-[1200px] mt-4">
						<p className="text-end mt-4">Last updated: 19 June 2024</p>
					</div>
					<div className="w-full max-w-[1200px] mt-4 flex justify-center">
						<Pagination
							count={totalPages}
							page={page}
							onChange={handleChangePage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
