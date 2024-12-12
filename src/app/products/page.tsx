import Image from "next/image";
import React from "react";

const Products = () => {
	return (
		<div className="bg-[#FFF]">
			<div className="flex justify-center">
				<div className="py-8 container px-4 sm:px-8 lg:px-16">
					<div className="text-2xl md:text-3xl pb-8 mt-8">
						<h1
							className="font-bold text-[25px] md:text-[35px] text-[#1F2839CC] md:text-[#B69D74CC] md:italic text-center"
							style={{
								textShadow:
									"rgb(255, 255, 255) 0px 4px 4px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 4px 4px",
							}}>
							PRODUCTS & SERVICES
						</h1>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-4 md:gap-0">
				<div className="px-4 md:px-0">
					<div className="w-full h-full relative cursor-pointer md:rounded-none rounded-lg overflow-hidden">
						<Image
							src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fproducts%2Fradio-trucking-system.jpg&w=2048&q=75"
							alt={"Alt_galery"}
							width={2000}
							height={500}
							loading="lazy"
							className="w-full h-full z-[2] aspect-[2/1]"
						/>
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								right: "0",
								bottom: "0",
								background:
									"linear-gradient(rgba(182, 157, 116, 0.8), rgba(220, 216, 209, 0.8))",
								zIndex: "1",
							}}></div>
						<div className="text-[20px] font-bold md:text-[25px] absolute top-1/2 -translate-y-1/2 w-full text-center px-4 text-[#253961] z-[3]">
							RADIO TRUNKING SYSTEM
						</div>
					</div>
				</div>
				<div className="px-4 md:px-0">
					<div className="w-full h-full relative cursor-pointer md:rounded-none rounded-lg overflow-hidden">
						<Image
							src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fproducts%2Fradio-link-data.jpg&w=2048&q=75"
							alt={"Alt_galery"}
							width={2000}
							height={500}
							loading="lazy"
							className="w-full h-full z-[2] aspect-[2/1]"
						/>
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								right: "0",
								bottom: "0",
								background:
									"linear-gradient(rgba(31, 40, 57, 0.8), rgba(220, 216, 209, 0.8))",
								zIndex: "1",
							}}></div>
						<div className="text-[20px] font-bold md:text-[25px] absolute top-1/2 -translate-y-1/2 w-full text-center px-4 text-[#EBF5F8] z-[3]">
							RADIO LINK DATA COMM SCADA / TELEMETRY
						</div>
					</div>
				</div>
				<div className="px-4 md:px-0">
					<div className="w-full h-full relative cursor-pointer md:rounded-none rounded-lg overflow-hidden">
						<Image
							src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fproducts%2Fsurveillance-security-system.jpg&w=2048&q=75"
							alt={"Alt_galery"}
							width={2000}
							height={500}
							loading="lazy"
							className="w-full h-full z-[2] aspect-[2/1]"
						/>
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								right: "0",
								bottom: "0",
								background:
									"linear-gradient(rgba(31, 40, 57, 0.8), rgba(220, 216, 209, 0.8))",
								zIndex: "1",
							}}></div>
						<div className="text-[20px] font-bold md:text-[25px] absolute top-1/2 -translate-y-1/2 w-full text-center px-4 text-[#EBF5F8] z-[3]">
							SURVEILLANCE SECURITY SYSTEM SENSOR MONITORING AND APPLICATION
							SOFTWARE
						</div>
					</div>
				</div>
				<div className="px-4 md:px-0">
					<div className="w-full h-full relative cursor-pointer md:rounded-none rounded-lg overflow-hidden">
						<Image
							src="https://alssacorp.co.id/_next/image?url=%2Fimg%2Fproducts%2Fpublic-trucking.jpg&w=2048&q=75"
							alt={"Alt_galery"}
							width={2000}
							height={500}
							loading="lazy"
							className="w-full h-full z-[2] aspect-[2/1]"
						/>
						<div
							style={{
								position: "absolute",
								top: "0",
								left: "0",
								right: "0",
								bottom: "0",
								background:
									"linear-gradient(rgba(182, 157, 116, 0.8), rgba(220, 216, 209, 0.8))",
								zIndex: "1",
							}}></div>
						<div className="text-[20px] font-bold md:text-[25px] absolute top-1/2 -translate-y-1/2 w-full text-center px-4 text-[#253961] z-[3]">
							PUBLIC TRUNKING
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<div className="py-8 container px-4 sm:px-8 lg:px-16 flex gap-4 flex-col text-[#19253E]">
					<div>
						<div>
							<div
								className="uppercase md:normal-case text-[20px] md:text-[28px] font-black cursor-pointer text-center md:text-start"
								style={{
									textShadow:
										"rgb(255, 255, 255) 0px 4px 4px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 4px 4px",
								}}>
								Services Available
							</div>
							<p className="text-[16px] md:text-[20px] text-justify mt-2">
								We specialize in offering comprehensive services encompassing
								design, installation, and maintenance. With our dedicated crew
								available 24/7, rest assured that we are always on standby to
								monitor your systems and promptly resolve any issues that may
								arise.
							</p>
						</div>
					</div>
					<div>
						<div>
							<div
								className="uppercase md:normal-case text-[20px] md:text-[28px] font-black cursor-pointer text-center md:text-start"
								style={{
									textShadow:
										"rgb(255, 255, 255) 0px 4px 4px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 4px 4px",
								}}>
								Other Products & Services Inquiries
							</div>
							<p className="text-[16px] md:text-[20px] text-justify mt-2">
								ALSSA Corporindo also accepts procurements of other products and
								services in case clients have specific requirements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
