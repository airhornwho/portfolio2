import React from 'react'
import { Link, Button, Card, CardBody, Image, Chip } from "@nextui-org/react";
import ProfileCard from '../components/profileCard';


const Page = () => {
  return (
	<>
	<div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(130,119,108,0.7),rgba(255,255,255,0))]"></div>
	<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
	</section>
	<div className="flex justify-center">
		<section className="grid grid-cols-12 gap-3 max-w-[1200px] p-6">
			<div className="col-span-5 row-span-2 bg-red-50">
				<Card className="flex flex-col p-6 h-[200px] ">
					<p>My name is Aaron</p>
				</Card>
			</div>
			
			<div className="col-span-3 row-span-2 bg-red-50">
				<Card className="flex flex-col p-6 h-[200px] ">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-4 row-span-4 bg-red-50">
				<Card className="flex flex-col p-6 h-[200px] ">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-6 row-span-2 bg-red-50">
				<Card className="flex flex-col p-6 h-[200px] ">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-2 row-span-2 bg-red-50">
				<Card className="flex flex-col p-6 h-[200px] ">
					<p>Name</p>
				</Card>
			</div>
			
			
			

		</section>
	</div>
	
	</>
  )
}

export default Page