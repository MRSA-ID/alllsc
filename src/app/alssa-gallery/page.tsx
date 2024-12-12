import Image from "next/image";
import React from "react";

const Gallery = () => {
	const data_image = [
		{
			id: "1",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FSITE_1_S0ayMuC.jpg&w=640&q=75",
		},
		{
			id: "2",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6110.jpg&w=640&q=75",
		},
		{
			id: "3",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6113.jpg&w=640&q=75",
		},
		{
			id: "4",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6121.jpg&w=640&q=75",
		},
		{
			id: "5",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6122.jpg&w=640&q=75",
		},
		{
			id: "6",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6124.jpg&w=640&q=75",
		},
		{
			id: "7",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6129.jpg&w=640&q=75",
		},
		{
			id: "8",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FIMG_6141.jpg&w=640&q=75",
		},
		{
			id: "9",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2FJTB1.jpg&w=640&q=75",
		},
		{
			id: "10",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F2.jpg&w=640&q=75",
		},
		{
			id: "11",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F3.jpg&w=640&q=75",
		},
		{
			id: "12",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F4.jpg&w=640&q=75",
		},
		{
			id: "13",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F5.jpg&w=640&q=75",
		},
		{
			id: "14",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F7.jpg&w=640&q=75",
		},
		{
			id: "15",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F8.jpg&w=640&q=75",
		},
		{
			id: "16",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F9.jpg&w=640&q=75",
		},
		{
			id: "17",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F10_RkiyWYA.jpg&w=640&q=75",
		},
		{
			id: "18",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F12_wD0hhun.jpg&w=640&q=75",
		},
		{
			id: "19",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F13.jpg&w=640&q=75",
		},
		{
			id: "20",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F14.jpg&w=640&q=75",
		},
		{
			id: "21",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F15.jpg&w=640&q=75",
		},
		{
			id: "22",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F16.jpg&w=640&q=75",
		},
		{
			id: "23",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F17.jpg&w=640&q=75",
		},
		{
			id: "24",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F18.jpg&w=640&q=75",
		},
		{
			id: "25",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F20.jpg&w=640&q=75",
		},
		{
			id: "26",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F21.jpg&w=640&q=75",
		},
		{
			id: "27",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2F22.jpg&w=640&q=75",
		},
		{
			id: "28",
			uri: "https://alssacorp.co.id/_next/image?url=https%3A%2F%2Fapi.alssacorp.co.id%2Fmedia%2Fgallery%2Falssa_34TH.jpg&w=640&q=75",
		},
	];
	return (
		<div className="bg-[#FFF]">
			<div className="flex justify-center">
				<div className="container px-4 sm:px-8 lg:px-16 pt-8">
					<div className="mt-8 text-4xl lg:text-5xl text-center md:text-start">
						<h1 className="font-light text-[#1F2839] hidden md:block">
							ALSSA&apos;s
						</h1>
						<h1 className="text-[#F1C248] font-bold md:font-black">
							<span className="md:hidden text-[#1F2839]">ALSSA&apos;s</span>{" "}
							Gallery
						</h1>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="container md:pb-8 px-0 lg:px-16">
					<div className="bg-[#38619F] hidden md:grid grid-cols-3 md:gap-8 md:p-8 lg:gap-12 lg:p-12 mt-8">
						{data_image.map((galery) => (
							<div
								className="relative aspect-square w-full aspect-square w-full bg-[#38619F]"
								key={galery.id}>
								<Image
									src={galery.uri}
									alt={"Alt_galery" + galery.id}
									fill
									sizes="500px"
									blurDataURL={galery.uri}
									className="object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
