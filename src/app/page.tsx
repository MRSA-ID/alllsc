"use client";
import Image from "next/image";
import {
	Scrollbar,
	Pagination,
	EffectCoverflow,
	Navigation,
	Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import { useEffect, useState } from "react";

export default function Home() {
	const [currentTitle, setCurrentTitle] = useState<string>(" ");
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

	const data_coverage = [
		{
			id: "1",
			number: 13,
			description: "Regional Supports",
		},
		{
			id: "2",
			number: 26,
			description: "Clients & Partners",
		},
		{
			id: "3",
			number: 7,
			description: "Awards & Recognitions",
		},
		{
			id: "4",
			number: 50,
			description: "Projects",
		},
	];

	const data_certifications = [
		{
			id: "1",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fcertificate%2FISO_IEC_27001_2022.jpg&w=640&q=75",
		},
		{
			id: "2",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fcertificate%2FISO_14001_2015.jpg&w=640&q=75",
		},
		{
			id: "3",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fcertificate%2FISO_9001_2015.jpg&w=640&q=75",
		},
		{
			id: "4",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fcertificate%2FISO_45001_2018.jpg&w=640&q=75",
		},
	];

	const breakpoints = {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 5,
		},
		1900: {
			slidesPerView: 5,
		},
	};

	function getTitle(index: number) {
		// setCurrentIndex(index);
		const title = data.find((_, i) => i === index)?.title as string;
		setCurrentTitle(title);
	}

	useEffect(() => {
		return () => {
			console.log(currentTitle);
		};
	}, [currentTitle]);

	return (
		<main className="relative bg-[#fff] text-[#19253E]">
			<div className="w-full h-screen flex justify-end relative text-[#FFF] !justify-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-2.jpg&w=1920&q=75"
						alt={"Alt cover image"}
						fill
						sizes="(max-width: 100vw)"
						blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-2.jpg&w=1920&q=75"
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
				<div className="relative z-10">
					<div className="container w-full flex !justify-end h-full px-4 sm:px-8 lg:px-16">
						<div className="w-full lg:w-3/5 flex items-center text-center lg:text-end relative z-10">
							<h1 className="text-5xl sm:text-6xl tracking-[10%] md:text-8xl font-bold leading-[1.2]">
								The{" "}
								<span className="bg-clip-text text-transparent bg-text-gradient">
									Solution
								</span>{" "}
								for your problems
							</h1>
							<div className="absolute right-0 bottom-32 underline-offset-2 underline text-sm md:text-lg lg:text-xl italic font-bold cursor-pointer">
								Find Our Products
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8">
				<div className="bg-[#1F283911] flex flex-col items-center justify-center">
					<div className="py-8 container px-4 sm:px-8 lg:px-16">
						<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
							<h1 className="hidden md:block font-normal">Glimpse of</h1>
							<h1 className="font-bold md:font-black">
								<span className="md:hidden">Glimpse of</span> Our Satisfied
								Clients
							</h1>
						</div>
						<div className="w-full h-full">
							<Swiper
								spaceBetween={10}
								grabCursor={true}
								loop={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								centeredSlides
								navigation={true}
								pagination={{ el: ".swiper-pagination", clickable: true }}
								modules={[
									Pagination,
									Scrollbar,
									EffectCoverflow,
									Navigation,
									Autoplay,
								]}
								className="swiper_container w-full max-w-[1200px] h-full"
								breakpoints={breakpoints}
								onActiveIndexChange={(val) => getTitle(val.realIndex)}
								coverflowEffect={{
									stretch: 0,
									depth: 100,
									modifier: 2,
								}}>
								{data?.map((current) => (
									<SwiperSlide key={current.id}>
										<Image
											src={current.uri}
											alt={"Alt " + current.title}
											className="w-[150px] h-[150px] mx-auto my-auto object-contain object-center"
											priority={false}
											width={150}
											height={150}
											loading="lazy"
											blurDataURL={current.uri}
											unoptimized
										/>
										{/* <Image
											src={current.uri}
											alt={"Alt " + current.title}
											fill
											quality={100}
											className="object-cover w-[240px] h-[240px]"
											sizes="(max-width: 240px)"
											blurDataURL={current.uri}
											unoptimized
											priority={false}
											loading="lazy"
										/> */}
									</SwiperSlide>
								))}
								{/* <div className="swiper-pagination"></div> */}
							</Swiper>
							<div className="hidden md:block text-black z-10">
								<div className="pt-8">
									<p className="font-semibold italic text-center">
										{currentTitle}
									</p>
								</div>
								<div className="pt-8 w-full flex justify-center">
									{currentTitle}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-8 flex flex-col items-center justify-center">
				<div className="container px-4 sm:px-8 lg:px-16">
					<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
						<h1 className="hidden md:block font-normal">National</h1>
						<h1 className="font-bold md:font-black">
							<span className="md:hidden">National</span> Operation Coverage
						</h1>
					</div>
					<div className="rounded-lg border bg-card text-card-foreground border-none h-full w-full shadow-none">
						<div className="w-full text-[#FFF] p-0">
							<div className="w-full flex justify-center md:rounded-[2em] overflow-hidden">
								<Image
									src={
										"https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fcoverage_map%2FNational.jpg&w=1200&q=75"
									}
									width={1100}
									height={800}
									className="object-contain"
									alt="coverage-map"
									loading="lazy"
								/>
							</div>
						</div>
					</div>

					<div className="flex w-full justify-center pt-8">
						<div className="grid sm:grid-cols-4 gap-6">
							{data_coverage.map((coverage) => (
								<div
									className="flex gap-4 items-center"
									key={coverage.id}>
									<div className="rounded-lg border text-card-foreground shadow-sm bg-[#F1C248] p-4 aspect-square w-[90px] sm:w-[132px]">
										<div className="p-0 flex flex-col justify-center md:justify-start text-center w-full h-fit aspect-square">
											<div className="flex flex-col justify-center sm:justify-start items-center h-fit w-full gap-2 text-[#253961A3] aspect-quare">
												{/* text-shadow:0px 4px 4px #f1c248, 0 0 0 #253961A3, 0px 4px 4px #f1c248 */}
												<div
													className="text-[45px] font-bold leading-none"
													style={{
														textShadow:
															"0px 4px 4px #f1c248, 0 0 0 #253961A3, 0px 4px 4px #f1c248",
													}}>
													{coverage.number}
												</div>
												<div className="hidden sm:block text-[15px] font-medium text-[#253961]">
													{coverage.description}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#1F283911] flex flex-col items-center justify-center">
				<div className="py-8 container px-4 sm:px-8 lg:px-16">
					<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
						<h1 className="hidden md:block font-normal">Company</h1>
						<h1 className="font-bold md:font-black">
							<span className="md:hidden">Company</span> Certifications
						</h1>
					</div>
					<div className="hidden md:grid grid-cols-3 gap-12 text-center">
						{data_certifications.map((certification) => (
							<div
								className="rounded-lg border bg-card text-card-foreground shadow-sm aspect-square flex items-center justify-center p-0"
								key={certification.id}>
								<div className="p-0">
									<Image
										src={certification.uri}
										width={400}
										height={400}
										className="object-contain"
										alt={"certificate " + certification.id}
										loading="lazy"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="py-8 flex flex-col items-center justify-center">
				<div className="container px-4 sm:px-8 lg:px-16">
					<div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
						<h1 className="hidden md:block font-normal">ALSSA Corp</h1>
						<h1 className="font-bold md:font-black">
							<span className="md:hidden">ALSSA Corp</span>&apos;Portfolio
						</h1>
					</div>
					<div className="flex justify-center items-center flex-col">
						<div className="max-w-[1200px] pb-8">
							<p className="text-normal text-md text-justify">
								At ALSSA Corporindo, we&lsquo;re not just building technology
								we&#39;re crafting the very future of digital infrastructure.
								Our portfolio is a testament to the relentless pursuit of
								excellence and a journey through groundbreaking achievements
								that have established us as a linchpin in the technology domain
								since our inception in 1990. Dive into our Portfolio to see how
								our innovative approaches have resolved complex challenges and
								spurred growth for our clients and partners nationwide.
							</p>
						</div>
						<a
							href="https://api.alssacorp.co.id/media/portfolio/Company_Profile_ALSSA_-_Jan_2024_opt_1.pdf"
							className="text-[#FFF] bg-[#1F2839] px-6 py-2 w-fit flex justify-center items-center rounded-lg text-sm">
							<span className="pr-2">See Here!</span>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								fontSize="25">
								<path
									d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
