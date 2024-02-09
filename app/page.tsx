import React from 'react'
import { Link, Button, Card, CardBody, Image, Chip } from "@nextui-org/react";


const Page = () => {
  return (
	<>
	<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(130,119,238,0.3),rgba(255,255,255,0))]"></div>
	<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		<Card isBlurred isHoverable className="border-none bg-slate-950" shadow="sm">
			<CardBody>
				<div className="flex flex-col w-full">
					<div className="flex justify-center">
						<Image src="/image.png" width={200} height={200} alt="image"
						className="justify-center rounded-lg border-large"/>
					</div>
					<div className="flex justify-center pt-2">
						<h2 className="text-3xl font-bold">airhorn</h2>
					</div>
					<div className="flex justify-center m-4 gap-4">
						<Chip variant="bordered" color="secondary" size="sm">
							Github
						</Chip>
						<Chip variant="bordered" color="secondary" size="sm">
							Linkedin
						</Chip>
						<Chip variant="bordered" color="secondary" size="sm">
							Gmail
						</Chip>
					</div>
				</div>
			</CardBody>
		</Card>
	</section>
	</>
  )
}

export default Page