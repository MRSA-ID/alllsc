import Link from "next/link";
import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Navbar = () => {
	return (
		<div className="flex justify-center !z-50">
			<div className="container flex h-[64px] items-center px-4 sm:px-8 lg:px-16 ">
				<div className="md:flex w-full justify-between">
					<Link
						href="/"
						className="mr-6 flex items-center space-x-2">
						<span className="text-lg font-bold sm:inline-block">allsa</span>
					</Link>
					<nav className="hidden md:flex items-center gap-6">
						<nav
							data-orientation="horizontal"
							aria-label="main"
							dir="ltr"
							className="relative z-10 flex max-w-max flex-1 items-center justify-center text-[#fff] !text-md">
							<div
								style={{
									position: "relative",
								}}>
								<ul
									className="group flex flex-1 list-none items-center justify-center space-x-1"
									data-orientation="horizontal"
									dir="ltr">
									<li>
										<Link
											href="/"
											className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors pr-0 pl-[32px]">
											<p
												style={{
													fontSize: "16px",
												}}>
												Home
											</p>
										</Link>
									</li>
									<li>
										<Popover.Root>
											<Popover.Trigger className="PopoverTrigger pl-[32px] py-[8px] text-md font-medium flex gap-2 items-center">
												About Us
												<CaretDownIcon
													className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
													aria-hidden
												/>
											</Popover.Trigger>
											<Popover.Portal>
												<Popover.Content className="PopoverContent z-50 rounded-md border p-4 shadow-md outline-none bg-white text-black">
													<div className="flex flex-col gap-2 w-full justify-center text-[#19253E]">
														<Link
															href="/about-us"
															className="flex items-center gap-2 text-start mb-1 px-4 cursor-pointer">
															<svg
																width="20"
																height="19"
																viewBox="0 0 20 19"
																fill="none"
																xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M9.0835 6.74992H10.9168V4.91659H9.0835M10.0002 16.8333C5.95766 16.8333 2.66683 13.5424 2.66683 9.49992C2.66683 5.45742 5.95766 2.16659 10.0002 2.16659C14.0427 2.16659 17.3335 5.45742 17.3335 9.49992C17.3335 13.5424 14.0427 16.8333 10.0002 16.8333ZM10.0002 0.333252C8.79638 0.333252 7.60438 0.570355 6.49223 1.03102C5.38008 1.49169 4.36955 2.1669 3.51835 3.01811C1.79927 4.73719 0.833496 7.06877 0.833496 9.49992C0.833496 11.9311 1.79927 14.2626 3.51835 15.9817C4.36955 16.8329 5.38008 17.5082 6.49223 17.9688C7.60438 18.4295 8.79638 18.6666 10.0002 18.6666C12.4313 18.6666 14.7629 17.7008 16.482 15.9817C18.2011 14.2626 19.1668 11.9311 19.1668 9.49992C19.1668 8.29614 18.9297 7.10414 18.4691 5.99199C18.0084 4.87984 17.3332 3.86931 16.482 3.01811C15.6308 2.1669 14.6202 1.49169 13.5081 1.03102C12.3959 0.570355 11.2039 0.333252 10.0002 0.333252ZM9.0835 14.0833H10.9168V8.58325H9.0835V14.0833Z"
																	fill="#19253E"></path>
															</svg>
															About ALSSA
														</Link>
														<Link
															href="/alssa-gallery"
															className="flex items-center gap-2 text-start mb-1 px-4 cursor-pointer">
															<svg
																width="18"
																height="19"
																viewBox="0 0 18 19"
																fill="none"
																xmlns="http://www.w3.org/2000/svg">
																<g clipPath="url(#clip0_1762_25)">
																	<path
																		d="M1.5 8.5C1.5 4.9645 1.5 3.19675 2.598 2.098C3.6975 1 5.4645 1 9 1C12.5355 1 14.3032 1 15.4012 2.098C16.5 3.1975 16.5 4.9645 16.5 8.5C16.5 12.0355 16.5 13.8032 15.4012 14.9012C14.304 16 12.5355 16 9 16C5.4645 16 3.69675 16 2.598 14.9012C1.5 13.804 1.5 12.0355 1.5 8.5Z"
																		stroke="#19253E"
																		strokeWidth="1.875"></path>
																	<path
																		d="M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z"
																		stroke="#19253E"
																		strokeWidth="1.875"></path>
																	<path
																		d="M1.5 8.87492L2.814 7.72517C3.14335 7.43722 3.56981 7.28517 4.00704 7.29979C4.44427 7.31441 4.85962 7.49461 5.169 7.80392L8.3865 11.0214C8.63618 11.2711 8.96591 11.4246 9.31766 11.4551C9.66941 11.4855 10.0206 11.3909 10.3095 11.1879L10.5337 11.0304C10.9504 10.7378 11.4541 10.5951 11.9624 10.6257C12.4706 10.6564 12.9535 10.8586 13.332 11.1992L15.75 13.3749"
																		stroke="#19253E"
																		strokeWidth="1.875"
																		strokeLinecap="round"></path>
																</g>
																<defs>
																	<clipPath id="clip0_1762_25">
																		<rect
																			width="18"
																			height="18"
																			fill="white"
																			transform="translate(0 0.5)"></rect>
																	</clipPath>
																</defs>
															</svg>
															ALSSA's Gallery
														</Link>
													</div>
													<Popover.Arrow className="PopoverArrow" />
												</Popover.Content>
											</Popover.Portal>
										</Popover.Root>
									</li>
									<li>
										<Link
											href="/products"
											className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors pr-0 pl-[32px]">
											<p
												style={{
													fontSize: "16px",
												}}>
												Products
											</p>
										</Link>
									</li>
									<li>
										<Link
											href="/contact-us"
											className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors pr-0 pl-[32px]">
											<p
												style={{
													fontSize: "16px",
												}}>
												Contact Us
											</p>
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</nav>
				</div>
			</div>
			<div
				className="z-[100] flex justify-center items-center w-fit h-9 md:hidden flex relative [&>*:nth-child(1)]:bg-[#FFF] false"
				style={{
					transition: "all 0.1s ease-in-out",
				}}>
				<div className="w-6 h-0.5 rounded-full before:content-[''] before:absolute before:w-6 before:h-0.5 before:rounded-lg before:bg-[#FFF] before:transition-all before:duration-400 before:delay-150 before:-translate-y-[8px] after:content-[''] after:absolute after:w-6 after:h-0.5 after:rounded-lg after:bg-[#FFF] after:delay-150 after:transition-all after:duration-400 after:translate-y-[8px] }"></div>
			</div>
		</div>
	);
};

export default Navbar;
