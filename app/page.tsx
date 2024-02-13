import React from 'react'
import { Link, Button, Card, CardBody, Image, Chip } from "@nextui-org/react";
import ProfileCard from '../components/profileCard';


const Page = () => {
  return (
	<>
	{/* The background---------------------------------------------------------------- */}
	<div className="absolute top-0 z-[-3] h-screen w-screen  border-8 border-solid border-black"></div>
	<div className="absolute left-[calc(20px)] top-[calc(20px)] z-[-2] h-[calc(100vh-40px)] w-[calc(100vw-40px)] bg-red-50 bg-opacity-80 border-8 border-solid rounded-3xl border-transparent"></div>
	<div className="flex flex-row items-center justify-center ">
	<div className="absolute top-[calc(-1.8rem)] justify-center items-center border-8 border-solid bg-black border-black rounded-full py-3 px-6 w-[calc(30rem)] text-black"><li></li></div>
	</div>
	{/* ---------------------------------------------------------------- */}
	<section className="flex flex-col items-center">
		<div className="h-screen w-screen grid grid-cols-12 gap-5 p-20">
			{/* <ProfileCard></ProfileCard> */}
			<div className="col-span-5 row-span-2 bg-red-50">
				<Card isHoverable className="flex flex-col p-6 h-full" shadow="lg">
					<p>My name is Aaron</p>
				</Card>
			</div>
			<div className="col-span-3 row-span-2 bg-red-50">
				<Card isHoverable className="flex flex-col p-6 h-full">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-4 row-span-4 bg-red-50">
				<Card isHoverable className="flex flex-col p-6 h-full">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-6 row-span-2 bg-red-50">
				<Card isHoverable className="flex flex-col p-6 h-full">
					<p>Name</p>
				</Card>
			</div>
			<div className="col-span-2 row-span-2 bg-red-50">
				<Card isHoverable className="flex flex-col p-6 h-full">
					<p>Name</p>
				</Card>
			</div>
		</div>
		
	</section>
	
	</>
  )
}

export default Page