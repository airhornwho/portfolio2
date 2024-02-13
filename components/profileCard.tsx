import { Card, CardBody, Image, Chip } from '@nextui-org/react'
import React from 'react'

const ProfileCard = () => {
  return (
    <Card  isHoverable className="border-none bg-default-100/90" shadow="sm">
			<CardBody>
				<div className="flex flex-col w-full">
					<div className="flex justify-center">
						<Image src="/image.png" width={200} height={200} alt="image"
						className="justify-center rounded-lg border-large"/>
					</div>
					<div className="flex justify-center pt-2">
						<h2 className="text-3xl font-bold">airhorn</h2>
					</div>
					<div className="flex justify-center m-4 gap-2">
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
  )
}

export default ProfileCard
