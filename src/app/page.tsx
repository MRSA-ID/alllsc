"use client";
import Image from "next/image";
import { Scrollbar, Pagination, EffectCoverflow } from "swiper/modules";
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

	const breakpoints = {
		600: {
			slidesPerView: 5,
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
		console.log("index: ", index);
		const title = data.find((_, i) => i === index)?.title as string;
		console.log("title: ", title);
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
				<div className="bg-[#1F283911]">
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
								centeredSlides
								pagination={{ el: ".swiper-pagination", clickable: true }}
								modules={[Pagination, Scrollbar, EffectCoverflow]}
								className="swiper_container w-full max-w-[1200px] h-full"
								slidesPerView={5}
								onActiveIndexChange={(val) => getTitle(val.realIndex)}
								coverflowEffect={{
									stretch: 0,
									depth: 100,
									modifier: 2,
								}}>
								{data?.map((current) => (
									<SwiperSlide key={current.id}>
										<img
											src={current.uri}
											alt={"Alt " + current.title}
											className="w-[150px] h-[150px] mx-auto my-auto object-contain object-center"
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

			<div className="py-10">
				<div className="bg-red-400 py-10"></div>
			</div>
		</main>
	);
}
