"use client";
import React, { useCallback, useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

interface Product {
	category: string;
	sub_category: string;
	brand: string;
	name: string;
	image: string;
}
const Surveilliance = () => {
	const allProducts = useMemo(
		() => [
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "DS-2DF8442IXS-AELW(T5) - PTZ Cameras",
				image:
					"https://api.alssacorp.co.id/media/product/DS-2DF8442IXS-AELWT5_-_PTZ_Cameras.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "DS-2CD3146G2-IS(U)",
				image: "https://api.alssacorp.co.id/media/product/DS-2CD3146G2-ISU.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "DS-2CD3046G2H-LI(U)",
				image:
					"https://api.alssacorp.co.id/media/product/DS-2CD3046G2H-LIU.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "iDS-2CD7A46G0 S-IZHS(Y)",
				image:
					"https://api.alssacorp.co.id/media/product/iDS-2CD7A46G0_S-IZHSY.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "iDS-9600NXI-I16 NVR",
				image:
					"https://api.alssacorp.co.id/media/product/iDS-9600NXI-I16_NVR.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hikvision",
				name: "iDS-9632NXI-M8",
				image: "https://api.alssacorp.co.id/media/product/iDS-9632NXI-M8_.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "AXIS",
				name: "AXIS XFQ1656 Explosion Protected Camera",
				image:
					"https://api.alssacorp.co.id/media/product/AXIS_XFQ1656_Explosion-Protected_Camera.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "AXIS",
				name: "AXIS XPQ1785 Explosion Protected PTZ Camera",
				image:
					"https://api.alssacorp.co.id/media/product/AXIS_XPQ1785_Explosion-Protected_PTZ_Camera.png",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "AXIS",
				name: "AXIS Camera Station S1216 Rack Recording Server",
				image:
					"https://api.alssacorp.co.id/media/product/AXIS_S1216_Rack_angle_right.png.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "AXIS",
				name: "AXIS TU9001 Control Board",
				image:
					"https://api.alssacorp.co.id/media/product/AXIS_TU9001_Control_Board.jpg",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hanwa",
				name: "TNO-6322ER",
				image: "https://api.alssacorp.co.id/media/product/TNO-6322ER.png",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hanwa",
				name: "TNU-6322E",
				image: "https://api.alssacorp.co.id/media/product/TNU-6322E.png",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hanwa",
				name: "XRN-3210RB2",
				image: "https://api.alssacorp.co.id/media/product/XRN-3210RB2.png",
			},
			{
				category: "Surveillance",
				sub_category: "",
				brand: "Hanwa",
				name: "SPC-7000",
				image: "https://api.alssacorp.co.id/media/product/SPC-7000.png",
			},
		],
		[]
	);

	// State to store filtered products
	const [filteredProducts, setFilteredProducts] = useState(allProducts);

	const radioBrandsCategoriesConfig = [
		{
			title: "Brand",
			filterKey: "brand",
			items: [
				{ id: "Hikvision", label: "Hikvision" },
				{ id: "AXIS", label: "AXIS" },
				{ id: "Hanwa", label: "Hanwa" },
			],
		},
	];

	const handleFilterChange = useCallback(
		(selectedFilters: { [key: string]: string[] }) => {
			// If no filters are selected, show all products
			if (Object.keys(selectedFilters).length === 0) {
				setFilteredProducts(allProducts);
				return;
			}

			// Filter products based on selected filters
			const filtered = allProducts.filter((product) =>
				Object.entries(selectedFilters).every(([key, values]) =>
					values.includes(product[key as keyof Product])
				)
			);

			setFilteredProducts(filtered);
		},
		[allProducts]
	);

	return (
		<div className="bg-[#FFF] relative">
			<div className="hidden md:block !bg-[#253D6C99] text-[#FFF]">
				<div className="container mx-auto flex justify-center py-8 px-4 sm:px-8 lg:px-16">
					<div className="bg-[#b4c2dd70] rounded-[20px] flex flex-col gap-4 px-6 text-center max-w-[800px] py-4">
						<div className="font-bold text-xl">Surveillance</div>
						<div className="font-medium">
							Empower your security with our advanced surveillance solutions,
							delivering real-time monitoring and unparalleled insights.
							Safeguard your assets and ensure peace of mind through our
							cutting-edge technology, designed to protect what matters most.
						</div>
					</div>
				</div>
			</div>

			<Popover.Root>
				{/* show mobile */}
				<div className="md:hidden w-full px-4 sm:px-8 lg:px-16 z-30 sticky top-16 bg-[#FFF] shadow-md">
					<div className="w-full flex justify-between py-4">
						<div className="text-[#1F2839] text-2xl font-bold">
							Surveillance
						</div>

						<Popover.Trigger className="PopoverTrigger">
							<svg
								width="20"
								height="24"
								viewBox="0 0 20 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.4994 12V21.85C12.5494 22.225 12.4244 22.625 12.1369 22.8875C12.0213 23.0034 11.8839 23.0953 11.7327 23.158C11.5815 23.2208 11.4194 23.2531 11.2557 23.2531C11.092 23.2531 10.9299 23.2208 10.7787 23.158C10.6274 23.0953 10.4901 23.0034 10.3744 22.8875L7.86193 20.375C7.7256 20.2417 7.62194 20.0787 7.55905 19.8987C7.49617 19.7188 7.47576 19.5267 7.49943 19.3375V12H7.46193L0.261931 2.775C0.0589417 2.51441 -0.0326513 2.18407 0.00716632 1.85616C0.046984 1.52825 0.214975 1.22943 0.474432 1.025C0.711932 0.85 0.974432 0.75 1.24943 0.75H18.7494C19.0244 0.75 19.2869 0.85 19.5244 1.025C19.7839 1.22943 19.9519 1.52825 19.9917 1.85616C20.0315 2.18407 19.9399 2.51441 19.7369 2.775L12.5369 12H12.4994Z"
									fill="#1F2839"
									fillOpacity="1"></path>
							</svg>
						</Popover.Trigger>
					</div>
				</div>
				<Popover.Portal>
					<Popover.Content className="PopoverContent z-50 w-72 rounded-md border bg-white p-4 text-black shadow-md outline-none">
						<Sidebar
							sections={radioBrandsCategoriesConfig}
							onSelectionChange={handleFilterChange}
						/>
						<Popover.Arrow className="PopoverArrow" />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>

			{/* show dekstop */}
			<div className="flex justify-center">
				<div className="flex flex-col md:flex-row md:container px-4 sm:px-8 lg:px-16 py-4 pb-8">
					{/* show in mobile only */}
					<div className="text-lg text-[#FFF] z-10 md:hidden mb-4 mt-16 font-light">
						Empower your security with our advanced surveillance solutions,
						delivering real-time monitoring and unparalleled insights. Safeguard
						your assets and ensure peace of mind through our cutting-edge
						technology, designed to protect what matters most.
					</div>

					{/* sidebar */}
					<div className="hidden md:block bg-[#1E29390D]">
						<Sidebar
							sections={radioBrandsCategoriesConfig}
							onSelectionChange={handleFilterChange}
						/>
					</div>

					{/* products */}
					<div className="z-[1] md:pl-6 w-full grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 h-fit">
						{filteredProducts.length > 0 ? (
							filteredProducts.map((product, i) => (
								<div key={i}>
									<div className="rounded-lg border text-card-foreground h-full bg-[#F3F4F5] overflow-hidden shadow-md">
										<div className="text-center p-0 relative">
											{/* <div className="absolute top-2 left-2 z-[2] text-xs">
											<div className="p-1 rounded-lg bg-[#F3F4F5A6] text-[#253961]">
												{product.sub_category}
											</div>
										</div> */}
											<div className="relative aspect-square flex bg-[#FFF] items-center justify-center w-full h-full">
												<Image
													src={product.image}
													alt={"products_data " + product.name}
													fill
													sizes="500px"
													blurDataURL={product.image}
													className="object-contain"
												/>
											</div>
											<div className="text-[#253961] h-full text-sm text-start pl-2 py-2">
												<div className="font-bold">{product.brand}</div>
												<div className="font-medium">{product.name}</div>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="text-red-500 font-medium">
								No products available with the selected filters.
							</div>
						)}
					</div>
				</div>
			</div>
			<Image
				src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-6.png&w=1200&q=75"
				alt={"products_data"}
				width={1200}
				height={400}
				blurDataURL="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fhero%2Fhero-6.png&w=1200&q=75"
				className="md:hidden abolsute absolute top-32 left-0 !z-0 max-h-[250px]"
			/>
			<div className="w-full pb-8 flex justify-center">
				<div className="grid grid-cols-2 gap-4">
					<button
						type="button"
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#E8C05B] hover:bg-[#E8C05BAA] z-10"
						style={{
							boxShadow:
								"rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 4px -2px",
						}}>
						Back
					</button>
					<button
						type="button"
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#30AA2D] hover:bg-[#30AA2DAA] z-10"
						style={{
							boxShadow:
								"rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 4px -2px",
						}}>
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default Surveilliance;
