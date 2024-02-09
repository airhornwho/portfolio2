import React from 'react'
import { Link, Button, Card, CardBody, Image, Chip } from "@nextui-org/react";


const Page = () => {
  return (
	<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		<Card>
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
						<Chip variant="shadow" color="primary" size="sm">
							Github
						</Chip>
						<Chip variant="shadow" color="primary" size="sm">
							Linkedin
						</Chip>
						<Chip variant="shadow" color="primary" size="sm">
							Gmail
						</Chip>
					</div>
				</div>
			</CardBody>
		</Card>
	</section>
  )
}

export default Page